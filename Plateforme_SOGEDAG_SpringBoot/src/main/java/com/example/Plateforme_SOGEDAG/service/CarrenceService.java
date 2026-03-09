package com.example.Plateforme_SOGEDAG.service;

import com.example.Plateforme_SOGEDAG.dto.CarrenceDTO;
import com.example.Plateforme_SOGEDAG.models.Carrence;
import com.example.Plateforme_SOGEDAG.repo.CarrenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarrenceService {

    private final CarrenceRepository carrenceRepository;
    private final FileStorageService fileStorageService;

    public List<CarrenceDTO> getAll() {
        return carrenceRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public CarrenceDTO getById(Long id) {
        Carrence carrence = carrenceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        return mapToDTO(carrence);
    }

    public CarrenceDTO create(CarrenceDTO dto, MultipartFile image) {
        String imageUrl = null;
        if (image != null && !image.isEmpty()) {
            imageUrl = fileStorageService.store(image);
        }

        Carrence carrence = Carrence.builder()
                .nom(dto.getNom())
                .description(dto.getDescription())
                .imageUrl(imageUrl)
                .status(dto.getStatus())
                .build();

        return mapToDTO(carrenceRepository.save(carrence));
    }

    public CarrenceDTO update(Long id, CarrenceDTO dto, MultipartFile image) {
        Carrence carrence = carrenceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        carrence.setNom(dto.getNom());
        carrence.setDescription(dto.getDescription());
        carrence.setStatus(dto.getStatus());

        if (image != null && !image.isEmpty()) {
            if (carrence.getImageUrl() != null) {
                fileStorageService.delete(carrence.getImageUrl());
            }
            carrence.setImageUrl(fileStorageService.store(image));
        }

        return mapToDTO(carrenceRepository.save(carrence));
    }

    public void delete(Long id) {
        Carrence carrence = carrenceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        if (carrence.getImageUrl() != null) {
            fileStorageService.delete(carrence.getImageUrl());
        }
        carrenceRepository.delete(carrence);
    }

    private CarrenceDTO mapToDTO(Carrence carrence) {
        return CarrenceDTO.builder()
                .id(carrence.getId())
                .nom(carrence.getNom())
                .description(carrence.getDescription())
                .imageUrl(carrence.getImageUrl())
                .status(carrence.getStatus())
                .build();
    }
}
