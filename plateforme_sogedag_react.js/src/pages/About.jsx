import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './About.css';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set(
        [
          '.about-hero__eyebrow',
          '.about-hero__title',
          '.about-hero__text',
          '.about-manifesto__eyebrow',
          '.about-manifesto__title',
          '.about-manifesto__text',
          '.about-timeline__eyebrow',
          '.about-timeline__title',
          '.about-timeline__subtitle',
          '.about-vision__eyebrow',
          '.about-vision__title',
          '.about-vision__text',
          '.about-metrics__eyebrow',
          '.about-metrics__title',
          '.about-metrics__subtitle',
          '.about-values__eyebrow',
          '.about-values__title',
          '.about-values__subtitle',
          '.about-commitment__eyebrow',
          '.about-commitment__title',
          '.about-commitment__text',
          '.about-cta__eyebrow',
          '.about-cta__title',
          '.about-cta__text',
          '.about-cta__actions',
        ],
        { opacity: 0, y: 40 }
      );

      gsap.set('.about-manifesto__media', {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set('.about-timeline__step', {
        opacity: 0,
        y: 44,
      });

      gsap.set('.about-vision__media', {
        opacity: 0,
        y: 80,
        scale: 0.96,
      });

      gsap.set('.about-metric', {
        opacity: 0,
        y: 34,
      });

      gsap.set('.about-value', {
        opacity: 0,
        y: 40,
      });

      gsap.set('.about-commitment__panel', {
        opacity: 0,
        y: 50,
      });

      gsap
        .timeline()
        .to('.about-hero__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
        })
        .to(
          '.about-hero__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power4.out',
          },
          '-=0.25'
        )
        .to(
          '.about-hero__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.about-hero__glow--one', {
        x: 40,
        y: 24,
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.about-hero__glow--two', {
        x: -36,
        y: -18,
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-manifesto',
            start: 'top 82%',
          },
        })
        .to('.about-manifesto__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.about-manifesto__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.25'
        )
        .to(
          '.about-manifesto__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.about-manifesto__media',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.45'
        );

      gsap.to('.about-manifesto__media img', {
        yPercent: -8,
        scrollTrigger: {
          trigger: '.about-manifesto',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-timeline',
            start: 'top 84%',
          },
        })
        .to('.about-timeline__eyebrow, .about-timeline__title, .about-timeline__subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        });

      gsap.to('.about-timeline__line-fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-timeline__track',
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 1,
        },
      });

      document.querySelectorAll('.about-timeline__step').forEach((step) => {
        gsap.to(step, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 84%',
          },
        });
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-vision',
            start: 'top 82%',
          },
        })
        .to('.about-vision__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.about-vision__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.25'
        )
        .to(
          '.about-vision__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.about-vision__media',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.45'
        );

      mm.add('(min-width: 969px)', () => {
        ScrollTrigger.create({
          trigger: '.about-vision',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.about-vision__copy',
          pinSpacing: false,
        });
      });

      gsap.to('.about-vision__media img', {
        yPercent: -10,
        scrollTrigger: {
          trigger: '.about-vision',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-metrics',
            start: 'top 84%',
          },
        })
        .to('.about-metrics__eyebrow, .about-metrics__title, .about-metrics__subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        });

      gsap.to('.about-metric', {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-metrics__grid',
          start: 'top 84%',
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-values',
            start: 'top 84%',
          },
        })
        .to('.about-values__eyebrow, .about-values__title, .about-values__subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        });

      gsap.to('.about-value', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-values__grid',
          start: 'top 84%',
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-commitment',
            start: 'top 84%',
          },
        })
        .to('.about-commitment__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.about-commitment__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.25'
        )
        .to(
          '.about-commitment__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.about-commitment__panel',
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power4.out',
          },
          '-=0.45'
        );

      gsap.to('.about-commitment__panel img', {
        yPercent: -8,
        scrollTrigger: {
          trigger: '.about-commitment',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.about-cta',
            start: 'top 84%',
          },
        })
        .to('.about-cta__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.about-cta__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.25'
        )
        .to(
          '.about-cta__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.about-cta__actions',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.35'
        );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={aboutRef} className="about-page">
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden="true">
          <div className="about-hero__glow about-hero__glow--one"></div>
          <div className="about-hero__glow about-hero__glow--two"></div>
          <div className="about-hero__grid"></div>
        </div>

        <div className="about-hero__inner">
          <p className="about-hero__eyebrow">{t('about.hero.eyebrow')}</p>
          <h1 className="about-hero__title">
            {t('about.hero.title')}
            <span> {t('about.hero.titleAccent')}</span>
          </h1>
          <p className="about-hero__text">{t('about.hero.text')}</p>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="about-manifesto__inner">
          <div className="about-manifesto__copy">
            <p className="about-manifesto__eyebrow">{t('about.manifesto.eyebrow')}</p>
            <h2 className="about-manifesto__title">
              {t('about.manifesto.title')}
              <span> {t('about.manifesto.titleAccent')}</span>
            </h2>
            <p className="about-manifesto__text">{t('about.manifesto.text1')}</p>
            <p className="about-manifesto__text">{t('about.manifesto.text2')}</p>
          </div>

          <div className="about-manifesto__media">
            <img src="image 3.jpg" alt={t('about.manifesto.imageAlt')} />
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-section-head">
          <p className="about-timeline__eyebrow">{t('about.timeline.eyebrow')}</p>
          <h2 className="about-timeline__title">
            {t('about.timeline.title')}
            <span> {t('about.timeline.titleAccent')}</span>
          </h2>
          <p className="about-timeline__subtitle">{t('about.timeline.subtitle')}</p>
        </div>

        <div className="about-timeline__track">
          <div className="about-timeline__line">
            <div className="about-timeline__line-fill"></div>
          </div>

          <article className="about-timeline__step about-timeline__step--left">
            <span className="about-timeline__step-index">01</span>
            <h3>{t('about.timeline.steps.one.title')}</h3>
            <p>{t('about.timeline.steps.one.text')}</p>
          </article>

          <article className="about-timeline__step about-timeline__step--right">
            <span className="about-timeline__step-index">02</span>
            <h3>{t('about.timeline.steps.two.title')}</h3>
            <p>{t('about.timeline.steps.two.text')}</p>
          </article>

          <article className="about-timeline__step about-timeline__step--left">
            <span className="about-timeline__step-index">03</span>
            <h3>{t('about.timeline.steps.three.title')}</h3>
            <p>{t('about.timeline.steps.three.text')}</p>
          </article>

          <article className="about-timeline__step about-timeline__step--right">
            <span className="about-timeline__step-index">04</span>
            <h3>{t('about.timeline.steps.four.title')}</h3>
            <p>{t('about.timeline.steps.four.text')}</p>
          </article>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-vision__inner">
          <div className="about-vision__copy">
            <p className="about-vision__eyebrow">{t('about.vision.eyebrow')}</p>
            <h2 className="about-vision__title">
              {t('about.vision.title')}
              <span> {t('about.vision.titleAccent')}</span>
            </h2>
            <p className="about-vision__text">{t('about.vision.text1')}</p>
            <p className="about-vision__text">{t('about.vision.text2')}</p>
          </div>

          <div className="about-vision__media">
            <img src="image 2.jpg" alt={t('about.vision.imageAlt')} />
          </div>
        </div>
      </section>

      <section className="about-metrics">
        <div className="about-section-head">
          <p className="about-metrics__eyebrow">{t('about.metrics.eyebrow')}</p>
          <h2 className="about-metrics__title">
            {t('about.metrics.title')}
            <span> {t('about.metrics.titleAccent')}</span>
          </h2>
          <p className="about-metrics__subtitle">{t('about.metrics.subtitle')}</p>
        </div>

        <div className="about-metrics__grid">
          <article className="about-metric">
            <strong>10+</strong>
            <span>{t('about.metrics.items.experience')}</span>
          </article>

          <article className="about-metric">
            <strong>500+</strong>
            <span>{t('about.metrics.items.clients')}</span>
          </article>

          <article className="about-metric">
            <strong>98%</strong>
            <span>{t('about.metrics.items.satisfaction')}</span>
          </article>

          <article className="about-metric">
            <strong>24/7</strong>
            <span>{t('about.metrics.items.followup')}</span>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-head">
          <p className="about-values__eyebrow">{t('about.values.eyebrow')}</p>
          <h2 className="about-values__title">
            {t('about.values.title')}
            <span> {t('about.values.titleAccent')}</span>
          </h2>
          <p className="about-values__subtitle">{t('about.values.subtitle')}</p>
        </div>

        <div className="about-values__grid">
          <article className="about-value">
            <h3>{t('about.values.items.rigor.title')}</h3>
            <p>{t('about.values.items.rigor.text')}</p>
          </article>

          <article className="about-value">
            <h3>{t('about.values.items.proximity.title')}</h3>
            <p>{t('about.values.items.proximity.text')}</p>
          </article>

          <article className="about-value">
            <h3>{t('about.values.items.responsibility.title')}</h3>
            <p>{t('about.values.items.responsibility.text')}</p>
          </article>
        </div>
      </section>

      <section className="about-commitment">
        <div className="about-commitment__inner">
          <div className="about-commitment__copy">
            <p className="about-commitment__eyebrow">{t('about.commitment.eyebrow')}</p>
            <h2 className="about-commitment__title">
              {t('about.commitment.title')}
              <span> {t('about.commitment.titleAccent')}</span>
            </h2>
            <p className="about-commitment__text">{t('about.commitment.text')}</p>
          </div>

          <div className="about-commitment__panel">
            <img src="image pepticide.png" alt={t('about.commitment.imageAlt')} />
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <p className="about-cta__eyebrow">{t('about.cta.eyebrow')}</p>
          <h2 className="about-cta__title">
            {t('about.cta.title')}
            <span> {t('about.cta.titleAccent')}</span>
          </h2>
          <p className="about-cta__text">{t('about.cta.text')}</p>

          <div className="about-cta__actions">
            <a href="#contact" className="about-btn about-btn--primary">
              {t('about.cta.quote')}
            </a>
            <a href="/#catalogue" className="about-btn about-btn--secondary">
              {t('about.cta.catalogue')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}