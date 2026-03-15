import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './MentionsLegales.css';
import { useTranslation } from 'react-i18next';

export default function MentionsLegales() {
  const pageRef = useRef(null);
  const { t } = useTranslation();

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
          <nav className="legal-page__breadcrumbs" aria-label={t('legal.breadcrumb')}>
            <Link to="/">{t('legal.home')}</Link>
            <span>/</span>
            <span>{t('legal.page')}</span>
          </nav>

          <header className="legal-page__hero">
            <p className="legal-page__label">{t('legal.hero.label')}</p>
            <h1 className="legal-page__title">{t('legal.hero.title')}</h1>
            <p className="legal-page__intro">{t('legal.hero.intro')}</p>
          </header>
        </div>
      </section>

      <section className="legal-page__main">
        <div className="legal-page__container legal-page__container--narrow">
          <article className="legal-page__content">
            <section className="legal-page__section">
              <h2>{t('legal.sections.one.title')}</h2>
              <p>
                {t('legal.sections.one.text1')} <strong>SOGEDAG</strong>.
              </p>
              <p>
                <strong>{t('legal.sections.one.companyLabel')}</strong> {t('legal.sections.one.companyValue')}
                <br />
                <strong>{t('legal.sections.one.legalFormLabel')}</strong> {t('legal.sections.one.legalFormValue')}
                <br />
                <strong>{t('legal.sections.one.capitalLabel')}</strong> {t('legal.sections.one.capitalValue')}
                <br />
                <strong>{t('legal.sections.one.headOfficeLabel')}</strong> {t('legal.sections.one.headOfficeValue')}
                <br />
                <strong>{t('legal.sections.one.registrationLabel')}</strong> {t('legal.sections.one.registrationValue')}
                <br />
                <strong>{t('legal.sections.one.taxIdLabel')}</strong> {t('legal.sections.one.taxIdValue')}
                <br />
                <strong>{t('legal.sections.one.emailLabel')}</strong> {t('legal.sections.one.emailValue')}
                <br />
                <strong>{t('legal.sections.one.phoneLabel')}</strong> {t('legal.sections.one.phoneValue')}
              </p>
              <p>
                <strong>{t('legal.sections.one.publicationDirectorLabel')}</strong> {t('legal.sections.one.publicationDirectorValue')}
              </p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.two.title')}</h2>
              <p>
                {t('legal.sections.two.text1')} <strong>{t('legal.sections.two.hostStrong')}</strong>.
              </p>
              <p>
                <strong>{t('legal.sections.two.hostNameLabel')}</strong> {t('legal.sections.two.hostNameValue')}
                <br />
                <strong>{t('legal.sections.two.addressLabel')}</strong> {t('legal.sections.two.addressValue')}
                <br />
                <strong>{t('legal.sections.two.phoneLabel')}</strong> {t('legal.sections.two.phoneValue')}
                <br />
                <strong>{t('legal.sections.two.websiteLabel')}</strong> {t('legal.sections.two.websiteValue')}
              </p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.three.title')}</h2>
              <p>{t('legal.sections.three.text1')}</p>
              <p>{t('legal.sections.three.text2')}</p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.four.title')}</h2>
              <p>{t('legal.sections.four.text1')}</p>
              <p>{t('legal.sections.four.text2')}</p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.five.title')}</h2>
              <p>{t('legal.sections.five.text')}</p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.six.title')}</h2>
              <p>{t('legal.sections.six.text1')}</p>
              <p>{t('legal.sections.six.text2')}</p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.seven.title')}</h2>
              <p>{t('legal.sections.seven.text1')}</p>
              <p>{t('legal.sections.seven.text2')}</p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.eight.title')}</h2>
              <p>{t('legal.sections.eight.text1')}</p>
              <p>{t('legal.sections.eight.text2')}</p>
            </section>

            <section className="legal-page__section">
              <h2>{t('legal.sections.nine.title')}</h2>
              <p>
                {t('legal.sections.nine.text1')} <Link to="/contact">{t('legal.contact')}</Link>.
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}