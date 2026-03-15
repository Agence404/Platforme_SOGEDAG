import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './Confidentialite.css';

export default function Confidentialite() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.privacy-page__breadcrumbs',
          '.privacy-page__hero',
          '.privacy-page__content',
        ],
        { opacity: 0, y: 28 }
      );

      gsap.to('.privacy-page__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.privacy-page__hero', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.privacy-page__content', {
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
    <main ref={pageRef} className="privacy-page">
      <section className="privacy-page__top">
        <div className="privacy-page__bg" aria-hidden="true"></div>

        <div className="privacy-page__container">
          <nav className="privacy-page__breadcrumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Confidentialité</span>
          </nav>

          <header className="privacy-page__hero">
            <p className="privacy-page__label">Protection des données</p>
            <h1 className="privacy-page__title">Politique de confidentialité</h1>
            <p className="privacy-page__intro">
              Cette page explique comment les données personnelles peuvent être
              collectées, utilisées, protégées et conservées dans le cadre de
              l’utilisation du site.
            </p>
          </header>
        </div>
      </section>

      <section className="privacy-page__main">
        <div className="privacy-page__container privacy-page__container--narrow">
          <article className="privacy-page__content">
            <section className="privacy-page__section">
              <h2>1. Objet</h2>
              <p>
                La présente politique de confidentialité a pour objet d’informer les
                utilisateurs du site sur les modalités de collecte, de traitement et
                de protection de leurs données personnelles.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>2. Responsable du traitement</h2>
              <p>
                Les données personnelles collectées sur le site sont traitées par
                <strong> SOGEDAG</strong>.
              </p>
              <p>
                <strong>Raison sociale :</strong> SOGEDAG
                <br />
                <strong>Adresse :</strong> À compléter
                <br />
                <strong>Email de contact :</strong> À compléter
                <br />
                <strong>Téléphone :</strong> À compléter
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>3. Données collectées</h2>
              <p>
                Selon l’utilisation du site, les données suivantes peuvent être
                collectées :
              </p>
              <p>
                identité (nom, prénom), coordonnées (email, téléphone), informations
                transmises via les formulaires de contact ou de demande de devis,
                données de navigation, et toute autre information volontairement
                communiquée par l’utilisateur.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>4. Finalités du traitement</h2>
              <p>Les données collectées peuvent être utilisées pour :</p>
              <p>
                répondre aux demandes envoyées via le site, traiter les prises de
                contact, établir des devis, améliorer l’expérience utilisateur,
                analyser l’audience du site, assurer le bon fonctionnement technique
                du site et respecter les obligations légales applicables.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>5. Base légale</h2>
              <p>
                Les traitements de données reposent, selon les cas, sur le
                consentement de l’utilisateur, l’exécution de mesures précontractuelles,
                l’intérêt légitime de l’éditeur ou le respect d’obligations légales.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>6. Destinataires des données</h2>
              <p>
                Les données collectées sont destinées aux services internes de
                SOGEDAG et, si nécessaire, à certains prestataires techniques
                intervenant dans le fonctionnement du site, dans la stricte limite de
                leurs missions.
              </p>
              <p>
                Les données ne sont pas vendues à des tiers et ne sont communiquées
                qu’en cas de nécessité opérationnelle, contractuelle ou légale.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>7. Durée de conservation</h2>
              <p>
                Les données personnelles sont conservées pendant une durée n’excédant
                pas celle nécessaire aux finalités pour lesquelles elles sont
                collectées, sous réserve des obligations légales applicables.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>8. Sécurité</h2>
              <p>
                SOGEDAG met en œuvre des mesures techniques et organisationnelles
                appropriées afin de protéger les données personnelles contre la perte,
                l’altération, l’accès non autorisé, la divulgation ou toute utilisation
                abusive.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>9. Droits des utilisateurs</h2>
              <p>
                Conformément à la réglementation applicable, chaque utilisateur peut
                disposer d’un droit d’accès, de rectification, de suppression, de
                limitation, d’opposition et, le cas échéant, de portabilité de ses
                données personnelles.
              </p>
              <p>
                L’utilisateur peut également retirer son consentement lorsque le
                traitement repose sur celui-ci.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>10. Exercice des droits</h2>
              <p>
                Pour exercer ses droits ou poser une question relative à la protection
                des données, l’utilisateur peut contacter SOGEDAG via la page{' '}
                <Link to="/contact">Contact</Link> ou à l’adresse dédiée indiquée
                par l’éditeur.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>11. Cookies</h2>
              <p>
                Le site peut utiliser des cookies ou technologies similaires pour
                améliorer son fonctionnement, mesurer son audience et proposer une
                navigation plus fluide.
              </p>
              <p>
                L’utilisateur peut configurer son navigateur afin de gérer, limiter ou
                refuser les cookies.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>12. Mise à jour de la politique</h2>
              <p>
                La présente politique de confidentialité peut être modifiée à tout
                moment afin de tenir compte d’évolutions légales, techniques ou
                organisationnelles. La version publiée sur cette page est celle
                applicable au moment de la consultation.
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}