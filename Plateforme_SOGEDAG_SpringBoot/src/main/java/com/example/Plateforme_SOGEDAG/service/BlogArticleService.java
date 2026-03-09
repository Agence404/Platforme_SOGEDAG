package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.BlogArticleDTO;
import com.example.Plateforme_SOGEDAG.models.BlogArticle;
import com.example.Plateforme_SOGEDAG.models.Carrence;
import com.example.Plateforme_SOGEDAG.repo.BlogArticleRepository;
import com.example.Plateforme_SOGEDAG.repo.CarrenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
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
                .orElseThrow(() -> new RuntimeException("Article not found"));
        return mapToDTO(article);
    }

    public BlogArticleDTO create(BlogArticleDTO dto, MultipartFile image) {
        String imageUrl = null;
        if (image != null && !image.isEmpty()) {
            imageUrl = fileStorageService.store(image);
        }

        Set<Carrence> carrences = new HashSet<>(carrenceRepository
                .findAllById(dto.getCarrenceIds() != null ? dto.getCarrenceIds() : Collections.emptySet()));

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

    public BlogArticleDTO update(Long id, BlogArticleDTO dto, MultipartFile image) {
        BlogArticle article = blogArticleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found"));

        article.setTitre(dto.getTitre());
        article.setContenu(dto.getContenu());
        article.setAuteur(dto.getAuteur());
        article.setStatus(dto.getStatus());
        if (dto.getDatePublication() != null) {
            article.setDatePublication(dto.getDatePublication());
        }

        if (image != null && !image.isEmpty()) {
            if (article.getImageCouverture() != null) {
                fileStorageService.delete(article.getImageCouverture());
            }
            article.setImageCouverture(fileStorageService.store(image));
        }

        if (dto.getCarrenceIds() != null) {
            article.setCarrences(new HashSet<>(carrenceRepository.findAllById(dto.getCarrenceIds())));
        }

        return mapToDTO(blogArticleRepository.save(article));
    }

    public void delete(Long id) {
        BlogArticle article = blogArticleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found"));
        if (article.getImageCouverture() != null) {
            fileStorageService.delete(article.getImageCouverture());
        }
        blogArticleRepository.delete(article);
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
                .carrenceIds(article.getCarrences().stream().map(Carrence::getId).collect(Collectors.toSet()))
                .build();
    }
}
