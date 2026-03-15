import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './Confidentialite.css';
import { useTranslation } from 'react-i18next';

export default function Confidentialite() {
  const pageRef = useRef(null);
  const { t } = useTranslation();

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
          <nav className="privacy-page__breadcrumbs" aria-label={t('privacy.breadcrumb')}>
            <Link to="/">{t('privacy.home')}</Link>
            <span>/</span>
            <span>{t('privacy.page')}</span>
          </nav>

          <header className="privacy-page__hero">
            <p className="privacy-page__label">{t('privacy.hero.label')}</p>
            <h1 className="privacy-page__title">{t('privacy.hero.title')}</h1>
            <p className="privacy-page__intro">{t('privacy.hero.intro')}</p>
          </header>
        </div>
      </section>

      <section className="privacy-page__main">
        <div className="privacy-page__container privacy-page__container--narrow">
          <article className="privacy-page__content">
            <section className="privacy-page__section">
              <h2>{t('privacy.sections.one.title')}</h2>
              <p>{t('privacy.sections.one.text')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.two.title')}</h2>
              <p>
                {t('privacy.sections.two.text1')}
                <strong> SOGEDAG</strong>.
              </p>
              <p>
                <strong>{t('privacy.sections.two.companyLabel')}</strong> {t('privacy.sections.two.companyValue')}
                <br />
                <strong>{t('privacy.sections.two.addressLabel')}</strong> {t('privacy.sections.two.addressValue')}
                <br />
                <strong>{t('privacy.sections.two.emailLabel')}</strong> {t('privacy.sections.two.emailValue')}
                <br />
                <strong>{t('privacy.sections.two.phoneLabel')}</strong> {t('privacy.sections.two.phoneValue')}
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.three.title')}</h2>
              <p>{t('privacy.sections.three.text1')}</p>
              <p>{t('privacy.sections.three.text2')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.four.title')}</h2>
              <p>{t('privacy.sections.four.text1')}</p>
              <p>{t('privacy.sections.four.text2')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.five.title')}</h2>
              <p>{t('privacy.sections.five.text')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.six.title')}</h2>
              <p>{t('privacy.sections.six.text1')}</p>
              <p>{t('privacy.sections.six.text2')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.seven.title')}</h2>
              <p>{t('privacy.sections.seven.text')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.eight.title')}</h2>
              <p>{t('privacy.sections.eight.text')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.nine.title')}</h2>
              <p>{t('privacy.sections.nine.text1')}</p>
              <p>{t('privacy.sections.nine.text2')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.ten.title')}</h2>
              <p>
                {t('privacy.sections.ten.text1')}{' '}
                <Link to="/contact">{t('privacy.contact')}</Link> {t('privacy.sections.ten.text2')}
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.eleven.title')}</h2>
              <p>{t('privacy.sections.eleven.text1')}</p>
              <p>{t('privacy.sections.eleven.text2')}</p>
            </section>

            <section className="privacy-page__section">
              <h2>{t('privacy.sections.twelve.title')}</h2>
              <p>{t('privacy.sections.twelve.text')}</p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}