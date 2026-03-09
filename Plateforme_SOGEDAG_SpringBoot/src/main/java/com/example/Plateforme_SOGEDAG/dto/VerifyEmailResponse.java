package com.example.Plateforme_SOGEDAG.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class VerifyEmailResponse {
    private String message;
    private String accessToken;
    private String tokenType;
}