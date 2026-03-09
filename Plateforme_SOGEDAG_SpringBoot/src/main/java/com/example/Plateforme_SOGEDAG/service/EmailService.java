package com.example.Plateforme_SOGEDAG.service;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    @Value("${spring.mail.username}")
    private String mailUsername;

    @PostConstruct
    public void testEnv() {
        System.out.println("MAIL USERNAME = " + mailUsername);
    }
    public void sendVerificationCode(String toEmail, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("SOGEDAG - Verification Code");
        message.setText("Your verification code is: " + code + "\nThis code expires in 1 minutes.");
        mailSender.send(message);
    }
}