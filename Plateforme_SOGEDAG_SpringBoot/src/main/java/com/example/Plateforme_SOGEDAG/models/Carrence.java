package com.example.Plateforme_SOGEDAG.models;

import com.example.Plateforme_SOGEDAG.models.enums.CarrenceStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "carrences")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Carrence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 150)
    private String nom;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private CarrenceStatus status;

    @ManyToMany(mappedBy = "carrences")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Produit> produits = new HashSet<>();

    @ManyToMany(mappedBy = "carrences")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<BlogArticle> blogArticles = new HashSet<>();
}