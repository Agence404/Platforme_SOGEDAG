package com.example.Plateforme_SOGEDAG.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class VerifyPhoneRequest {

    @NotBlank
    private String preAuthToken;

    @NotBlank
    private String code;
}