import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Multimedia.css';

gsap.registerPlugin(ScrollTrigger);

const featuredItem = {
  id: '00',
  title: 'Présentation générale SOGEDAG',
  subtitle: 'Document vedette',
  text:
    'Un support central pour découvrir l’univers SOGEDAG, son positionnement, ses solutions et son approche de l’accompagnement terrain.',
  image: 'hero.jpg',
  pdf: '/pdfs/presentation-sogedag.pdf',
};

const mediaItems = [
  {
    id: '01',
    title: 'Catalogue Biostimulants',
    subtitle: 'Catalogue PDF',
    image: 'image_cata1.jpg',
    pdf: '/pdfs/biostimulants.pdf',
  },
  {
    id: '02',
    title: 'Guide Engrais spéciaux',
    subtitle: 'Documentation',
    image: 'image_cata2.jpg',
    pdf: '/pdfs/engrais-speciaux.pdf',
  },
  {
    id: '03',
    title: 'Présentation Mineral-Tech',
    subtitle: 'Présentation PDF',
    image: 'image_cata3.jpg',
    pdf: '/pdfs/mineral-tech.pdf',
  },
  {
    id: '04',
    title: 'Fiche Engrais organiques',
    subtitle: 'Fiche technique',
    image: 'image_cata4.jpg',
    pdf: '/pdfs/engrais-organiques.pdf',
  },
  {
    id: '05',
    title: 'Brochure NPK',
    subtitle: 'Brochure PDF',
    image: 'image_cata5.jpg',
    pdf: '/pdfs/npk.pdf',
  },
  {
    id: '06',
    title: 'Catalogue Engrais minéraux',
    subtitle: 'Catalogue PDF',
    image: 'image_cata6.jpg',
    pdf: '/pdfs/engrais-mineraux.pdf',
  },
];

