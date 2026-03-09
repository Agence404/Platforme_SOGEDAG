package com.example.Plateforme_SOGEDAG.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.*;
import java.util.UUID;

@Service
public class FileStorageService {

    private final Path rootLocation;

    public FileStorageService(@Value("${app.upload.dir:./uploads}") String uploadDir) {
        this.rootLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
    }

    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(rootLocation);
            System.out.println("Uploads folder = " + rootLocation);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage", e);
        }
    }

    public String store(MultipartFile file) {
        try {
            if (file == null || file.isEmpty()) {
                throw new RuntimeException("Failed to store empty file.");
            }

            String originalFilename = Paths.get(file.getOriginalFilename()).getFileName().toString();
            String filename = UUID.randomUUID() + "_" + originalFilename;

            Path destinationFile = rootLocation.resolve(filename).normalize();

            Files.copy(file.getInputStream(), destinationFile, StandardCopyOption.REPLACE_EXISTING);

            return filename;
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file.", e);
        }
    }

    public Resource loadAsResource(String filename) {
        try {
            Path file = rootLocation.resolve(filename).normalize();
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() && resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read file: " + filename);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Could not read file: " + filename, e);
        }
    }

    public void delete(String filename) {
        try {
            Path file = rootLocation.resolve(filename).normalize();
            Files.deleteIfExists(file);
        } catch (IOException e) {
            throw new RuntimeException("Could not delete file: " + filename, e);
        }
    }
}