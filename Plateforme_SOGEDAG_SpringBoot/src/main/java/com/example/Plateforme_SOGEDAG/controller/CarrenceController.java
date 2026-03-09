package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.dto.CarrenceDTO;
import com.example.Plateforme_SOGEDAG.models.enums.CarrenceStatus;
import com.example.Plateforme_SOGEDAG.service.CarrenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CarrenceController {

    private final CarrenceService carrenceService;

    @GetMapping
    public ResponseEntity<List<CarrenceDTO>> getAll() {
        return ResponseEntity.ok(carrenceService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarrenceDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(carrenceService.getById(id));
    }

    @PostMapping(consumes = { "multipart/form-data" })
    public ResponseEntity<CarrenceDTO> create(
            @RequestParam("nom") String nom,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("status") CarrenceStatus status,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        CarrenceDTO dto = CarrenceDTO.builder()
                .nom(nom)
                .description(description)
                .status(status)
                .build();

        return ResponseEntity.ok(carrenceService.create(dto, image));
    }

    @PutMapping(value = "/{id}", consumes = { "multipart/form-data" })
    public ResponseEntity<CarrenceDTO> update(
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

        return ResponseEntity.ok(carrenceService.update(id, dto, image));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        carrenceService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
