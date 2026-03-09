package com.example.Plateforme_SOGEDAG.dto;

import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProduitDTO {
    private Long id;
    private String nom;
    private String description;
    private ContentStatus status;
    private boolean archived;
    private Set<Long> carrenceIds;
    private List<String> imageUrls;
    private String pdfUrl;
}
