import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

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
          <p className="about-hero__eyebrow">À propos de SOGEDAG</p>
          <h1 className="about-hero__title">
            Une entreprise agricole pensée
            <span> pour la performance, la rigueur et le terrain</span>
          </h1>
          <p className="about-hero__text">
            Nous développons une vision agricole fondée sur l’expertise agronomique,
            l’accompagnement technique et la cohérence des solutions appliquées sur le terrain.
          </p>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="about-manifesto__inner">
          <div className="about-manifesto__copy">
            <p className="about-manifesto__eyebrow">Notre manifeste</p>
            <h2 className="about-manifesto__title">
              Construire une agriculture
              <span> plus lisible, plus technique et plus durable</span>
            </h2>
            <p className="about-manifesto__text">
              SOGEDAG s’inscrit dans une logique d’exigence agronomique, de proximité terrain
              et d’amélioration continue. Notre objectif n’est pas seulement de proposer des
              solutions, mais de contribuer à des décisions techniques cohérentes, durables
              et réellement adaptées aux cultures.
            </p>
            <p className="about-manifesto__text">
              Nous croyons à une agriculture performante fondée sur la compréhension du terrain,
              la précision des besoins et la qualité de l’accompagnement.
            </p>
          </div>

          <div className="about-manifesto__media">
            <img src="image 3.jpg" alt="Expertise agricole terrain" />
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-section-head">
          <p className="about-timeline__eyebrow">Notre trajectoire</p>
          <h2 className="about-timeline__title">
            Une progression construite autour
            <span> du terrain et de l’expertise</span>
          </h2>
          <p className="about-timeline__subtitle">
            Une évolution guidée par la rigueur technique, l’écoute des besoins réels
            et la volonté d’apporter des réponses durables au secteur agricole.
          </p>
        </div>

        <div className="about-timeline__track">
          <div className="about-timeline__line">
            <div className="about-timeline__line-fill"></div>
          </div>

          <article className="about-timeline__step about-timeline__step--left">
            <span className="about-timeline__step-index">01</span>
            <h3>Observation terrain</h3>
            <p>
              Une compréhension fine des cultures, des sols et des contraintes locales comme
              point de départ de notre démarche.
            </p>
          </article>

          <article className="about-timeline__step about-timeline__step--right">
            <span className="about-timeline__step-index">02</span>
            <h3>Construction technique</h3>
            <p>
              Une sélection de solutions cohérentes, pensées pour répondre à des objectifs
              agronomiques précis et durables.
            </p>
          </article>

          <article className="about-timeline__step about-timeline__step--left">
            <span className="about-timeline__step-index">03</span>
            <h3>Accompagnement</h3>
            <p>
              Une présence terrain qui transforme la recommandation en action claire,
              ajustée et suivie dans le temps.
            </p>
          </article>

          <article className="about-timeline__step about-timeline__step--right">
            <span className="about-timeline__step-index">04</span>
            <h3>Performance durable</h3>
            <p>
              Une vision de long terme orientée vers la régularité, l’équilibre et la
              valorisation durable des cultures.
            </p>
          </article>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-vision__inner">
          <div className="about-vision__copy">
            <p className="about-vision__eyebrow">Notre vision</p>
            <h2 className="about-vision__title">
              Faire du conseil agronomique
              <span> un levier de décision et de confiance</span>
            </h2>
            <p className="about-vision__text">
              Notre vision repose sur une agriculture où la technique reste lisible,
              le terrain reste central, et les solutions s’intègrent dans une logique
              globale de performance durable.
            </p>
            <p className="about-vision__text">
              Chaque recommandation doit être compréhensible, chaque solution doit être
              cohérente, et chaque intervention doit contribuer à renforcer la qualité
              des décisions prises sur l’exploitation.
            </p>
          </div>

          <div className="about-vision__media">
            <img src="image 2.jpg" alt="Vision agronomique et performance" />
          </div>
        </div>
      </section>

      <section className="about-metrics">
        <div className="about-section-head">
          <p className="about-metrics__eyebrow">Repères</p>
          <h2 className="about-metrics__title">
            Des chiffres qui traduisent
            <span> notre présence terrain</span>
          </h2>
          <p className="about-metrics__subtitle">
            Une dynamique fondée sur la constance, la proximité et l’exigence technique.
          </p>
        </div>

        <div className="about-metrics__grid">
          <article className="about-metric">
            <strong>10+</strong>
            <span>Années d’expérience</span>
          </article>

          <article className="about-metric">
            <strong>500+</strong>
            <span>Clients accompagnés</span>
          </article>

          <article className="about-metric">
            <strong>98%</strong>
            <span>Satisfaction partenaire</span>
          </article>

          <article className="about-metric">
            <strong>24/7</strong>
            <span>Exigence de suivi</span>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-head">
          <p className="about-values__eyebrow">Nos valeurs</p>
          <h2 className="about-values__title">
            Une culture d’entreprise
            <span> portée par la rigueur et l’engagement</span>
          </h2>
          <p className="about-values__subtitle">
            Nos valeurs structurent notre posture terrain, nos choix techniques et
            notre manière d’accompagner durablement nos partenaires.
          </p>
        </div>

        <div className="about-values__grid">
          <article className="about-value">
            <h3>Rigueur</h3>
            <p>
              Une approche sérieuse et structurée dans le choix des solutions,
              l’analyse des besoins et la qualité des recommandations.
            </p>
          </article>

          <article className="about-value">
            <h3>Proximité</h3>
            <p>
              Une relation terrain qui permet de rester en lien avec la réalité des
              exploitations, des cultures et des enjeux de production.
            </p>
          </article>

          <article className="about-value">
            <h3>Responsabilité</h3>
            <p>
              Une vision durable de la performance agricole, fondée sur l’équilibre,
              la lisibilité technique et l’impact dans le temps.
            </p>
          </article>
        </div>
      </section>

      <section className="about-commitment">
        <div className="about-commitment__inner">
          <div className="about-commitment__copy">
            <p className="about-commitment__eyebrow">Notre engagement</p>
            <h2 className="about-commitment__title">
              Transformer l’expertise
              <span> en accompagnement concret</span>
            </h2>
            <p className="about-commitment__text">
              Au-delà des produits et des formulations, notre engagement est d’apporter
              une lecture technique claire, une présence terrain utile et une logique
              d’accompagnement cohérente avec les réalités agricoles.
            </p>
          </div>

          <div className="about-commitment__panel">
            <img src="image pepticide.png" alt="Accompagnement technique agricole" />
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <p className="about-cta__eyebrow">Construisons ensemble</p>
          <h2 className="about-cta__title">
            Parlons de vos objectifs
            <span> et de vos besoins terrain</span>
          </h2>
          <p className="about-cta__text">
            Notre équipe vous accompagne pour identifier les solutions les plus adaptées
            à votre contexte cultural et à vos ambitions de performance.
          </p>

          <div className="about-cta__actions">
            <a href="#contact" className="about-btn about-btn--primary">
              Demander un devis
            </a>
            <a href="/#catalogue" className="about-btn about-btn--secondary">
              Voir le catalogue
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}