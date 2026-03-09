package com.example.Plateforme_SOGEDAG.repo;

import com.example.Plateforme_SOGEDAG.models.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
}
