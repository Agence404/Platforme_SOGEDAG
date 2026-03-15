import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Blog.css';

gsap.registerPlugin(ScrollTrigger);

const featuredPost = {
  id: '00',
  slug: 'comprendre-le-terrain',
  title: 'Comprendre le terrain avant toute décision technique',
  content:
    'L’observation agronomique reste le point de départ d’une stratégie culturale cohérente. Avant toute intervention, il est essentiel de lire le contexte, les besoins de la culture et les contraintes du terrain afin de construire une réponse réellement adaptée.',
  author: 'Équipe SOGEDAG',
  date: '12 Mars 2026',
  image: 'image_cata1.jpg',
  product: 'Biostimulants',
};

const posts = [
  {
    id: '01',
    slug: 'nutrition-equilibre-cultures',
    title: 'Nutrition, équilibre et régularité des cultures',
    content:
      'Une approche plus précise de la nutrition végétale permet de renforcer la vigueur, d’accompagner la régularité de développement et de mieux soutenir le potentiel de rendement.',
    author: 'Service Agronomique',
    date: '08 Mars 2026',
    image: 'image_cata2.jpg',
    product: 'Engrais spéciaux',
  },
  {
    id: '02',
    slug: 'stimuler-sans-desequilibrer',
    title: 'Stimuler sans déséquilibrer la plante',
    content:
      'La biostimulation doit s’inscrire dans une logique de soutien et d’équilibre physiologique. L’objectif est d’accompagner la plante sans perturber sa cohérence de développement.',
    author: 'Équipe Technique',
    date: '03 Mars 2026',
    image: 'image_cata3.jpg',
    product: 'Biostimulants',
  },
  {
    id: '03',
    slug: 'innovation-realite-champ',
    title: 'Quand l’innovation rencontre la réalité du champ',
    content:
      'La valeur d’une solution se mesure dans sa capacité à répondre aux contraintes concrètes du terrain. C’est dans cette rencontre entre innovation et observation que naît la vraie pertinence.',
    author: 'Pôle Innovation',
    date: '25 Février 2026',
    image: 'image_cata4.jpg',
    product: 'Mineral-Tech',
  },
  {
    id: '04',
    slug: 'accompagnement-levier-decision',
    title: 'L’accompagnement technique comme levier de décision',
    content:
      'Le conseil terrain permet d’ajuster les pratiques, de sécuriser les choix et de maintenir une cohérence entre objectifs, solutions et contexte agronomique.',
    author: 'Support Terrain',
    date: '18 Février 2026',
    image: 'image_cata5.jpg',
    product: 'Accompagnement',
  },
  {
    id: '05',
    slug: 'performance-temps-long',
    title: 'Construire la performance dans le temps long',
    content:
      'Une agriculture performante et durable se construit à partir d’une lecture rigoureuse des besoins, d’une stratégie claire et de solutions capables d’accompagner la culture dans la durée.',
    author: 'Direction Technique',
    date: '09 Février 2026',
    image: 'image_cata6.jpg',
    product: 'Engrais minéraux',
  },
  {
    id: '06',
    slug: 'role-formulation-coherence-agronomique',
    title: 'Le rôle de la formulation dans la cohérence agronomique',
    content:
      'Une formulation pertinente ne se limite pas à une promesse produit. Elle doit s’inscrire dans une logique complète de nutrition, d’équilibre et de réponse adaptée à la culture.',
    author: 'Recherche & Développement',
    date: '01 Février 2026',
    image: 'image 2.jpg',
    product: 'Engrais organiques',
  },
];

