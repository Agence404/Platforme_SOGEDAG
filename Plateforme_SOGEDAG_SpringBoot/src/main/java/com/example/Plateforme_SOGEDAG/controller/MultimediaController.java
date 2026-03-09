package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.dto.ApiResponse;
import com.example.Plateforme_SOGEDAG.dto.MultimediaDTO;
import com.example.Plateforme_SOGEDAG.service.MultimediaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/multimedia")
@RequiredArgsConstructor
public class MultimediaController {

    private final MultimediaService multimediaService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(multimediaService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return ResponseEntity.ok(multimediaService.getById(id));
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse> create(
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        MultimediaDTO dto = MultimediaDTO.builder()
                .title(title)
                .description(description)
                .build();

        multimediaService.create(dto, image, pdf);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message("Le multimedia a été créé avec succès.")
                        .build()
        );
    }

    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse> updateFull(
            @PathVariable Long id,
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        MultimediaDTO dto = MultimediaDTO.builder()
                .title(title)
                .description(description)
                .build();

        multimediaService.updateFull(id, dto, image, pdf);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message("Le multimedia a été modifié avec succès.")
                        .build()
        );
    }

    @PatchMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse> updatePartial(
            @PathVariable Long id,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        MultimediaDTO dto = MultimediaDTO.builder()
                .title(title)
                .description(description)
                .build();

        multimediaService.updatePartial(id, dto, image, pdf);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message("Le multimedia a été mis à jour partiellement avec succès.")
                        .build()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable Long id) {
        String message = multimediaService.delete(id);

        return ResponseEntity.ok(
                ApiResponse.builder()
                        .success(true)
                        .message(message)
                        .build()
        );
    }
}