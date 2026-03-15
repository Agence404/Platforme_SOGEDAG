import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Catalogue.css';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Catalogue() {
  const pageRef = useRef(null);
  const { t } = useTranslation();

  const catalogueItems = [
    {
      id: '01',
      slug: 'biostimulants',
      word: t('catalogue.items.bio.word'),
      title: t('catalogue.items.bio.title'),
      text: t('catalogue.items.bio.text'),
      image: 'image_cata1.jpg',
    },
    {
      id: '02',
      slug: 'engrais-speciaux',
      word: t('catalogue.items.special.word'),
      title: t('catalogue.items.special.title'),
      text: t('catalogue.items.special.text'),
      image: 'image 2.jpg',
    },
    {
      id: '03',
      slug: 'mineral-tech',
      word: t('catalogue.items.tech.word'),
      title: t('catalogue.items.tech.title'),
      text: t('catalogue.items.tech.text'),
      image: 'image_cata3.jpg',
    },
    {
      id: '04',
      slug: 'engrais-organiques',
      word: t('catalogue.items.organic.word'),
      title: t('catalogue.items.organic.title'),
      text: t('catalogue.items.organic.text'),
      image: 'image_cata4.jpg',
    },
    {
      id: '05',
      slug: 'npk',
      word: t('catalogue.items.npk.word'),
      title: t('catalogue.items.npk.title'),
      text: t('catalogue.items.npk.text'),
      image: 'image_cata5.jpg',
    },
    {
      id: '06',
      slug: 'engrais-mineraux',
      word: t('catalogue.items.mineral.word'),
      title: t('catalogue.items.mineral.title'),
      text: t('catalogue.items.mineral.text'),
      image: 'image_cata6.jpg',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.catalogue-page-hero__eyebrow',
          '.catalogue-page-hero__title',
          '.catalogue-page-hero__text',
          '.catalogue-page-list__eyebrow',
          '.catalogue-page-list__title',
          '.catalogue-page-list__subtitle',
        ],
        { opacity: 0, y: 40 }
      );

      gsap.set('.catalogue-page-card', {
        opacity: 0,
        y: 60,
      });

      gsap
        .timeline()
        .to('.catalogue-page-hero__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.catalogue-page-hero__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.catalogue-page-hero__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.catalogue-page-list',
            start: 'top 84%',
          },
        })
        .to('.catalogue-page-list__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.catalogue-page-list__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.catalogue-page-list__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.catalogue-page-card', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.catalogue-page-grid',
          start: 'top 84%',
        },
      });

      document.querySelectorAll('.catalogue-page-card').forEach((card) => {
        const image = card.querySelector('.catalogue-page-card__image');
        if (!image) return;

        gsap.to(image, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="catalogue-page">
      <section className="catalogue-page-hero">
        <div className="catalogue-page-hero__bg" aria-hidden="true">
          <div className="catalogue-page-hero__orb catalogue-page-hero__orb--one"></div>
          <div className="catalogue-page-hero__orb catalogue-page-hero__orb--two"></div>
          <div className="catalogue-page-hero__grid"></div>
        </div>

        <div className="catalogue-page-hero__inner">
          <p className="catalogue-page-hero__eyebrow">{t('catalogue.hero.eyebrow')}</p>
          <h1 className="catalogue-page-hero__title">
            {t('catalogue.hero.title')}
            <span> {t('catalogue.hero.titleAccent')}</span>
          </h1>
          <p className="catalogue-page-hero__text">{t('catalogue.hero.text')}</p>
        </div>
      </section>

      <section className="catalogue-page-list">
        <div className="catalogue-page-section-head">
          <p className="catalogue-page-list__eyebrow">{t('catalogue.list.eyebrow')}</p>
          <h2 className="catalogue-page-list__title">
            {t('catalogue.list.title')}
            <span> {t('catalogue.list.titleAccent')}</span>
          </h2>
          <p className="catalogue-page-list__subtitle">{t('catalogue.list.subtitle')}</p>
        </div>

        <div className="catalogue-page-grid">
          {catalogueItems.map((item) => (
            <Link
              key={item.id}
              to={`/catalogue/${item.slug}`}
              className="catalogue-page-card"
              aria-label={t('catalogue.cardAria', { title: item.title })}
            >
              <div className="catalogue-page-card__word">{item.word}</div>

              <div className="catalogue-page-card__media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="catalogue-page-card__image"
                />
                <div className="catalogue-page-card__overlay"></div>
              </div>

              <div className="catalogue-page-card__content">
                <div className="catalogue-page-card__meta">
                  <span className="catalogue-page-card__index">{item.id}</span>
                  <span className="catalogue-page-card__line"></span>
                  <span className="catalogue-page-card__label">{t('catalogue.cardLabel')}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}