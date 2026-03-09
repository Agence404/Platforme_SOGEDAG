package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.dto.ApiResponse;
import com.example.Plateforme_SOGEDAG.dto.CarrenceDTO;
import com.example.Plateforme_SOGEDAG.models.enums.CarrenceStatus;
import com.example.Plateforme_SOGEDAG.service.CarrenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CarrenceController {

    private final CarrenceService carrenceService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(carrenceService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return ResponseEntity.ok(carrenceService.getById(id));
    }

    @PostMapping(consumes = { "multipart/form-data" })
    public ResponseEntity<ApiResponse> create(
            @RequestParam("nom") String nom,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("status") CarrenceStatus status,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        CarrenceDTO dto = CarrenceDTO.builder()
                .nom(nom)
                .description(description)
                .status(status)
                .build();

        carrenceService.create(dto, image);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message("La catégorie a été créée avec succès.")
                        .build()
        );
    }

    @PutMapping(value = "/{id}", consumes = { "multipart/form-data" })
    public ResponseEntity<ApiResponse> update(
            @PathVariable Long id,
            @RequestParam("nom") String nom,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("status") CarrenceStatus status,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        CarrenceDTO dto = CarrenceDTO.builder()
                .nom(nom)
                .description(description)
                .status(status)
                .build();

        carrenceService.update(id, dto, image);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message("La catégorie a été modifiée avec succès.")
                        .build()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable Long id) {
        String message = carrenceService.delete(id);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message(message)
                        .build()
        );
    }
}