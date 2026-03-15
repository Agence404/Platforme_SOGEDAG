import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const { t } = useTranslation();

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
        aria-label={t('footer.backToTop')}
        onClick={scrollToTop}
      >
        ↑
      </button>

      <div className="sogedag-footer__inner">
        <div className="sogedag-footer__header">
          <h2 className="sogedag-footer__title">
            {t('footer.titleLine1')}
            <br />
            {t('footer.titleLine2')}
          </h2>
        </div>

        <div className="sogedag-footer__columns">
          <div className="sogedag-footer__col">
            <h3>{t('footer.company.title')}</h3>
            <p>
              {t('footer.company.line1')}
              <br />
              {t('footer.company.line2')}
              <br />
              {t('footer.company.line3')}
              <br />
              {t('footer.company.line4')}
            </p>
          </div>

          <div className="sogedag-footer__col">
            <h3>{t('footer.navigation.title')}</h3>
            <ul>
              <li><a href="#why-us">{t('footer.navigation.whyUs')}</a></li>
              <li><a href="#catalogue">{t('footer.navigation.catalogue')}</a></li>
              <li><a href="#innovation">{t('footer.navigation.innovation')}</a></li>
              <li><a href="#research">{t('footer.navigation.research')}</a></li>
            </ul>
          </div>

          <div className="sogedag-footer__col">
            <h3>{t('footer.content.title')}</h3>
            <ul>
              <li><a href="#blog">{t('footer.content.blog')}</a></li>
              <li><a href="#reviews">{t('footer.content.reviews')}</a></li>
              <li><a href="#contact">{t('footer.content.contact')}</a></li>
              <li><a href="#faq">{t('footer.content.faq')}</a></li>
            </ul>
          </div>

          <div className="sogedag-footer__col">
            <h3>{t('footer.follow.title')}</h3>
            <ul>
              <li><a href="/">{t('footer.follow.facebook')}</a></li>
              <li><a href="/">{t('footer.follow.instagram')}</a></li>
              <li><a href="/">{t('footer.follow.linkedin')}</a></li>
              <li><a href="/">{t('footer.follow.youtube')}</a></li>
            </ul>
          </div>
        </div>

        <div className="sogedag-footer__agency">
          <span>{t('footer.madeBy')}</span>
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
            <span>{t('footer.rights')}</span>
          </div>

          <div className="sogedag-footer__bottom-right">
            <Link to="/mentions-legales">{t('footer.legal')}</Link>
            <Link to="/confidentialite">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}