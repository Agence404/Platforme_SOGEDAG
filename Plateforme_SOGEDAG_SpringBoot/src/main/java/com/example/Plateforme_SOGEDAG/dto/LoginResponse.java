package com.example.Plateforme_SOGEDAG.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class LoginResponse {
    private String message;
    private String preAuthToken;
    private String email;

}