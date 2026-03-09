package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.MultimediaDTO;
import com.example.Plateforme_SOGEDAG.exception.ResourceNotFoundException;
import com.example.Plateforme_SOGEDAG.models.Multimedia;
import com.example.Plateforme_SOGEDAG.repo.MultimediaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MultimediaService {

    private final MultimediaRepository multimediaRepository;
    private final FileStorageService fileStorageService;

    public List<MultimediaDTO> getAll() {
        return multimediaRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public MultimediaDTO getById(Long id) {
        Multimedia multimedia = multimediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le multimedia avec l'id " + id + " n'existe pas."));
        return mapToDTO(multimedia);
    }

    @Transactional
    public MultimediaDTO create(MultimediaDTO dto, MultipartFile image, MultipartFile pdf) {
        String imageUrl = (image != null && !image.isEmpty())
                ? fileStorageService.storeMultimediaImage(image)
                : null;

        String pdfUrl = (pdf != null && !pdf.isEmpty())
                ? fileStorageService.storeMultimediaPdf(pdf)
                : null;

        Multimedia multimedia = Multimedia.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .imageUrl(imageUrl)
                .pdfUrl(pdfUrl)
                .build();

        return mapToDTO(multimediaRepository.save(multimedia));
    }

    @Transactional
    public MultimediaDTO updateFull(Long id, MultimediaDTO dto, MultipartFile image, MultipartFile pdf) {
        Multimedia multimedia = multimediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le multimedia avec l'id " + id + " n'existe pas."));

        multimedia.setTitle(dto.getTitle());
        multimedia.setDescription(dto.getDescription());

        if (image != null && !image.isEmpty()) {
            replaceImage(multimedia, image);
        }

        if (pdf != null && !pdf.isEmpty()) {
            replacePdf(multimedia, pdf);
        }

        return mapToDTO(multimediaRepository.save(multimedia));
    }

    @Transactional
    public MultimediaDTO updatePartial(Long id, MultimediaDTO dto, MultipartFile image, MultipartFile pdf) {
        Multimedia multimedia = multimediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le multimedia avec l'id " + id + " n'existe pas."));

        if (dto.getTitle() != null) {
            multimedia.setTitle(dto.getTitle());
        }

        if (dto.getDescription() != null) {
            multimedia.setDescription(dto.getDescription());
        }

        if (image != null && !image.isEmpty()) {
            replaceImage(multimedia, image);
        }

        if (pdf != null && !pdf.isEmpty()) {
            replacePdf(multimedia, pdf);
        }

        return mapToDTO(multimediaRepository.save(multimedia));
    }

    @Transactional
    public String delete(Long id) {
        Multimedia multimedia = multimediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Le multimedia avec l'id " + id + " n'existe pas."));

        if (multimedia.getImageUrl() != null) {
            fileStorageService.delete(multimedia.getImageUrl());
        }

        if (multimedia.getPdfUrl() != null) {
            fileStorageService.delete(multimedia.getPdfUrl());
        }

        multimediaRepository.delete(multimedia);
        return "Le multimedia a été supprimé avec succès.";
    }

    private void replaceImage(Multimedia multimedia, MultipartFile image) {
        if (multimedia.getImageUrl() != null) {
            fileStorageService.delete(multimedia.getImageUrl());
        }

        String imageUrl = fileStorageService.storeMultimediaImage(image);
        multimedia.setImageUrl(imageUrl);
    }

    private void replacePdf(Multimedia multimedia, MultipartFile pdf) {
        if (multimedia.getPdfUrl() != null) {
            fileStorageService.delete(multimedia.getPdfUrl());
        }

        String pdfUrl = fileStorageService.storeMultimediaPdf(pdf);
        multimedia.setPdfUrl(pdfUrl);
    }

    private MultimediaDTO mapToDTO(Multimedia multimedia) {
        return MultimediaDTO.builder()
                .id(multimedia.getId())
                .title(multimedia.getTitle())
                .description(multimedia.getDescription())
                .imageUrl(multimedia.getImageUrl())
                .pdfUrl(multimedia.getPdfUrl())
                .build();
    }
}