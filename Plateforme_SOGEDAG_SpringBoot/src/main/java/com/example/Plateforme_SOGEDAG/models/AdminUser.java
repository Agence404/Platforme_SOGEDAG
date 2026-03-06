package com.example.Plateforme_SOGEDAG.models;

import com.example.Plateforme_SOGEDAG.models.enums.AdminRole;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admin_users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 150)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private AdminRole role;

    @Column(nullable = false)
    private boolean enabled = true;

    @Column(unique = true, nullable = false, length = 30)
    private String phoneNumber;
}