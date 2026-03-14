import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.sogedag-footer__eyebrow',
          '.sogedag-footer__title',
          '.sogedag-footer__col',
          '.sogedag-footer__agency',
          '.sogedag-footer__bottom',
        ],
        {
          opacity: 0,
          y: 28,
        }
      );

      gsap.set('.sogedag-footer__brand span', {
        opacity: 0,
        y: 70,
        scale: 0.94,
      });

      gsap.set('.sogedag-footer__top', {
        opacity: 0,
        y: 12,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.sogedag-footer',
            start: 'top 84%',
          },
        })
        .to('.sogedag-footer__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.sogedag-footer__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power4.out',
          },
          '-=0.28'
        )
        .to(
          '.sogedag-footer__col',
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .to(
          '.sogedag-footer__agency',
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .to(
          '.sogedag-footer__brand span',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.15'
        )
        .to(
          '.sogedag-footer__bottom',
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        .to(
          '.sogedag-footer__top',
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power3.out',
          },
          '-=0.25'
        );

      gsap.to('.sogedag-footer__shape--left', {
        x: 24,
        y: -16,
        ease: 'none',
        scrollTrigger: {
          trigger: '.sogedag-footer',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.sogedag-footer__shape--right', {
        x: -22,
        y: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.sogedag-footer',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="sogedag-footer" id="contact">
      <div className="sogedag-footer__bg" aria-hidden="true">
        <div className="sogedag-footer__shape sogedag-footer__shape--left"></div>
        <div className="sogedag-footer__shape sogedag-footer__shape--right"></div>
        <div className="sogedag-footer__line sogedag-footer__line--vertical"></div>
        <div className="sogedag-footer__line sogedag-footer__line--bottom"></div>
      </div>

      <button
        className="sogedag-footer__top"
        type="button"
        aria-label="Retour en haut"
        onClick={scrollToTop}
      >
        ↑
      </button>

      <div className="sogedag-footer__inner">
        <div className="sogedag-footer__header">
          
          <h2 className="sogedag-footer__title">
            Agriculture, innovation
            <br />
            et accompagnement terrain
          </h2>
        </div>

        <div className="sogedag-footer__columns">
          <div className="sogedag-footer__col">
            <h3>SOGEDAG</h3>
            <p>
              Solutions agricoles
              <br />
              Expertise agronomique
              <br />
              Innovation technique
              <br />
              Performance durable
            </p>
          </div>

          <div className="sogedag-footer__col">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#why-us">Pourquoi nous choisir</a></li>
              <li><a href="#catalogue">Catalogue</a></li>
              <li><a href="#innovation">Innovation</a></li>
              <li><a href="#research">Recherche</a></li>
            </ul>
          </div>

          <div className="sogedag-footer__col">
            <h3>Contenu</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#reviews">Avis clients</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="sogedag-footer__col">
            <h3>Suivre</h3>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">LinkedIn</a></li>
              <li><a href="/">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="sogedag-footer__agency">
          <span>Réalisé par</span>
          <a
            href="https://www.agence404.agency"
            target="_blank"
            rel="noreferrer"
            className="sogedag-footer__agency-link"
          >
            Agence 404
          </a>
        </div>

        <div className="sogedag-footer__brand">
          <span>Sogedag</span>
        </div>

        <div className="sogedag-footer__bottom">
          <div className="sogedag-footer__bottom-left">
            <strong>©2026 SOGEDAG</strong>
            <span>Tous droits réservés</span>
          </div>

          <div className="sogedag-footer__bottom-right">
            <a href="/">Mentions légales</a>
            <a href="/">Confidentialité</a>
            <a href="/">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}