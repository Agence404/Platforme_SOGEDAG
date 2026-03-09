package com.example.Plateforme_SOGEDAG.dto;

import com.example.Plateforme_SOGEDAG.models.enums.CarrenceStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarrenceDTO {
    private Long id;
    private String nom;
    private String description;
    private String imageUrl;
    private CarrenceStatus status;
}
