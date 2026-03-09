package com.example.Plateforme_SOGEDAG.service;

import jakarta.annotation.PostConstruct;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String mailUsername;

    @PostConstruct
    public void testEnv() {
        System.out.println("MAIL USERNAME = " + mailUsername);
    }

    public void sendVerificationCode(String toEmail, String firstName, String code) {
        try {
            Context context = new Context();
            context.setVariable("firstName", firstName);
            context.setVariable("code", code);

            String htmlContent = templateEngine.process("verification-code-email", context);

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(mailUsername);
            helper.setTo(toEmail);
            helper.setSubject("SOGEDAG - Verification Code");
            helper.setText(htmlContent, true);

            mailSender.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send verification email.", e);
        }
    }
}