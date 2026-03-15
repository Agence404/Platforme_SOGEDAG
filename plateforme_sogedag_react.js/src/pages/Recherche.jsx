import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Recherche.css';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Recherche() {
  const pageRef = useRef(null);
  const { t } = useTranslation();

  const researchPosts = [
    {
      slug: 'effet-biostimulation-racinaire-mais',
      title: t('research.posts.one.title'),
      author: t('research.posts.one.author'),
      publishedAt: t('research.posts.one.date'),
      category: t('research.posts.one.category'),
      image: '/image_cata1.jpg',
      excerpt: t('research.posts.one.excerpt'),
    },
    {
      slug: 'nutrition-foliaire-et-equilibre-vegetatif',
      title: t('research.posts.two.title'),
      author: t('research.posts.two.author'),
      publishedAt: t('research.posts.two.date'),
      category: t('research.posts.two.category'),
      image: '/image_cata2.jpg',
      excerpt: t('research.posts.two.excerpt'),
    },
    {
      slug: 'assimilation-minerale-et-regularite',
      title: t('research.posts.three.title'),
      author: t('research.posts.three.author'),
      publishedAt: t('research.posts.three.date'),
      category: t('research.posts.three.category'),
      image: '/image_cata3.jpg',
      excerpt: t('research.posts.three.excerpt'),
    },
    {
      slug: 'fertilisation-organique-et-vie-microbienne',
      title: t('research.posts.four.title'),
      author: t('research.posts.four.author'),
      publishedAt: t('research.posts.four.date'),
      category: t('research.posts.four.category'),
      image: '/image_cata4.jpg',
      excerpt: t('research.posts.four.excerpt'),
    },
    {
      slug: 'performance-npk-en-fertigation',
      title: t('research.posts.five.title'),
      author: t('research.posts.five.author'),
      publishedAt: t('research.posts.five.date'),
      category: t('research.posts.five.category'),
      image: '/image_cata5.jpg',
      excerpt: t('research.posts.five.excerpt'),
    },
    {
      slug: 'croissance-rendement-et-nutrition-minerale',
      title: t('research.posts.six.title'),
      author: t('research.posts.six.author'),
      publishedAt: t('research.posts.six.date'),
      category: t('research.posts.six.category'),
      image: '/image_cata6.jpg',
      excerpt: t('research.posts.six.excerpt'),
    },
  ];

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
          <p className="research-science__eyebrow">{t('research.hero.eyebrow')}</p>
          <h1 className="research-science__title">
            {t('research.hero.title')}
            <span> {t('research.hero.titleAccent')}</span>
          </h1>
          <p className="research-science__text">{t('research.hero.text')}</p>
        </div>
      </section>

      <section className="research-science__list">
        <div className="research-science__container">
          <div className="research-science__section-head">
            <p className="research-science__section-eyebrow">{t('research.list.eyebrow')}</p>
            <h2 className="research-science__section-title">
              {t('research.list.title')}
            </h2>
            <p className="research-science__section-text">
              {t('research.list.text')}
            </p>
          </div>

          <div className="research-science__grid">
            {researchPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/recherche/${post.slug}`}
                className="research-science-card"
                aria-label={t('research.viewResearchAria', { title: post.title })}
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
                    <span>{t('research.readResearch')}</span>
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