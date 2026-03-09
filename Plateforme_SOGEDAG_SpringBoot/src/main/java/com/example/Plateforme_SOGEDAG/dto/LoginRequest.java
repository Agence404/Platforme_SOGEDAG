package com.example.Plateforme_SOGEDAG.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {

    public String getEmail() {
        return email;
    }

    @NotBlank

    private String email;

    @NotBlank
    private String password;
}