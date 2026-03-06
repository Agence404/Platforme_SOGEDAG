package com.example.Plateforme_SOGEDAG.models;

import com.example.Plateforme_SOGEDAG.models.enums.TokenType;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
public class UserPrincipal implements UserDetails {

    private final AdminUser user;
    private TokenType tokenType;
    private String token;

    public UserPrincipal(AdminUser user) {
        this.user = user;
    }

    public static UserPrincipal create(AdminUser user) {
        return new UserPrincipal(user);
    }

    public static UserPrincipal create(AdminUser user, TokenType tokenType, String token) {
        UserPrincipal principal = new UserPrincipal(user);
        principal.tokenType = tokenType;
        principal.token = token;
        return principal;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()));
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return user.isEnabled();
    }
}