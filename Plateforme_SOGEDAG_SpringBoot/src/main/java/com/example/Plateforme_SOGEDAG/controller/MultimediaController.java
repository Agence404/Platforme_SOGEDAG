package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.dto.MultimediaDTO;
import com.example.Plateforme_SOGEDAG.service.MultimediaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/multimedia")
@RequiredArgsConstructor
public class MultimediaController {

    private final MultimediaService multimediaService;

    @GetMapping
    public ResponseEntity<List<MultimediaDTO>> getAll() {
        return ResponseEntity.ok(multimediaService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MultimediaDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(multimediaService.getById(id));
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<MultimediaDTO> create(
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        MultimediaDTO dto = MultimediaDTO.builder()
                .title(title)
                .description(description)
                .build();

        return ResponseEntity.ok(multimediaService.create(dto, image, pdf));
    }

    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<MultimediaDTO> updateFull(
            @PathVariable Long id,
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        MultimediaDTO dto = MultimediaDTO.builder()
                .title(title)
                .description(description)
                .build();

        return ResponseEntity.ok(multimediaService.updateFull(id, dto, image, pdf));
    }

    @PatchMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<MultimediaDTO> updatePartial(
            @PathVariable Long id,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "pdf", required = false) MultipartFile pdf) {

        MultimediaDTO dto = MultimediaDTO.builder()
                .title(title)
                .description(description)
                .build();

        return ResponseEntity.ok(multimediaService.updatePartial(id, dto, image, pdf));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        multimediaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}