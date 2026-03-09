package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.LoginRequest;
import com.example.Plateforme_SOGEDAG.dto.LoginResponse;
import com.example.Plateforme_SOGEDAG.dto.VerifyEmailRequest;
import com.example.Plateforme_SOGEDAG.dto.VerifyEmailResponse;
import com.example.Plateforme_SOGEDAG.exception.CustomAppException;
import com.example.Plateforme_SOGEDAG.models.AdminUser;
import com.example.Plateforme_SOGEDAG.models.EmailVerificationCode;
import com.example.Plateforme_SOGEDAG.models.enums.TokenType;
import com.example.Plateforme_SOGEDAG.repo.EmailVerificationCodeRepository;
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
    private final EmailVerificationCodeRepository emailVerificationCodeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final EmailService emailService;

    private static final long OTP_EXPIRATION_MINUTES = 1;
    private static final int MAX_ATTEMPTS = 5;

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
        LocalDateTime now = LocalDateTime.now();

        EmailVerificationCode emailCode = emailVerificationCodeRepository
                .findTopByEmailAndUsedFalseOrderByCreatedAtDesc(user.getEmail())
                .orElse(EmailVerificationCode.builder()
                        .email(user.getEmail())
                        .build());

        emailCode.setCode(code);
        emailCode.setUsed(false);
        emailCode.setAttempts(0);
        emailCode.setCreatedAt(now);
        emailCode.setExpiresAt(now.plusMinutes(OTP_EXPIRATION_MINUTES));

        emailVerificationCodeRepository.save(emailCode);

        emailService.sendVerificationCode(user.getEmail(), code);

        String preAuthToken = jwtService.generatePreAuthToken(user.getEmail(), user.getRole());

        return LoginResponse.builder()
                .message("Verification code sent successfully to email.")
                .preAuthToken(preAuthToken)
                .email(user.getEmail())
                .build();
    }

    public VerifyEmailResponse verifyEmail(VerifyEmailRequest request) {
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

        EmailVerificationCode emailCode = emailVerificationCodeRepository
                .findTopByEmailAndUsedFalseOrderByCreatedAtDesc(email)
                .orElseThrow(() -> new CustomAppException(
                        HttpStatus.BAD_REQUEST,
                        "Code not found",
                        "No active verification code found."
                ));

        if (emailCode.isUsed()) {
            throw new CustomAppException(
                    HttpStatus.BAD_REQUEST,
                    "Code already used",
                    "This verification code has already been used."
            );
        }

        if (emailCode.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new CustomAppException(
                    HttpStatus.BAD_REQUEST,
                    "Code expired",
                    "The verification code has expired."
            );
        }

        if (emailCode.getAttempts() >= MAX_ATTEMPTS) {
            throw new CustomAppException(
                    HttpStatus.TOO_MANY_REQUESTS,
                    "Too many attempts",
                    "You have exceeded the maximum number of attempts."
            );
        }

        if (!emailCode.getCode().equals(request.getCode())) {
            emailCode.setAttempts(emailCode.getAttempts() + 1);
            emailVerificationCodeRepository.save(emailCode);

            throw new CustomAppException(
                    HttpStatus.BAD_REQUEST,
                    "Invalid code",
                    "The verification code is incorrect."
            );
        }

        emailCode.setUsed(true);
        emailVerificationCodeRepository.save(emailCode);

        String accessToken = jwtService.generateAccessToken(user.getEmail(), user.getRole());

        return VerifyEmailResponse.builder()
                .message("Email verified successfully.")
                .accessToken(accessToken)
                .tokenType("Bearer")
                .build();
    }

    private String generateOtp() {
        int otp = 100000 + new Random().nextInt(900000);
        return String.valueOf(otp);
    }
}