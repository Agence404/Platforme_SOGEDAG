package com.example.Plateforme_SOGEDAG.models;

import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "blog_articles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String titre;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contenu;

    @Column(nullable = false, length = 150)
    private String auteur;

    @Column(nullable = false)
    private String imageCouverture;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ContentStatus status;

    @Column(nullable = false)
    private LocalDateTime datePublication;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @ManyToMany
    @JoinTable(
            name = "blog_article_carrences",
            joinColumns = @JoinColumn(name = "blog_article_id"),
            inverseJoinColumns = @JoinColumn(name = "carrence_id")
    )
    @Builder.Default
    private Set<Carrence> carrences = new HashSet<>();

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        if (this.datePublication == null) {
            this.datePublication = LocalDateTime.now();
        }
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}