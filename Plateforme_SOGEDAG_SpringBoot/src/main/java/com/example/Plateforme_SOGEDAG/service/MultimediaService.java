package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.MultimediaDTO;
import com.example.Plateforme_SOGEDAG.models.Multimedia;
import com.example.Plateforme_SOGEDAG.repo.MultimediaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
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

    public MultimediaDTO create(MultimediaDTO dto, MultipartFile image, MultipartFile pdf) {
        String imageUrl = (image != null && !image.isEmpty()) ? fileStorageService.store(image) : null;
        String pdfUrl = (pdf != null && !pdf.isEmpty()) ? fileStorageService.store(pdf) : null;

        Multimedia multimedia = Multimedia.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .imageUrl(imageUrl)
                .pdfUrl(pdfUrl)
                .build();

        return mapToDTO(multimediaRepository.save(multimedia));
    }

    public void delete(Long id) {
        Multimedia multimedia = multimediaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Multimedia not found"));
        if (multimedia.getImageUrl() != null)
            fileStorageService.delete(multimedia.getImageUrl());
        if (multimedia.getPdfUrl() != null)
            fileStorageService.delete(multimedia.getPdfUrl());
        multimediaRepository.delete(multimedia);
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
