package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.dto.ApiResponse;
import com.example.Plateforme_SOGEDAG.dto.ProduitDTO;
import com.example.Plateforme_SOGEDAG.models.Carrence;
import com.example.Plateforme_SOGEDAG.models.ProductImage;
import com.example.Plateforme_SOGEDAG.models.Produit;
import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
import com.example.Plateforme_SOGEDAG.repo.ProductImageRepository;
import com.example.Plateforme_SOGEDAG.repo.ProduitRepository;
import com.example.Plateforme_SOGEDAG.service.FileStorageService;
import com.example.Plateforme_SOGEDAG.service.ProduitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProduitController {

    private final ProduitService produitService;

    @GetMapping
    public ResponseEntity<List<ProduitDTO>> getAll() {
        return ResponseEntity.ok(produitService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProduitDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(produitService.getById(id));
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<ProduitDTO> create(
            @RequestParam("nom") String nom,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("status") ContentStatus status,
            @RequestParam(value = "carrenceIds", required = false) Set<Long> carrenceIds,
            @RequestParam(value = "images", required = false) List<MultipartFile> images,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        ProduitDTO dto = ProduitDTO.builder()
                .nom(nom)
                .description(description)
                .status(status)
                .carrenceIds(carrenceIds)
                .build();

        return ResponseEntity.ok(produitService.create(dto, images, pdf));
    }



    @PostMapping("/{id}/pdf")
    public ResponseEntity<ProduitDTO> uploadPdf(
            @PathVariable Long id,
            @RequestParam("pdf") MultipartFile pdf) {
        return ResponseEntity.ok(produitService.uploadPdf(id, pdf));
    }
    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<ProduitDTO> updateFull(
            @PathVariable Long id,
            @RequestParam("nom") String nom,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("status") ContentStatus status,
            @RequestParam(value = "carrenceIds", required = false) Set<Long> carrenceIds,
            @RequestParam(value = "images", required = false) List<MultipartFile> images,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        ProduitDTO dto = ProduitDTO.builder()
                .nom(nom)
                .description(description)
                .status(status)
                .carrenceIds(carrenceIds)
                .build();

        return ResponseEntity.ok(produitService.updateFull(id, dto, images, pdf));
    }

    @PatchMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<ProduitDTO> updatePartial(
            @PathVariable Long id,
            @RequestParam(value = "nom", required = false) String nom,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "status", required = false) ContentStatus status,
            @RequestParam(value = "carrenceIds", required = false) Set<Long> carrenceIds,
            @RequestParam(value = "images", required = false) List<MultipartFile> images,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        ProduitDTO dto = ProduitDTO.builder()
                .nom(nom)
                .description(description)
                .status(status)
                .carrenceIds(carrenceIds)
                .build();

        return ResponseEntity.ok(produitService.updatePartial(id, dto, images, pdf));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Object>> delete(@PathVariable Long id) {
        String message = produitService.delete(id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message(message)
                .build());
    }
    @PatchMapping("/{id}/archive")
    public ResponseEntity<ProduitDTO> archive(@PathVariable Long id) {
        return ResponseEntity.ok(produitService.archive(id));
    }
    @PatchMapping("/{id}/unarchive")
    public ResponseEntity<ProduitDTO> unarchive(@PathVariable Long id) {
        return ResponseEntity.ok(produitService.unarchive(id));
    }

}
