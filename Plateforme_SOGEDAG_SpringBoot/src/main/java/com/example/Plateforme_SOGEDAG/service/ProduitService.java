package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.ProduitDTO;
import com.example.Plateforme_SOGEDAG.models.Carrence;
import com.example.Plateforme_SOGEDAG.models.ProductImage;
import com.example.Plateforme_SOGEDAG.models.Produit;
import com.example.Plateforme_SOGEDAG.models.enums.ContentStatus;
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
        Set<Long> carrenceIds = dto.getCarrenceIds() != null
                ? dto.getCarrenceIds()
                : Collections.emptySet();

        Set<Carrence> carrences = new HashSet<>(carrenceRepository.findAllById(carrenceIds));

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
                    savedProduit.getImages().add(productImage);
                }
            }
        }

        if (pdf != null && !pdf.isEmpty()) {
            String pdfUrl = fileStorageService.store(pdf);
            savedProduit.setPdfUrl(pdfUrl);
            savedProduit = produitRepository.save(savedProduit);
        }

        Produit reloaded = produitRepository.findById(savedProduit.getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        return mapToDTO(reloaded);
    }
    @Transactional
    public ProduitDTO updatePartial(Long id, ProduitDTO dto, List<MultipartFile> images, MultipartFile pdf) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (dto.getNom() != null) {
            produit.setNom(dto.getNom());
        }

        if (dto.getDescription() != null) {
            produit.setDescription(dto.getDescription());
        }

        if (dto.getStatus() != null) {
            produit.setStatus(dto.getStatus());
        }

        if (dto.getCarrenceIds() != null) {
            Set<Carrence> carrences = new HashSet<>(carrenceRepository.findAllById(dto.getCarrenceIds()));
            produit.setCarrences(carrences);
        }

        if (images != null && !images.isEmpty()) {
            clearImages(produit);
            replaceImages(produit, images);
        }

        if (pdf != null && !pdf.isEmpty()) {
            replacePdf(produit, pdf);
        }

        return mapToDTO(produitRepository.save(produit));
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


    @Transactional
    public ProduitDTO updateFull(Long id, ProduitDTO dto, List<MultipartFile> images, MultipartFile pdf) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Set<Long> carrenceIds = dto.getCarrenceIds() != null ? dto.getCarrenceIds() : Collections.emptySet();
        Set<Carrence> carrences = new HashSet<>(carrenceRepository.findAllById(carrenceIds));

        produit.setNom(dto.getNom());
        produit.setDescription(dto.getDescription());
        produit.setStatus(dto.getStatus());
        produit.setCarrences(carrences);

        if (images != null) {
            clearImages(produit);
            replaceImages(produit, images);
        }

        if (pdf != null && !pdf.isEmpty()) {
            replacePdf(produit, pdf);
        }

        return mapToDTO(produitRepository.save(produit));
    }
    private void replaceImages(Produit produit, List<MultipartFile> images) {
        if (images == null || images.isEmpty()) {
            return;
        }

        int order = 0;
        for (MultipartFile img : images) {
            if (!img.isEmpty()) {
                fileStorageService.storeProductImage(img);
                ProductImage productImage = ProductImage.builder()
                        .imageUrl(url)
                        .displayOrder(order++)
                        .produit(produit)
                        .build();

                productImageRepository.save(productImage);
                produit.getImages().add(productImage);
            }
        }
    }

    @Transactional
    public void delete(Long id) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        produit.setArchived(true);
        produitRepository.save(produit);
    }
    @Transactional
    public ProduitDTO archive(Long id) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit introuvable"));

        produit.setStatus(ContentStatus.ARCHIVED);
        produit.setArchived(true); // seulement si tu veux garder le booléen aussi

        return mapToDTO(produitRepository.save(produit));
    }
    @Transactional
    public ProduitDTO unarchive(Long id) {
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit introuvable"));

        produit.setStatus(ContentStatus.DRAFT); // ou PUBLIE selon ta logique
        produit.setArchived(false);

        return mapToDTO(produitRepository.save(produit));
    }
    private void clearImages(Produit produit) {
        for (ProductImage image : produit.getImages()) {
            fileStorageService.delete(image.getImageUrl());
        }
        produit.getImages().clear();
    }

    private void replacePdf(Produit produit, MultipartFile pdf) {
        if (pdf == null || pdf.isEmpty()) {
            return;
        }

        if (produit.getPdfUrl() != null) {
            fileStorageService.delete(produit.getPdfUrl());
        }

        fileStorageService.storePdf(pdf);
        produit.setPdfUrl(pdfUrl);
    }


}
