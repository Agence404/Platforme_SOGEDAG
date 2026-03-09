package com.example.Plateforme_SOGEDAG.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VerifyEmailRequest {

    @NotBlank
    private String preAuthToken;

    @NotBlank
    private String code;
}