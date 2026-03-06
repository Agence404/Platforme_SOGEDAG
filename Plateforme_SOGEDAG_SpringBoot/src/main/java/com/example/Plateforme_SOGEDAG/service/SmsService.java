package com.example.Plateforme_SOGEDAG.service;

import org.springframework.stereotype.Service;

@Service
public class SmsService {

    public void sendVerificationCode(String phoneNumber, String code) {
        System.out.println("SMS SENT TO " + phoneNumber + " | CODE = " + code);
    }
}