export default function Multimedia() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(
        [
          '.media-plus-hero__eyebrow',
          '.media-plus-hero__title',
          '.media-plus-hero__text',
          '.media-plus-hero__actions',
          '.media-plus-featured__eyebrow',
          '.media-plus-featured__title',
          '.media-plus-featured__text',
          '.media-plus-library__eyebrow',
          '.media-plus-library__title',
          '.media-plus-library__subtitle',
          '.media-plus-stats__eyebrow',
          '.media-plus-stats__title',
          '.media-plus-stats__subtitle',
          '.media-plus-cta__eyebrow',
          '.media-plus-cta__title',
          '.media-plus-cta__text',
          '.media-plus-cta__actions',
        ],
        { opacity: 0, y: 40 }
      );

      gsap.set('.media-plus-featured__card', {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set('.media-plus-item', {
        opacity: 0,
        y: 70,
      });

      gsap.set('.media-plus-stat', {
        opacity: 0,
        y: 40,
      });

      gsap
        .timeline()
        .to('.media-plus-hero__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.media-plus-hero__title',
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.media-plus-hero__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          '.media-plus-hero__actions',
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power3.out',
          },
          '-=0.35'
        );

      gsap.to('.media-plus-hero__orb--one', {
        x: 50,
        y: 20,
        scrollTrigger: {
          trigger: '.media-plus-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.media-plus-hero__orb--two', {
        x: -40,
        y: -20,
        scrollTrigger: {
          trigger: '.media-plus-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.media-plus-featured',
            start: 'top 84%',
          },
        })
        .to('.media-plus-featured__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.media-plus-featured__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.media-plus-featured__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.media-plus-featured__card',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.35'
        );

      gsap.to('.media-plus-featured__image', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.media-plus-featured__card',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      mm.add('(min-width: 969px)', () => {
        ScrollTrigger.create({
          trigger: '.media-plus-featured',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.media-plus-featured__copy',
          pinSpacing: false,
        });
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.media-plus-library',
            start: 'top 84%',
          },
        })
        .to('.media-plus-library__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.media-plus-library__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.media-plus-library__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.media-plus-item', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.media-plus-gallery',
          start: 'top 84%',
        },
      });

      document.querySelectorAll('.media-plus-item').forEach((item) => {
        const image = item.querySelector('.media-plus-item__image');
        const ghost = item.querySelector('.media-plus-item__ghost');

        if (image) {
          gsap.to(image, {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        if (ghost) {
          gsap.to(ghost, {
            x: 24,
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.media-plus-stats',
            start: 'top 84%',
          },
        })
        .to('.media-plus-stats__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.media-plus-stats__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.media-plus-stats__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.media-plus-stat', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.media-plus-stats__grid',
          start: 'top 84%',
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.media-plus-cta',
            start: 'top 84%',
          },
        })
        .to('.media-plus-cta__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.media-plus-cta__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.media-plus-cta__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.media-plus-cta__actions',
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power3.out',
          },
          '-=0.3'
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="media-plus-page">
      <section className="media-plus-hero">
        <div className="media-plus-hero__bg" aria-hidden="true">
          <div className="media-plus-hero__orb media-plus-hero__orb--one"></div>
          <div className="media-plus-hero__orb media-plus-hero__orb--two"></div>
          <div className="media-plus-hero__grid"></div>
        </div>

        <div className="media-plus-hero__inner">
          <p className="media-plus-hero__eyebrow">Multimédia</p>
          <h1 className="media-plus-hero__title">
            Une bibliothèque premium
            <span> de supports PDF et documents visuels</span>
          </h1>
          <p className="media-plus-hero__text">
            Retrouvez une sélection de catalogues, brochures, fiches et documents
            de présentation dans une expérience plus immersive, plus élégante et plus lisible.
          </p>

          <div className="media-plus-hero__actions">
            <a href="#media-library" className="media-plus-btn media-plus-btn--primary">
              Explorer la bibliothèque
            </a>
            <a href="/contact" className="media-plus-btn media-plus-btn--secondary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section className="media-plus-featured">
        <div className="media-plus-featured__inner">
          <div className="media-plus-featured__copy">
            <p className="media-plus-featured__eyebrow">Document vedette</p>
            <h2 className="media-plus-featured__title">
              Une porte d’entrée
              <span> vers l’univers SOGEDAG</span>
            </h2>
            <p className="media-plus-featured__text">
              Commencez par un support central qui présente l’entreprise, ses solutions
              et sa vision de l’accompagnement agricole.
            </p>
          </div>

          <div className="media-plus-featured__card">
            <div className="media-plus-featured__media">
              <img
                src={featuredItem.image}
                alt={featuredItem.title}
                className="media-plus-featured__image"
              />
              <div className="media-plus-featured__overlay"></div>
              <div className="media-plus-featured__ghost">FEATURED</div>
            </div>

            <div className="media-plus-featured__content">
              <div className="media-plus-featured__meta">
                <span className="media-plus-featured__index">{featuredItem.id}</span>
                <span className="media-plus-featured__line"></span>
                <span className="media-plus-featured__label">{featuredItem.subtitle}</span>
              </div>

              <h3>{featuredItem.title}</h3>
              <p>{featuredItem.text}</p>

              <a
                href={featuredItem.pdf}
                target="_blank"
                rel="noreferrer"
                className="media-plus-btn media-plus-btn--primary"
              >
                Ouvrir le PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="media-plus-library" id="media-library">
        <div className="media-plus-library__head">
          <p className="media-plus-library__eyebrow">Bibliothèque documentaire</p>
          <h2 className="media-plus-library__title">
            Une sélection de
            <span> supports visuels et techniques</span>
          </h2>
          <p className="media-plus-library__subtitle">
            Chaque document associe une image, un titre fort et un accès direct au PDF.
          </p>
        </div>

        <div className="media-plus-gallery">
          {mediaItems.map((item) => (
            <article key={item.id} className="media-plus-item">
              <div className="media-plus-item__media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="media-plus-item__image"
                />
                <div className="media-plus-item__overlay"></div>
                <div className="media-plus-item__ghost">PDF</div>
              </div>

              <div className="media-plus-item__content">
                <div className="media-plus-item__meta">
                  <span className="media-plus-item__index">{item.id}</span>
                  <span className="media-plus-item__line"></span>
                  <span className="media-plus-item__label">{item.subtitle}</span>
                </div>

                <h3>{item.title}</h3>

                <div className="media-plus-item__actions">
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="media-plus-btn media-plus-btn--primary"
                  >
                    Voir le PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="media-plus-stats">
        <div className="media-plus-stats__inner">
          <div className="media-plus-stats__head">
            <p className="media-plus-stats__eyebrow">Valeur documentaire</p>
            <h2 className="media-plus-stats__title">
              Une bibliothèque pensée
              <span> pour être utile et lisible</span>
            </h2>
            <p className="media-plus-stats__subtitle">
              Une organisation claire pour consulter rapidement les bons supports.
            </p>
          </div>

          <div className="media-plus-stats__grid">
            <article className="media-plus-stat">
              <strong>06</strong>
              <span>Documents principaux</span>
            </article>

            <article className="media-plus-stat">
              <strong>100%</strong>
              <span>Accès direct aux PDFs</span>
            </article>

            <article className="media-plus-stat">
              <strong>01</strong>
              <span>Bibliothèque centralisée</span>
            </article>
          </div>
        </div>
      </section>

      <section className="media-plus-cta">
        <div className="media-plus-cta__inner">
          <p className="media-plus-cta__eyebrow">Aller plus loin</p>
          <h2 className="media-plus-cta__title">
            Vous recherchez un
            <span> support spécifique ?</span>
          </h2>
          <p className="media-plus-cta__text">
            Notre équipe peut vous orienter vers la bonne documentation et vous transmettre
            le support le plus adapté à votre besoin.
          </p>

          <div className="media-plus-cta__actions">
            <a href="/contact" className="media-plus-btn media-plus-btn--primary">
              Nous contacter
            </a>
            <a href="/catalogue" className="media-plus-btn media-plus-btn--secondary">
              Voir le catalogue
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}