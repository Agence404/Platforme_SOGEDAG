package com.example.Plateforme_SOGEDAG.repo;

import com.example.Plateforme_SOGEDAG.models.EmailVerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmailVerificationCodeRepository extends JpaRepository<EmailVerificationCode, Long> {
    Optional<EmailVerificationCode> findTopByEmailAndUsedFalseOrderByCreatedAtDesc(String email);
}