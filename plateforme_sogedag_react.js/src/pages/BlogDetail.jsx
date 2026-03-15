import React, { useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './BlogDetail.css';

// Exemple local en attendant la vraie base de données / API
const blogPosts = {
  'comprendre-le-terrain': {
    slug: 'comprendre-le-terrain',
    title: 'Comprendre le terrain avant toute décision technique',
    author: 'Équipe SOGEDAG',
    publishedAt: '2026-03-12',
    image: 'image_cata1.jpg',
    content: `
      <p>
        L’observation agronomique reste le point de départ d’une stratégie culturale cohérente.
        Avant toute intervention, il est essentiel de lire le contexte, les besoins de la culture
        et les contraintes du terrain.
      </p>

      <h2>Observer avant d’agir</h2>
      <p>
        Toute décision agronomique pertinente commence par une observation précise. L’état de la culture,
        la structure du sol, l’historique de la parcelle et les conditions climatiques sont autant
        d’éléments qui permettent de situer le besoin réel.
      </p>

      <h2>Identifier les besoins réels</h2>
      <p>
        Une culture n’exprime pas toujours ses besoins de manière évidente. Il faut savoir croiser
        les signaux visibles, le stade physiologique et l’objectif de production.
      </p>

      <blockquote>
        Une décision technique solide commence toujours par une lecture juste du terrain.
      </blockquote>

      <h2>Construire une réponse cohérente</h2>
      <p>
        L’observation n’a de valeur que si elle conduit à une décision structurée. C’est à ce moment
        que l’expertise agronomique devient essentielle : transformer les constats en stratégie claire.
      </p>
    `,
  },
};

function formatDate(dateString) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
}

function getReadingTime(html = '') {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.ceil(words / 220));
}

export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const post = blogPosts[slug] || blogPosts['comprendre-le-terrain'];

  const readingTime = useMemo(() => getReadingTime(post.content), [post.content]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.blog-detail-v2__crumbs',
          '.blog-detail-v2__header',
          '.blog-detail-v2__cover',
          '.blog-detail-v2__layout',
        ],
        { opacity: 0, y: 30 }
      );

      gsap.to('.blog-detail-v2__crumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.blog-detail-v2__header', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.blog-detail-v2__cover', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.16,
        ease: 'power4.out',
      });

      gsap.to('.blog-detail-v2__layout', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.24,
        ease: 'power4.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  return (
    <main ref={pageRef} className="blog-detail-v2">
      <section className="blog-detail-v2__hero">
        <div className="blog-detail-v2__container">
          <nav className="blog-detail-v2__crumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <header className="blog-detail-v2__header">
            <span className="blog-detail-v2__label">Blog</span>
            <h1 className="blog-detail-v2__title">{post.title}</h1>

            <div className="blog-detail-v2__meta">
              <span>{post.author}</span>
              <span className="blog-detail-v2__dot"></span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="blog-detail-v2__dot"></span>
              <span>{readingTime} min de lecture</span>
            </div>
          </header>
        </div>
      </section>

      <section className="blog-detail-v2__body">
        <div className="blog-detail-v2__container">
          <div className="blog-detail-v2__cover">
            <img src={post.image} alt={post.title} className="blog-detail-v2__cover-img" />
          </div>

          <div className="blog-detail-v2__layout">
            <aside className="blog-detail-v2__sidebar">
              <div className="blog-detail-v2__card">
                <p className="blog-detail-v2__card-label">Auteur</p>
                <p className="blog-detail-v2__card-value">{post.author}</p>
              </div>

              <div className="blog-detail-v2__card">
                <p className="blog-detail-v2__card-label">Publication</p>
                <p className="blog-detail-v2__card-value">{formatDate(post.publishedAt)}</p>
              </div>

              <div className="blog-detail-v2__card">
                <p className="blog-detail-v2__card-label">Lecture</p>
                <p className="blog-detail-v2__card-value">{readingTime} min</p>
              </div>

              <Link to="/blog" className="blog-detail-v2__back">
                Retour au blog
              </Link>
            </aside>

            <article className="blog-detail-v2__article">
              <div
                className="blog-detail-v2__content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}