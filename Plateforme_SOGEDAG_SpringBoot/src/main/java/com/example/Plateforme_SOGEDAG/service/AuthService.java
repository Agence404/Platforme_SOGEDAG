package com.example.Plateforme_SOGEDAG.service;


import com.example.Plateforme_SOGEDAG.dto.LoginRequest;
import com.example.Plateforme_SOGEDAG.dto.LoginResponse;
import com.example.Plateforme_SOGEDAG.dto.VerifyPhoneRequest;
import com.example.Plateforme_SOGEDAG.dto.VerifyPhoneResponse;
import com.example.Plateforme_SOGEDAG.exception.CustomAppException;
import com.example.Plateforme_SOGEDAG.models.AdminUser;
import com.example.Plateforme_SOGEDAG.models.PhoneVerificationCode;
import com.example.Plateforme_SOGEDAG.models.enums.TokenType;
import com.example.Plateforme_SOGEDAG.repo.PhoneVerificationCodeRepository;
import com.example.Plateforme_SOGEDAG.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PhoneVerificationCodeRepository phoneVerificationCodeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final SmsService smsService;

    public LoginResponse login(LoginRequest request) {
        AdminUser user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new CustomAppException(
                        HttpStatus.UNAUTHORIZED,
                        "Invalid credentials",
                        "Email or password is incorrect."
                ));

        if (!user.isEnabled()) {
            throw new CustomAppException(
                    HttpStatus.FORBIDDEN,
                    "Account disabled",
                    "This account is disabled."
            );
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new CustomAppException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid credentials",
                    "Email or password is incorrect."
            );
        }

        String code = generateOtp();
        PhoneVerificationCode phoneCode = phoneVerificationCodeRepository
                .findTopByEmailAndUsedFalseOrderByCreatedAtDesc(user.getEmail())
                .orElse(PhoneVerificationCode.builder()
                        .email(user.getEmail())
                        .build());

        phoneCode.setCode(code);
        phoneCode.setUsed(false);
        phoneCode.setAttempts(0);
        phoneCode.setCreatedAt(LocalDateTime.now());
        phoneCode.setExpiresAt(LocalDateTime.now().plusMinutes(5));

        phoneVerificationCodeRepository.save(phoneCode);

        smsService.sendVerificationCode(user.getPhoneNumber(), code);

        String preAuthToken = jwtService.generatePreAuthToken(user.getEmail(), user.getRole());

        return LoginResponse.builder()
                .message("Phone verification code sent successfully.")
                .preAuthToken(preAuthToken)
                .email(user.getEmail())
                .maskedPhone(maskPhone(user.getPhoneNumber()))
                .build();
    }

    public VerifyPhoneResponse verifyPhone(VerifyPhoneRequest request) {
        if (!jwtService.isTokenValid(request.getPreAuthToken())) {
            throw new CustomAppException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid token",
                    "Pre-auth token is invalid."
            );
        }

        TokenType tokenType = jwtService.extractTokenType(request.getPreAuthToken());
        if (tokenType != TokenType.PRE_AUTH_TOKEN) {
            throw new CustomAppException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid token type",
                    "This token is not a pre-auth token."
            );
        }

        String email = jwtService.extractEmail(request.getPreAuthToken());

        AdminUser user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomAppException(
                        HttpStatus.NOT_FOUND,
                        "User not found",
                        "No user found for this token."
                ));

        PhoneVerificationCode phoneCode = phoneVerificationCodeRepository
                .findTopByEmailAndUsedFalseOrderByCreatedAtDesc(email)
                .orElseThrow(() -> new CustomAppException(
                        HttpStatus.BAD_REQUEST,
                        "Code not found",
                        "No active verification code found."
                ));

        if (phoneCode.isUsed()) {
            throw new CustomAppException(
                    HttpStatus.BAD_REQUEST,
                    "Code already used",
                    "This verification code has already been used."
            );
        }

        if (phoneCode.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new CustomAppException(
                    HttpStatus.BAD_REQUEST,
                    "Code expired",
                    "The verification code has expired."
            );
        }

        if (phoneCode.getAttempts() >= 5) {
            throw new CustomAppException(
                    HttpStatus.TOO_MANY_REQUESTS,
                    "Too many attempts",
                    "You have exceeded the maximum number of attempts."
            );
        }

        if (!phoneCode.getCode().equals(request.getCode())) {
            phoneCode.setAttempts(phoneCode.getAttempts() + 1);
            phoneVerificationCodeRepository.save(phoneCode);

            throw new CustomAppException(
                    HttpStatus.BAD_REQUEST,
                    "Invalid code",
                    "The verification code is incorrect."
            );
        }

        phoneCode.setUsed(true);
        phoneVerificationCodeRepository.save(phoneCode);

        String accessToken = jwtService.generateAccessToken(user.getEmail(), user.getRole());

        return VerifyPhoneResponse.builder()
                .message("Phone verified successfully.")
                .accessToken(accessToken)
                .tokenType("Bearer")
                .build();
    }

    private String generateOtp() {
        int otp = 100000 + new Random().nextInt(900000);
        return String.valueOf(otp);
    }

    private String maskPhone(String phone) {
        if (phone == null || phone.length() < 4) return "****";
        return "******" + phone.substring(phone.length() - 4);
    }
}