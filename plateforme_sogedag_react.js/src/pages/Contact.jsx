import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.contact-hero__eyebrow',
          '.contact-hero__title',
          '.contact-hero__text',
          '.contact-info__eyebrow',
          '.contact-info__title',
          '.contact-info__text',
          '.contact-card',
          '.contact-presence__eyebrow',
          '.contact-presence__title',
          '.contact-presence__text',
          '.contact-presence__panel',
          '.contact-cta__eyebrow',
          '.contact-cta__title',
          '.contact-cta__text',
          '.contact-cta__actions',
        ],
        { opacity: 0, y: 36 }
      );

      gsap
        .timeline()
        .to('.contact-hero__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.contact-hero__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.contact-hero__text',
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
            trigger: '.contact-info',
            start: 'top 84%',
          },
        })
        .to('.contact-info__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.contact-info__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.contact-info__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.contact-card', {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-info__grid',
          start: 'top 84%',
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.contact-presence',
            start: 'top 84%',
          },
        })
        .to('.contact-presence__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.contact-presence__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.contact-presence__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.contact-presence__panel',
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.3'
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.contact-cta',
            start: 'top 84%',
          },
        })
        .to('.contact-cta__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.contact-cta__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.contact-cta__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.contact-cta__actions',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        );

      gsap.to('.contact-hero__glow--one', {
        x: 36,
        y: 20,
        scrollTrigger: {
          trigger: '.contact-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.contact-hero__glow--two', {
        x: -30,
        y: -16,
        scrollTrigger: {
          trigger: '.contact-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={contactRef} className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__bg" aria-hidden="true">
          <div className="contact-hero__glow contact-hero__glow--one"></div>
          <div className="contact-hero__glow contact-hero__glow--two"></div>
          <div className="contact-hero__grid"></div>
        </div>

        <div className="contact-hero__inner">
          <p className="contact-hero__eyebrow">Contact SOGEDAG</p>
          <h1 className="contact-hero__title">
            Restons en lien autour de vos
            <span> besoins et de vos enjeux terrain</span>
          </h1>
          <p className="contact-hero__text">
            Retrouvez ici les informations essentielles pour contacter SOGEDAG
            et échanger avec notre équipe.
          </p>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-info__inner">
          <div className="contact-info__intro">
            <p className="contact-info__eyebrow">Informations utiles</p>
            <h2 className="contact-info__title">
              Les coordonnées
              <span> de SOGEDAG</span>
            </h2>
            <p className="contact-info__text">
              Notre équipe reste disponible pour répondre à vos demandes
              commerciales, techniques et générales concernant nos solutions agricoles.
            </p>
          </div>

          <div className="contact-info__grid">
            <article className="contact-card">
              <h3>Téléphone</h3>
              <p>+212 6 00 00 00 00</p>
            </article>

            <article className="contact-card">
              <h3>Email</h3>
              <p>contact@sogedag.com</p>
            </article>

            <article className="contact-card">
              <h3>Adresse</h3>
              <p>Casablanca, Maroc</p>
            </article>

            <article className="contact-card">
              <h3>Horaires</h3>
              <p>Lundi — Vendredi / 9h — 18h</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-presence">
        <div className="contact-presence__inner">
          <div className="contact-presence__copy">
            <p className="contact-presence__eyebrow">Notre disponibilité</p>
            <h2 className="contact-presence__title">
              Une équipe attentive,
              <span> proche du terrain</span>
            </h2>
            <p className="contact-presence__text">
              SOGEDAG privilégie une relation claire, directe et professionnelle.
              Notre accompagnement repose sur la compréhension des besoins,
              la cohérence technique et la proximité avec les réalités du terrain.
            </p>
          </div>

          <div className="contact-presence__grid">
            <article className="contact-presence__panel">
              <h3>Demandes commerciales</h3>
              <p>
                Informations sur nos gammes, besoins en solutions, demande de devis
                et échanges autour de vos objectifs de production.
              </p>
            </article>

            <article className="contact-presence__panel">
              <h3>Accompagnement technique</h3>
              <p>
                Échanges autour des cultures, recommandations agronomiques et
                orientation vers les solutions les plus cohérentes.
              </p>
            </article>

            <article className="contact-presence__panel">
              <h3>Partenariats & collaboration</h3>
              <p>
                Discussions liées aux opportunités de développement, aux relations
                professionnelles et aux projets communs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta__inner">
          <p className="contact-cta__eyebrow">Demande rapide</p>
          <h2 className="contact-cta__title">
            Vous souhaitez échanger
            <span> avec notre équipe ?</span>
          </h2>
          <p className="contact-cta__text">
            Accédez rapidement à une demande de devis ou poursuivez votre découverte
            de l’univers SOGEDAG.
          </p>

          <div className="contact-cta__actions">
            <a href="#contact" className="contact-btn contact-btn--primary">
              Demander un devis
            </a>
            <a href="/apropos" className="contact-btn contact-btn--secondary">
              Découvrir SOGEDAG
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}