export default function Blog() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.blog-plus-hero__eyebrow',
          '.blog-plus-hero__title',
          '.blog-plus-hero__text',
          '.blog-plus-featured__eyebrow',
          '.blog-plus-featured__title',
          '.blog-plus-featured__subtitle',
          '.blog-plus-editorial__eyebrow',
          '.blog-plus-editorial__title',
          '.blog-plus-editorial__subtitle',
        ],
        { opacity: 0, y: 40 }
      );

      gsap.set('.blog-plus-featured__card', {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set('.blog-plus-post', {
        opacity: 0,
        y: 60,
      });

      gsap.set('.blog-plus-editorial__panel', {
        opacity: 0,
        y: 50,
      });

      gsap
        .timeline()
        .to('.blog-plus-hero__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.blog-plus-hero__title',
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.blog-plus-hero__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.5'
        );

      gsap.to('.blog-plus-hero__orb--one', {
        x: 44,
        y: 24,
        scrollTrigger: {
          trigger: '.blog-plus-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.blog-plus-hero__orb--two', {
        x: -36,
        y: -18,
        scrollTrigger: {
          trigger: '.blog-plus-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.blog-plus-featured',
            start: 'top 84%',
          },
        })
        .to('.blog-plus-featured__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.blog-plus-featured__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.blog-plus-featured__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.blog-plus-featured__card',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.35'
        );

      gsap.to('.blog-plus-post', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-plus-grid',
          start: 'top 84%',
        },
      });

      document.querySelectorAll('.blog-plus-post').forEach((post) => {
        const image = post.querySelector('.blog-plus-post__image');
        if (!image) return;

        gsap.to(image, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: post,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.blog-plus-editorial',
            start: 'top 84%',
          },
        })
        .to('.blog-plus-editorial__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.blog-plus-editorial__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.blog-plus-editorial__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.blog-plus-editorial__panel', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-plus-editorial__grid',
          start: 'top 84%',
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="blog-plus-page">
      <section className="blog-plus-hero">
        <div className="blog-plus-hero__bg" aria-hidden="true">
          <div className="blog-plus-hero__orb blog-plus-hero__orb--one"></div>
          <div className="blog-plus-hero__orb blog-plus-hero__orb--two"></div>
          <div className="blog-plus-hero__grid"></div>
        </div>

        <div className="blog-plus-hero__inner">
          <p className="blog-plus-hero__eyebrow">Blog SOGEDAG</p>
          <h1 className="blog-plus-hero__title">
            Regards, analyses et contenus
            <span> autour du terrain agricole</span>
          </h1>
          <p className="blog-plus-hero__text">
            Une bibliothèque éditoriale pour approfondir les pratiques,
            les produits, la lecture agronomique et les logiques de performance durable.
          </p>
        </div>
      </section>

      <section className="blog-plus-featured">
        <div className="blog-plus-featured__head">
          <p className="blog-plus-featured__eyebrow">Article vedette</p>
          <h2 className="blog-plus-featured__title">
            Un contenu central
            <span> pour mieux comprendre notre approche</span>
          </h2>
          <p className="blog-plus-featured__subtitle">
            Un article principal mis en avant pour ouvrir la lecture éditoriale du site.
          </p>
        </div>

        <Link
          to={`/blog/${featuredPost.slug}`}
          className="blog-plus-featured__card"
        >
          <div className="blog-plus-featured__media">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="blog-plus-featured__image"
            />
            <div className="blog-plus-featured__overlay"></div>
            <div className="blog-plus-featured__ghost">BLOG</div>
          </div>

          <div className="blog-plus-featured__content">
            <div className="blog-plus-featured__meta">
              <span>{featuredPost.product}</span>
              <span>•</span>
              <span>{featuredPost.author}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
            </div>

            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.content}</p>
          </div>
        </Link>
      </section>

      <section className="blog-plus-posts">
        <div className="blog-plus-grid">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="blog-plus-post"
            >
              <div className="blog-plus-post__media">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-plus-post__image"
                />
                <div className="blog-plus-post__overlay"></div>
                <div className="blog-plus-post__product">{post.product}</div>
              </div>

              <div className="blog-plus-post__content">
                <div className="blog-plus-post__top">
                  <span className="blog-plus-post__id">{post.id}</span>
                  <span className="blog-plus-post__date">{post.date}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.content}</p>

                <div className="blog-plus-post__bottom">
                  <strong>{post.author}</strong>
                  <span>{post.product}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-plus-editorial">
        <div className="blog-plus-editorial__head">
          <p className="blog-plus-editorial__eyebrow">Lecture éditoriale</p>
          <h2 className="blog-plus-editorial__title">
            Des contenus construits
            <span> autour de la cohérence terrain</span>
          </h2>
          <p className="blog-plus-editorial__subtitle">
            Chaque article relie observation, produit, accompagnement et performance.
          </p>
        </div>

        <div className="blog-plus-editorial__grid">
          <article className="blog-plus-editorial__panel">
            <strong>Produits</strong>
            <p>
              Chaque contenu peut être associé à une famille de solutions ou à un usage précis.
            </p>
          </article>

          <article className="blog-plus-editorial__panel">
            <strong>Terrain</strong>
            <p>
              Les articles s’appuient sur les réalités culturales et la logique d’observation.
            </p>
          </article>

          <article className="blog-plus-editorial__panel">
            <strong>Expertise</strong>
            <p>
              Auteurs, dates, contexte et contenu structurent une lecture claire et professionnelle.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}