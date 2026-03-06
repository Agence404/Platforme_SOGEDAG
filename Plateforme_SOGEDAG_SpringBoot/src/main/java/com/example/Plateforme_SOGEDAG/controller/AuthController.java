package com.example.Plateforme_SOGEDAG.controller;



import com.example.Plateforme_SOGEDAG.dto.LoginRequest;
import com.example.Plateforme_SOGEDAG.dto.LoginResponse;
import com.example.Plateforme_SOGEDAG.dto.VerifyPhoneRequest;
import com.example.Plateforme_SOGEDAG.dto.VerifyPhoneResponse;
import com.example.Plateforme_SOGEDAG.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Validated @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/verify-phone")
    public ResponseEntity<VerifyPhoneResponse> verifyPhone(@Validated @RequestBody VerifyPhoneRequest request) {
        return ResponseEntity.ok(authService.verifyPhone(request));
    }
}