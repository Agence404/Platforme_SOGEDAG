import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './MentionsLegales.css';

export default function MentionsLegales() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.legal-page__breadcrumbs',
          '.legal-page__hero',
          '.legal-page__content',
        ],
        { opacity: 0, y: 28 }
      );

      gsap.to('.legal-page__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.legal-page__hero', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.legal-page__content', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.16,
        ease: 'power4.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="legal-page">
      <section className="legal-page__top">
        <div className="legal-page__bg" aria-hidden="true"></div>

        <div className="legal-page__container">
          <nav className="legal-page__breadcrumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Mentions légales</span>
          </nav>

          <header className="legal-page__hero">
            <p className="legal-page__label">Informations légales</p>
            <h1 className="legal-page__title">Mentions légales</h1>
            <p className="legal-page__intro">
              Cette page présente les informations légales relatives à l’édition,
              l’hébergement et l’utilisation du site.
            </p>
          </header>
        </div>
      </section>

      <section className="legal-page__main">
        <div className="legal-page__container legal-page__container--narrow">
          <article className="legal-page__content">
            <section className="legal-page__section">
              <h2>1. Éditeur du site</h2>
              <p>
                Le présent site est édité par <strong>SOGEDAG</strong>.
              </p>
              <p>
                <strong>Raison sociale :</strong> SOGEDAG
                <br />
                <strong>Forme juridique :</strong> À compléter
                <br />
                <strong>Capital social :</strong> À compléter
                <br />
                <strong>Siège social :</strong> À compléter
                <br />
                <strong>Numéro d’immatriculation :</strong> À compléter
                <br />
                <strong>Numéro d’identification fiscale :</strong> À compléter
                <br />
                <strong>Email :</strong> À compléter
                <br />
                <strong>Téléphone :</strong> À compléter
              </p>
              <p>
                <strong>Directeur de la publication :</strong> À compléter
              </p>
            </section>

            <section className="legal-page__section">
              <h2>2. Hébergement</h2>
              <p>
                Le site est hébergé par <strong>À compléter</strong>.
              </p>
              <p>
                <strong>Nom de l’hébergeur :</strong> À compléter
                <br />
                <strong>Adresse :</strong> À compléter
                <br />
                <strong>Téléphone :</strong> À compléter
                <br />
                <strong>Site web :</strong> À compléter
              </p>
            </section>

            <section className="legal-page__section">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                L’ensemble des contenus présents sur ce site, notamment les textes,
                images, graphismes, logos, icônes, vidéos, documents, éléments
                téléchargeables et tout autre contenu, est protégé par les dispositions
                applicables en matière de propriété intellectuelle.
              </p>
              <p>
                Sauf mention contraire, ces éléments sont la propriété exclusive de
                SOGEDAG. Toute reproduction, représentation, diffusion, adaptation,
                modification ou exploitation, totale ou partielle, sans autorisation
                préalable écrite, est interdite.
              </p>
            </section>

            <section className="legal-page__section">
              <h2>4. Responsabilité</h2>
              <p>
                SOGEDAG s’efforce d’assurer l’exactitude et la mise à jour des
                informations diffusées sur le site. Toutefois, l’éditeur ne peut
                garantir l’exhaustivité, l’exactitude ou l’absence d’erreurs de
                l’ensemble des contenus.
              </p>
              <p>
                L’utilisateur reconnaît utiliser les informations disponibles sur le
                site sous sa responsabilité exclusive. SOGEDAG ne pourra être tenue
                responsable de tout dommage direct ou indirect résultant de l’accès au
                site ou de son utilisation.
              </p>
            </section>

            <section className="legal-page__section">
              <h2>5. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers des sites tiers. Ces liens sont
                fournis à titre informatif. SOGEDAG n’exerce aucun contrôle sur le
                contenu de ces sites et décline toute responsabilité quant à leur
                contenu, fonctionnement ou politique de confidentialité.
              </p>
            </section>

            <section className="legal-page__section">
              <h2>6. Données personnelles</h2>
              <p>
                Les données personnelles éventuellement collectées via le site sont
                traitées conformément à la politique de confidentialité applicable.
              </p>
              <p>
                L’utilisateur peut exercer ses droits d’accès, de rectification,
                d’opposition ou de suppression conformément à la réglementation
                applicable, en contactant l’éditeur à l’adresse prévue à cet effet.
              </p>
            </section>

            <section className="legal-page__section">
              <h2>7. Cookies</h2>
              <p>
                Le site peut utiliser des cookies ou technologies similaires afin
                d’améliorer l’expérience utilisateur, mesurer l’audience ou assurer
                certaines fonctionnalités.
              </p>
              <p>
                L’utilisateur peut configurer son navigateur pour refuser tout ou
                partie des cookies, sous réserve des limitations que cela peut entraîner
                sur certaines fonctionnalités du site.
              </p>
            </section>

            <section className="legal-page__section">
              <h2>8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit applicable
                dans le pays d’établissement de l’éditeur, sous réserve de toute règle
                impérative applicable.
              </p>
              <p>
                En cas de litige, et à défaut de résolution amiable, les juridictions
                compétentes seront celles du ressort du siège social de l’éditeur, sauf
                disposition légale contraire.
              </p>
            </section>

            <section className="legal-page__section">
              <h2>9. Contact</h2>
              <p>
                Pour toute question relative au site ou à son contenu, vous pouvez
                contacter SOGEDAG via la page <Link to="/contact">Contact</Link>.
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}