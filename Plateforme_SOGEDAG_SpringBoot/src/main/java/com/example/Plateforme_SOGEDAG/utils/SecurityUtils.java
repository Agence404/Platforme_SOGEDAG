package com.example.Plateforme_SOGEDAG.utils;

import com.example.Plateforme_SOGEDAG.models.UserPrincipal;
import com.example.Plateforme_SOGEDAG.models.enums.TokenType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

@Component
public class SecurityUtils {

    @PreAuthorize("isAuthenticated()")
    public boolean isPreAuthenticatedForPhoneVerification(UserPrincipal currentUser) {
        if (currentUser == null) return false;

        boolean hasAdminRole = currentUser.getAuthorities()
                .stream()
                .anyMatch(auth -> auth.getAuthority().equals("ROLE_ADMIN"));

        boolean isPreAuthToken = currentUser.getTokenType() == TokenType.PRE_AUTH_TOKEN;

        return hasAdminRole && isPreAuthToken;
    }
}