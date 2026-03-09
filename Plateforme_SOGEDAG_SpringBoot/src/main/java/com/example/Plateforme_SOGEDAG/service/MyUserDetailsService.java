package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.models.AdminUser;
import com.example.Plateforme_SOGEDAG.models.UserPrincipal;
import com.example.Plateforme_SOGEDAG.models.enums.TokenType;
import com.example.Plateforme_SOGEDAG.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AdminUser user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found: " + email));

        return UserPrincipal.create(user);
    }

    public UserDetails loadUserByUsernameTokenType(String email, TokenType tokenType, String token)
            throws UsernameNotFoundException {

        AdminUser user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found: " + email));

        return UserPrincipal.create(user, tokenType, token);
    }
}