package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.BlogArticleDTO;
import com.example.Plateforme_SOGEDAG.exception.ResourceNotFoundException;
import com.example.Plateforme_SOGEDAG.models.BlogArticle;
import com.example.Plateforme_SOGEDAG.models.Carrence;
import com.example.Plateforme_SOGEDAG.repo.BlogArticleRepository;
import com.example.Plateforme_SOGEDAG.repo.CarrenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogArticleService {

    private final BlogArticleRepository blogArticleRepository;
    private final CarrenceRepository carrenceRepository;
    private final FileStorageService fileStorageService;

    public List<BlogArticleDTO> getAll() {
        return blogArticleRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public BlogArticleDTO getById(Long id) {
        BlogArticle article = blogArticleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le blog avec l'id " + id + " n'existe pas."));        return mapToDTO(article);
    }

    @Transactional
    public BlogArticleDTO create(BlogArticleDTO dto, MultipartFile image) {
        if (image == null || image.isEmpty()) {
            throw new RuntimeException("L'image de couverture est obligatoire.");
        }

        String imageUrl = fileStorageService.storeBlogImage(image);

        Set<Long> carrenceIds = dto.getCarrenceIds() != null
                ? dto.getCarrenceIds()
                : Collections.emptySet();

        Set<Carrence> carrences = new HashSet<>(carrenceRepository.findAllById(carrenceIds));

        BlogArticle article = BlogArticle.builder()
                .titre(dto.getTitre())
                .contenu(dto.getContenu())
                .auteur(dto.getAuteur())
                .imageCouverture(imageUrl)
                .status(dto.getStatus())
                .datePublication(dto.getDatePublication() != null ? dto.getDatePublication() : LocalDateTime.now())
                .carrences(carrences)
                .build();

        return mapToDTO(blogArticleRepository.save(article));
    }

    @Transactional
    public BlogArticleDTO updateFull(Long id, BlogArticleDTO dto, MultipartFile image) {
        BlogArticle article = blogArticleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le blog avec l'id " + id + " n'existe pas."));
        Set<Long> carrenceIds = dto.getCarrenceIds() != null
                ? dto.getCarrenceIds()
                : Collections.emptySet();

        Set<Carrence> carrences = new HashSet<>(carrenceRepository.findAllById(carrenceIds));

        article.setTitre(dto.getTitre());
        article.setContenu(dto.getContenu());
        article.setAuteur(dto.getAuteur());
        article.setStatus(dto.getStatus());
        article.setDatePublication(dto.getDatePublication() != null ? dto.getDatePublication() : LocalDateTime.now());
        article.setCarrences(carrences);

        if (image != null && !image.isEmpty()) {
            replaceImage(article, image);
        }

        return mapToDTO(blogArticleRepository.save(article));
    }

    @Transactional
    public BlogArticleDTO updatePartial(Long id, BlogArticleDTO dto, MultipartFile image) {
        BlogArticle article = blogArticleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le blog avec l'id " + id + " n'existe pas."));
        if (dto.getTitre() != null) {
            article.setTitre(dto.getTitre());
        }

        if (dto.getContenu() != null) {
            article.setContenu(dto.getContenu());
        }

        if (dto.getAuteur() != null) {
            article.setAuteur(dto.getAuteur());
        }

        if (dto.getStatus() != null) {
            article.setStatus(dto.getStatus());
        }

        if (dto.getDatePublication() != null) {
            article.setDatePublication(dto.getDatePublication());
        }

        if (dto.getCarrenceIds() != null) {
            Set<Carrence> carrences = new HashSet<>(carrenceRepository.findAllById(dto.getCarrenceIds()));
            article.setCarrences(carrences);
        }

        if (image != null && !image.isEmpty()) {
            replaceImage(article, image);
        }

        return mapToDTO(blogArticleRepository.save(article));
    }

    @Transactional
    public String delete(Long id) {
        BlogArticle article = blogArticleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le blog avec l'id " + id + " n'existe pas."));

        if (article.getImageCouverture() != null) {
            fileStorageService.delete(article.getImageCouverture());
        }

        blogArticleRepository.delete(article);
        return "Le blog a été supprimé avec succès.";
    }
    private void replaceImage(BlogArticle article, MultipartFile image) {
        if (article.getImageCouverture() != null) {
            fileStorageService.delete(article.getImageCouverture());
        }

        String newImageUrl = fileStorageService.storeBlogImage(image);
        article.setImageCouverture(newImageUrl);
    }

    private BlogArticleDTO mapToDTO(BlogArticle article) {
        return BlogArticleDTO.builder()
                .id(article.getId())
                .titre(article.getTitre())
                .contenu(article.getContenu())
                .auteur(article.getAuteur())
                .imageCouverture(article.getImageCouverture())
                .status(article.getStatus())
                .datePublication(article.getDatePublication())
                .carrenceIds(article.getCarrences().stream()
                        .map(Carrence::getId)
                        .collect(Collectors.toSet()))
                .build();
    }
}