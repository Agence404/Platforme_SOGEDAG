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
            Files.createDirectories(rootLocation.resolve("blogs"));
            Files.createDirectories(rootLocation.resolve("blogs/images"));
            Files.createDirectories(rootLocation.resolve("product-images"));
            Files.createDirectories(rootLocation.resolve("pdfs"));
            Files.createDirectories(rootLocation.resolve("multimedia"));
            Files.createDirectories(rootLocation.resolve("multimedia/images"));
            Files.createDirectories(rootLocation.resolve("multimedia/pdfs"));

            System.out.println("Uploads folder = " + rootLocation);
            System.out.println("Blogs folder = " + rootLocation.resolve("blogs"));
            System.out.println("Product images folder = " + rootLocation.resolve("product-images"));
            System.out.println("PDFs folder = " + rootLocation.resolve("pdfs"));
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage", e);
        }
    }

    public String storeMultimediaImage(MultipartFile file) {
        return storeInFolder(file, "multimedia/images");
    }

    public String storeMultimediaPdf(MultipartFile file) {
        return storeInFolder(file, "multimedia/pdfs");
    }

    // ancien comportement: stocke directement dans /uploads
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

    // nouvelles méthodes organisées par dossier
    public String storeBlogImage(MultipartFile file) {
        return storeInFolder(file, "blogs/images");
    }

//    public String storeBlogPdf(MultipartFile file) {
//        return storeInFolder(file, "blogs/pdfs");
//    }

    public String storeProductImage(MultipartFile file) {
        return storeInFolder(file, "product-images");
    }

    public String storePdf(MultipartFile file) {
        return storeInFolder(file, "pdfs");
    }

    private String storeInFolder(MultipartFile file, String folder) {
        try {
            if (file == null || file.isEmpty()) {
                throw new RuntimeException("Failed to store empty file.");
            }

            String originalFilename = Paths.get(file.getOriginalFilename()).getFileName().toString();
            String filename = UUID.randomUUID() + "_" + originalFilename;

            Path destinationFolder = rootLocation.resolve(folder).normalize();
            Files.createDirectories(destinationFolder);

            Path destinationFile = destinationFolder.resolve(filename).normalize();
            Files.copy(file.getInputStream(), destinationFile, StandardCopyOption.REPLACE_EXISTING);

            return folder + "/" + filename;
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
            if (filename == null || filename.isBlank()) {
                return;
            }

            Path file = rootLocation.resolve(filename).normalize();
            Files.deleteIfExists(file);
        } catch (IOException e) {
            throw new RuntimeException("Could not delete file: " + filename, e);
        }
    }
}