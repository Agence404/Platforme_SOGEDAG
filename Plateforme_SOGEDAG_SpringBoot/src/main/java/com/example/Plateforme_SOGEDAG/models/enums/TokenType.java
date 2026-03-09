package com.example.Plateforme_SOGEDAG.models.enums;

import lombok.Getter;

@Getter
public enum TokenType {
    PRE_AUTH_TOKEN("PRE_AUTH_TOKEN"),
    ACCESS_TOKEN("ACCESS_TOKEN"),
    RESET_PASSWORD_TOKEN("RESET_PASSWORD_TOKEN");

    private final String value;

    TokenType(String value) {
        this.value = value;
    }

}