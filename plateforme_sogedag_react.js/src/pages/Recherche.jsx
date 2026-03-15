import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Recherche.css';

gsap.registerPlugin(ScrollTrigger);

const researchPosts = [
  {
    slug: 'effet-biostimulation-racinaire-mais',
    title: 'Effet de la biostimulation racinaire sur l’installation du maïs',
    author: 'Pôle Recherche SOGEDAG',
    publishedAt: '14 Mars 2026',
    category: 'Biostimulation',
    image: '/image_cata1.jpg',
    excerpt:
      'Cette recherche analyse l’impact des solutions de biostimulation racinaire sur la reprise, la vigueur initiale et la régularité de développement du maïs en phase d’installation.',
  },
  {
    slug: 'nutrition-foliaire-et-equilibre-vegetatif',
    title: 'Nutrition foliaire et équilibre végétatif en phase de croissance',
    author: 'Département Agronomie',
    publishedAt: '02 Mars 2026',
    category: 'Nutrition',
    image: '/image_cata2.jpg',
    excerpt:
      'Étude des réponses physiologiques observées après application de formulations foliaires sur différentes cultures dans des contextes de croissance active.',
  },
  {
    slug: 'assimilation-minerale-et-regularite',
    title: 'Assimilation minérale et régularité de la réponse nutritionnelle',
    author: 'Laboratoire Technique',
    publishedAt: '18 Février 2026',
    category: 'Mineral-Tech',
    image: '/image_cata3.jpg',
    excerpt:
      'Travail consacré à l’analyse de la stabilité d’assimilation des éléments minéraux selon les contextes techniques et les rythmes de développement.',
  },
  {
    slug: 'fertilisation-organique-et-vie-microbienne',
    title: 'Fertilisation organique et activité microbienne du sol',
    author: 'Unité Sol & Fertilité',
    publishedAt: '29 Janvier 2026',
    category: 'Fertilisation organique',
    image: '/image_cata4.jpg',
    excerpt:
      'Recherche orientée sur l’effet des formulations organiques dans le maintien de l’activité biologique du sol et l’équilibre agronomique.',
  },
  {
    slug: 'performance-npk-en-fertigation',
    title: 'Performance des formulations NPK en fertigation',
    author: 'Service Innovation',
    publishedAt: '12 Janvier 2026',
    category: 'NPK',
    image: '/image_cata5.jpg',
    excerpt:
      'Évaluation technique de solutions NPK hydrosolubles utilisées dans des systèmes modernes de fertigation à forte exigence.',
  },
  {
    slug: 'croissance-rendement-et-nutrition-minerale',
    title: 'Croissance, rendement et nutrition minérale',
    author: 'Direction Technique',
    publishedAt: '20 Décembre 2025',
    category: 'Nutrition minérale',
    image: '/image_cata6.jpg',
    excerpt:
      'Étude appliquée sur le lien entre apports minéraux, régularité de croissance et sécurisation du potentiel de rendement.',
  },
];

export default function Recherche() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.research-science__eyebrow',
          '.research-science__title',
          '.research-science__text',
          '.research-science__section-eyebrow',
          '.research-science__section-title',
          '.research-science__section-text',
        ],
        { opacity: 0, y: 36 }
      );

      gsap.set('.research-science-card', {
        opacity: 0,
        y: 42,
      });

      gsap
        .timeline()
        .to('.research-science__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.research-science__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power4.out',
          },
          '-=0.18'
        )
        .to(
          '.research-science__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.research-science__list',
            start: 'top 84%',
          },
        })
        .to('.research-science__section-eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power3.out',
        })
        .to(
          '.research-science__section-title',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.research-science__section-text',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.research-science-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.research-science__grid',
          start: 'top 85%',
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="research-science">
      <section className="research-science__hero">
        <div className="research-science__bg" aria-hidden="true">
          <div className="research-science__orb research-science__orb--one"></div>
          <div className="research-science__orb research-science__orb--two"></div>
          <div className="research-science__grid-bg"></div>
        </div>

        <div className="research-science__container">
          <p className="research-science__eyebrow">Recherche scientifique</p>
          <h1 className="research-science__title">
            Les recherches et études
            <span> publiées par l’entreprise</span>
          </h1>
          <p className="research-science__text">
            Découvrez les essais, observations, analyses et travaux scientifiques
            réalisés autour de la nutrition, de la biostimulation, de la fertilisation
            et de la performance agronomique.
          </p>
        </div>
      </section>

      <section className="research-science__list">
        <div className="research-science__container">
          <div className="research-science__section-head">
            <p className="research-science__section-eyebrow">Publications</p>
            <h2 className="research-science__section-title">
              Recherches scientifiques publiées
            </h2>
            <p className="research-science__section-text">
              Chaque publication présente un sujet d’étude précis, son contexte,
              ses objectifs et les axes techniques analysés.
            </p>
          </div>

          <div className="research-science__grid">
            {researchPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/recherche/${post.slug}`}
                className="research-science-card"
                aria-label={`Voir la recherche ${post.title}`}
              >
                <div className="research-science-card__media">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="research-science-card__image"
                  />
                  <div className="research-science-card__overlay"></div>
                </div>

                <div className="research-science-card__body">
                  <div className="research-science-card__meta">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h3 className="research-science-card__title">{post.title}</h3>
                  <p className="research-science-card__excerpt">{post.excerpt}</p>

                  <div className="research-science-card__footer">
                    <span>Lire la recherche</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}