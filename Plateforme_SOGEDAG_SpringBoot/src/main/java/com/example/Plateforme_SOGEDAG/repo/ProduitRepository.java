package com.example.Plateforme_SOGEDAG.repo;

import com.example.Plateforme_SOGEDAG.models.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByArchivedFalse();
}
