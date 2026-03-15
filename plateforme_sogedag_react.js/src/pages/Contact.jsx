import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Contact.css';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);
  const { t } = useTranslation();

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
          <p className="contact-hero__eyebrow">{t('contact.hero.eyebrow')}</p>
          <h1 className="contact-hero__title">
            {t('contact.hero.title')}
            <span> {t('contact.hero.titleAccent')}</span>
          </h1>
          <p className="contact-hero__text">{t('contact.hero.text')}</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-info__inner">
          <div className="contact-info__intro">
            <p className="contact-info__eyebrow">{t('contact.info.eyebrow')}</p>
            <h2 className="contact-info__title">
              {t('contact.info.title')}
              <span> {t('contact.info.titleAccent')}</span>
            </h2>
            <p className="contact-info__text">{t('contact.info.text')}</p>
          </div>

          <div className="contact-info__grid">
            <article className="contact-card">
              <h3>{t('contact.cards.phone.title')}</h3>
              <p>{t('contact.cards.phone.value')}</p>
            </article>

            <article className="contact-card">
              <h3>{t('contact.cards.email.title')}</h3>
              <p>{t('contact.cards.email.value')}</p>
            </article>

            <article className="contact-card">
              <h3>{t('contact.cards.address.title')}</h3>
              <p>{t('contact.cards.address.value')}</p>
            </article>

            <article className="contact-card">
              <h3>{t('contact.cards.hours.title')}</h3>
              <p>{t('contact.cards.hours.value')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-presence">
        <div className="contact-presence__inner">
          <div className="contact-presence__copy">
            <p className="contact-presence__eyebrow">{t('contact.presence.eyebrow')}</p>
            <h2 className="contact-presence__title">
              {t('contact.presence.title')}
              <span> {t('contact.presence.titleAccent')}</span>
            </h2>
            <p className="contact-presence__text">{t('contact.presence.text')}</p>
          </div>

          <div className="contact-presence__grid">
            <article className="contact-presence__panel">
              <h3>{t('contact.presence.panels.sales.title')}</h3>
              <p>{t('contact.presence.panels.sales.text')}</p>
            </article>

            <article className="contact-presence__panel">
              <h3>{t('contact.presence.panels.support.title')}</h3>
              <p>{t('contact.presence.panels.support.text')}</p>
            </article>

            <article className="contact-presence__panel">
              <h3>{t('contact.presence.panels.partnerships.title')}</h3>
              <p>{t('contact.presence.panels.partnerships.text')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta__inner">
          <p className="contact-cta__eyebrow">{t('contact.cta.eyebrow')}</p>
          <h2 className="contact-cta__title">
            {t('contact.cta.title')}
            <span> {t('contact.cta.titleAccent')}</span>
          </h2>
          <p className="contact-cta__text">{t('contact.cta.text')}</p>

          <div className="contact-cta__actions">
            <a href="#contact" className="contact-btn contact-btn--primary">
              {t('contact.cta.quote')}
            </a>
            <a href="/apropos" className="contact-btn contact-btn--secondary">
              {t('contact.cta.about')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}