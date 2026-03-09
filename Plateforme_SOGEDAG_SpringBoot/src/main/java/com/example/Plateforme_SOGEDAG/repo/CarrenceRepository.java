package com.example.Plateforme_SOGEDAG.repo;

import com.example.Plateforme_SOGEDAG.models.Carrence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarrenceRepository extends JpaRepository<Carrence, Long> {
}
