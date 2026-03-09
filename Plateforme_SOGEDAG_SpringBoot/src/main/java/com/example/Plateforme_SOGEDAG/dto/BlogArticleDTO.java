package com.example.Plateforme_SOGEDAG.dto;

import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogArticleDTO {
    private Long id;
    private String titre;
    private String contenu;
    private String auteur;
    private String imageCouverture;
    private ContentStatus status;
    private LocalDateTime datePublication;
    private Set<Long> carrenceIds;
}
