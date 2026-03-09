package com.example.Plateforme_SOGEDAG.controller;

import com.example.Plateforme_SOGEDAG.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileController {

    private final FileStorageService fileStorageService;

    @GetMapping("/{filename:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        Resource file = fileStorageService.loadAsResource(filename);
        String contentType = "application/octet-stream";
        try {
            contentType = Files.probeContentType(file.getFile().toPath());
        } catch (IOException e) {
            // Default to octet-stream
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .header(HttpHeaders.CONTENT_TYPE, contentType)
                .body(file);
    }
}
