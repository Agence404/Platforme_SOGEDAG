import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './ResearchDetail.css';

const researchPosts = {
  'effet-biostimulation-racinaire-mais': {
    slug: 'effet-biostimulation-racinaire-mais',
    title: 'Effet de la biostimulation racinaire sur l’installation du maïs',
    author: 'Pôle Recherche SOGEDAG',
    publishedAt: '14 Mars 2026',
    image: '/image_cata1.jpg',
    pdf: '/pdfs/recherche-biostimulation-mais.pdf',
    content: `
      <p>
        Cette recherche a été menée afin d’évaluer l’impact de la biostimulation racinaire
        sur la qualité d’installation du maïs, la vigueur initiale de la culture et la
        régularité du développement en phase précoce.
      </p>

      <h2>Contexte de l’étude</h2>
      <p>
        L’installation d’une culture constitue une phase décisive pour la suite du cycle.
        Une reprise homogène, un enracinement fonctionnel et une croissance régulière
        conditionnent la stabilité technique de l’itinéraire cultural.
      </p>

      <h2>Objectif</h2>
      <p>
        L’objectif de ce travail était d’observer dans quelle mesure une stratégie de
        biostimulation racinaire pouvait soutenir la reprise végétative, améliorer la
        dynamique d’enracinement et renforcer l’homogénéité de développement.
      </p>

      <h2>Observations</h2>
      <p>
        Les observations ont porté sur la vitesse de reprise, la vigueur initiale,
        la qualité du développement racinaire ainsi que la continuité de croissance
        entre les différentes modalités étudiées.
      </p>

      <blockquote>
        Les résultats soulignent l’intérêt d’une approche plus fine des besoins
        physiologiques en phase d’installation.
      </blockquote>

      <h2>Conclusion</h2>
      <p>
        La biostimulation racinaire prend toute sa valeur lorsqu’elle s’inscrit dans
        une lecture agronomique cohérente. Elle ne remplace pas la stratégie technique,
        mais peut contribuer à en renforcer la régularité et la pertinence.
      </p>
    `,
  },

  'nutrition-foliaire-et-equilibre-vegetatif': {
    slug: 'nutrition-foliaire-et-equilibre-vegetatif',
    title: 'Nutrition foliaire et équilibre végétatif en phase de croissance',
    author: 'Département Agronomie',
    publishedAt: '02 Mars 2026',
    image: '/image_cata2.jpg',
    pdf: '/pdfs/recherche-nutrition-foliaire.pdf',
    content: `
      <p>
        Cette publication présente une analyse des réponses physiologiques observées
        après application de formulations foliaires dans différents contextes de croissance.
      </p>

      <h2>Cadre de travail</h2>
      <p>
        La nutrition foliaire peut constituer un levier d’ajustement utile lorsqu’elle
        est raisonnée selon le stade, les besoins réels de la culture et les objectifs
        techniques poursuivis.
      </p>

      <h2>Approche retenue</h2>
      <p>
        Les observations ont comparé plusieurs situations de terrain afin d’évaluer
        l’effet sur la vigueur, la qualité de l’expression foliaire et la régularité
        de croissance.
      </p>

      <h2>Lecture technique</h2>
      <p>
        Les résultats montrent que la cohérence entre formulation, moment d’application
        et contexte agronomique reste déterminante dans la qualité de réponse obtenue.
      </p>
    `,
  },
};

export default function ResearchDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const post = useMemo(() => researchPosts[slug], [slug]);

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.research-publication__breadcrumbs',
          '.research-publication__hero',
          '.research-publication__cover',
          '.research-publication__doc',
          '.research-publication__content',
          '.research-publication__cta',
        ],
        { opacity: 0, y: 28 }
      );

      gsap.to('.research-publication__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.research-publication__hero', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.research-publication__cover', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.16,
        ease: 'power4.out',
      });

      gsap.to(
        [
          '.research-publication__doc',
          '.research-publication__content',
          '.research-publication__cta',
        ],
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.22,
          ease: 'power4.out',
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <main className="research-publication">
        <section className="research-publication__notfound">
          <div className="research-publication__container">
            <p className="research-publication__label">Recherche</p>
            <h1 className="research-publication__section-title">Publication introuvable</h1>
            <p className="research-publication__section-text">
              La publication demandée n’existe pas ou son lien est incorrect.
            </p>
            <Link to="/recherche" className="research-publication__btn research-publication__btn--primary">
              Retour à la recherche
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main ref={pageRef} className="research-publication">
      <section className="research-publication__top">
        <div className="research-publication__bg" aria-hidden="true"></div>

        <div className="research-publication__container">
          <nav className="research-publication__breadcrumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/recherche">Recherche</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <header className="research-publication__hero">
            <p className="research-publication__label">Publication scientifique</p>
            <h1 className="research-publication__title">{post.title}</h1>

            <div className="research-publication__meta">
              <span>Par {post.author}</span>
              <span>•</span>
              <span>{post.publishedAt}</span>
            </div>
          </header>

          <div className="research-publication__cover">
            <img src={post.image} alt={post.title} className="research-publication__cover-image" />
          </div>
        </div>
      </section>

      <section className="research-publication__main">
        <div className="research-publication__container research-publication__narrow">
          <div className="research-publication__doc">
            <div className="research-publication__doc-head">
              <div>
                <p className="research-publication__section-label">Document explicatif</p>
                <h2 className="research-publication__section-title">PDF de la publication</h2>
              </div>

              <a
                href={post.pdf}
                target="_blank"
                rel="noreferrer"
                className="research-publication__btn research-publication__btn--primary"
              >
                Ouvrir le PDF
              </a>
            </div>

            <div className="research-publication__pdf-wrap">
              <iframe
                src={post.pdf}
                title={`PDF ${post.title}`}
                className="research-publication__pdf"
              />
            </div>
          </div>

          <article className="research-publication__content">
            <p className="research-publication__section-label">Contenu</p>
            <h2 className="research-publication__section-title">Texte de la publication</h2>

            <div
              className="research-publication__prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <section className="research-publication__cta">
            <div className="research-publication__cta-card">
              <div>
                <p className="research-publication__section-label">Prendre contact</p>
                <h2 className="research-publication__section-title">
                  Vous souhaitez échanger à propos de cette publication ?
                </h2>
                <p className="research-publication__section-text">
                  Contactez notre équipe pour obtenir plus d’informations sur l’étude,
                  son contexte technique ou ses applications.
                </p>
              </div>

              <a
                href="/contact"
                className="research-publication__btn research-publication__btn--primary"
              >
                Nous contacter
              </a>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}