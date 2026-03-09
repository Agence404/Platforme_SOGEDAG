package com.example.Plateforme_SOGEDAG.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MultimediaDTO {
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private String pdfUrl;
}
