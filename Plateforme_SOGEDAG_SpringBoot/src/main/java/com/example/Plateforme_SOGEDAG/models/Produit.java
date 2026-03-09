package com.example.Plateforme_SOGEDAG.models;

import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "produits")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Produit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 180)
    private String nom;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ContentStatus status;

    @Column(nullable = false)
    private boolean archived = false;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @ManyToMany
    @JoinTable(name = "produit_carrences", joinColumns = @JoinColumn(name = "produit_id"), inverseJoinColumns = @JoinColumn(name = "carrence_id"))
    @Builder.Default
    private Set<Carrence> carrences = new HashSet<>();

    @OneToMany(mappedBy = "produit", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("displayOrder ASC")
    @Builder.Default
    private List<ProductImage> images = new ArrayList<>();

    @Column(name = "pdf_url", length = 500)
    private String pdfUrl;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}