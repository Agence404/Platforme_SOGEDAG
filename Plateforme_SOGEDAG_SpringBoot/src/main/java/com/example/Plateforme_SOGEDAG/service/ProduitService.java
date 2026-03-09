package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.ProduitDTO;
import com.example.Plateforme_SOGEDAG.models.Carrence;
import com.example.Plateforme_SOGEDAG.models.ProductImage;
import com.example.Plateforme_SOGEDAG.models.Produit;
import com.example.Plateforme_SOGEDAG.repo.CarrenceRepository;
import com.example.Plateforme_SOGEDAG.repo.ProductImageRepository;
import com.example.Plateforme_SOGEDAG.repo.ProduitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProduitService {

    private final ProduitRepository produitRepository;
    private final CarrenceRepository carrenceRepository;
    private final ProductImageRepository productImageRepository;
    private final FileStorageService fileStorageService;

    public List<ProduitDTO> getAll() {
        return produitRepository.findByArchivedFalse().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public ProduitDTO getById(Long id) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return mapToDTO(produit);
    }

    @Transactional
    public ProduitDTO create(ProduitDTO dto, List<MultipartFile> images, MultipartFile pdf) {
        Set<Carrence> carrences = new HashSet<>(carrenceRepository
                .findAllById(dto.getCarrenceIds() != null ? dto.getCarrenceIds() : Collections.emptySet()));

        Produit produit = Produit.builder()
                .nom(dto.getNom())
                .description(dto.getDescription())
                .status(dto.getStatus())
                .archived(false)
                .carrences(carrences)
                .build();

        Produit savedProduit = produitRepository.save(produit);

        if (images != null && !images.isEmpty()) {
            int order = 0;
            for (MultipartFile img : images) {
                if (!img.isEmpty()) {
                    String url = fileStorageService.store(img);
                    ProductImage productImage = ProductImage.builder()
                            .imageUrl(url)
                            .displayOrder(order++)
                            .produit(savedProduit)
                            .build();
                    productImageRepository.save(productImage);
                }
            }
        }

        // Handle PDF as separate upload or initially?
        // Multimedia model has pdfUrl, but Produit doesn't have it directly.
        // Let's add pdfUrl to Produit or use Multimedia.
        // User said: "in product we need an endpoint of uploading PDF"
        // I will add pdfUrl to Produit model via separate task if it's missing,
        // but based on current model it's not there. I'll add it.

        return mapToDTO(savedProduit);
    }

    @Transactional
    public ProduitDTO uploadPdf(Long id, MultipartFile pdf) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (produit.getPdfUrl() != null) {
            fileStorageService.delete(produit.getPdfUrl());
        }

        String pdfUrl = fileStorageService.store(pdf);
        produit.setPdfUrl(pdfUrl);

        return mapToDTO(produitRepository.save(produit));
    }

    private ProduitDTO mapToDTO(Produit produit) {
        return ProduitDTO.builder()
                .id(produit.getId())
                .nom(produit.getNom())
                .description(produit.getDescription())
                .status(produit.getStatus())
                .archived(produit.isArchived())
                .carrenceIds(produit.getCarrences().stream().map(Carrence::getId).collect(Collectors.toSet()))
                .imageUrls(produit.getImages().stream().map(ProductImage::getImageUrl).collect(Collectors.toList()))
                .pdfUrl(produit.getPdfUrl())
                .build();
    }
}
