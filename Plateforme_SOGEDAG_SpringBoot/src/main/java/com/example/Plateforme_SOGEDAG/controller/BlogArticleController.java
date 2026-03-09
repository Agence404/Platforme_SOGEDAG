package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.dto.BlogArticleDTO;
import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
import com.example.Plateforme_SOGEDAG.service.BlogArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/blogs")
@RequiredArgsConstructor
public class BlogArticleController {

    private final BlogArticleService blogArticleService;

    @GetMapping
    public ResponseEntity<List<BlogArticleDTO>> getAll() {
        return ResponseEntity.ok(blogArticleService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogArticleDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(blogArticleService.getById(id));
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<BlogArticleDTO> create(
            @RequestParam("titre") String titre,
            @RequestParam("contenu") String contenu,
            @RequestParam("auteur") String auteur,
            @RequestParam("status") ContentStatus status,
            @RequestParam(value = "datePublication", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datePublication,
            @RequestParam(value = "carrenceIds", required = false) Set<Long> carrenceIds,
            @RequestParam("image") MultipartFile image) {

        BlogArticleDTO dto = BlogArticleDTO.builder()
                .titre(titre)
                .contenu(contenu)
                .auteur(auteur)
                .status(status)
                .datePublication(datePublication)
                .carrenceIds(carrenceIds)
                .build();

        return ResponseEntity.ok(blogArticleService.create(dto, image));
    }

    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<BlogArticleDTO> updateFull(
            @PathVariable Long id,
            @RequestParam("titre") String titre,
            @RequestParam("contenu") String contenu,
            @RequestParam("auteur") String auteur,
            @RequestParam("status") ContentStatus status,
            @RequestParam(value = "datePublication", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datePublication,
            @RequestParam(value = "carrenceIds", required = false) Set<Long> carrenceIds,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        BlogArticleDTO dto = BlogArticleDTO.builder()
                .titre(titre)
                .contenu(contenu)
                .auteur(auteur)
                .status(status)
                .datePublication(datePublication)
                .carrenceIds(carrenceIds)
                .build();

        return ResponseEntity.ok(blogArticleService.updateFull(id, dto, image));
    }

    @PatchMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<BlogArticleDTO> updatePartial(
            @PathVariable Long id,
            @RequestParam(value = "titre", required = false) String titre,
            @RequestParam(value = "contenu", required = false) String contenu,
            @RequestParam(value = "auteur", required = false) String auteur,
            @RequestParam(value = "status", required = false) ContentStatus status,
            @RequestParam(value = "datePublication", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datePublication,
            @RequestParam(value = "carrenceIds", required = false) Set<Long> carrenceIds,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        BlogArticleDTO dto = BlogArticleDTO.builder()
                .titre(titre)
                .contenu(contenu)
                .auteur(auteur)
                .status(status)
                .datePublication(datePublication)
                .carrenceIds(carrenceIds)
                .build();

        return ResponseEntity.ok(blogArticleService.updatePartial(id, dto, image));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        blogArticleService.delete(id);
        return ResponseEntity.noContent().build();
    }
}