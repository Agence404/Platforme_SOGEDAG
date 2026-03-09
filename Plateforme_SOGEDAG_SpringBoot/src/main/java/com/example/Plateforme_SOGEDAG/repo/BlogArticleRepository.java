package com.example.Plateforme_SOGEDAG.repo;

import com.example.Plateforme_SOGEDAG.models.BlogArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogArticleRepository extends JpaRepository<BlogArticle, Long> {
}
