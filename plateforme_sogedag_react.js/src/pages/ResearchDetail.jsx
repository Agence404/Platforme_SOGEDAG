import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './ResearchDetail.css';
import { useTranslation } from 'react-i18next';

export default function ResearchDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const { t } = useTranslation();

  const researchPosts = {
    'effet-biostimulation-racinaire-mais': {
      slug: 'effet-biostimulation-racinaire-mais',
      title: t('researchDetail.posts.rootBioMaize.title'),
      author: t('researchDetail.posts.rootBioMaize.author'),
      publishedAt: t('researchDetail.posts.rootBioMaize.date'),
      image: '/image_cata1.jpg',
      pdf: '/pdfs/recherche-biostimulation-mais.pdf',
      content: t('researchDetail.posts.rootBioMaize.content'),
    },

    'nutrition-foliaire-et-equilibre-vegetatif': {
      slug: 'nutrition-foliaire-et-equilibre-vegetatif',
      title: t('researchDetail.posts.foliarNutrition.title'),
      author: t('researchDetail.posts.foliarNutrition.author'),
      publishedAt: t('researchDetail.posts.foliarNutrition.date'),
      image: '/image_cata2.jpg',
      pdf: '/pdfs/recherche-nutrition-foliaire.pdf',
      content: t('researchDetail.posts.foliarNutrition.content'),
    },
  };

  const post = useMemo(() => researchPosts[slug], [slug, t]);

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.research-publication__breadcrumbs',
          '.research-publication__hero',
          '.research-publication__cover',
          '.research-publication__doc',
          '.research-publication__content',
          '.research-publication__cta',
        ],
        { opacity: 0, y: 28 }
      );

      gsap.to('.research-publication__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.research-publication__hero', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.research-publication__cover', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.16,
        ease: 'power4.out',
      });

      gsap.to(
        [
          '.research-publication__doc',
          '.research-publication__content',
          '.research-publication__cta',
        ],
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.22,
          ease: 'power4.out',
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <main className="research-publication">
        <section className="research-publication__notfound">
          <div className="research-publication__container">
            <p className="research-publication__label">{t('researchDetail.notFound.label')}</p>
            <h1 className="research-publication__section-title">
              {t('researchDetail.notFound.title')}
            </h1>
            <p className="research-publication__section-text">
              {t('researchDetail.notFound.text')}
            </p>
            <Link
              to="/recherche"
              className="research-publication__btn research-publication__btn--primary"
            >
              {t('researchDetail.notFound.back')}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main ref={pageRef} className="research-publication">
      <section className="research-publication__top">
        <div className="research-publication__bg" aria-hidden="true"></div>

        <div className="research-publication__container">
          <nav
            className="research-publication__breadcrumbs"
            aria-label={t('researchDetail.breadcrumb')}
          >
            <Link to="/">{t('researchDetail.home')}</Link>
            <span>/</span>
            <Link to="/recherche">{t('researchDetail.research')}</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <header className="research-publication__hero">
            <p className="research-publication__label">{t('researchDetail.label')}</p>
            <h1 className="research-publication__title">{post.title}</h1>

            <div className="research-publication__meta">
              <span>{t('researchDetail.by')} {post.author}</span>
              <span>•</span>
              <span>{post.publishedAt}</span>
            </div>
          </header>

          <div className="research-publication__cover">
            <img src={post.image} alt={post.title} className="research-publication__cover-image" />
          </div>
        </div>
      </section>

      <section className="research-publication__main">
        <div className="research-publication__container research-publication__narrow">
          <div className="research-publication__doc">
            <div className="research-publication__doc-head">
              <div>
                <p className="research-publication__section-label">
                  {t('researchDetail.documentLabel')}
                </p>
                <h2 className="research-publication__section-title">
                  {t('researchDetail.pdfTitle')}
                </h2>
              </div>

              <a
                href={post.pdf}
                target="_blank"
                rel="noreferrer"
                className="research-publication__btn research-publication__btn--primary"
              >
                {t('researchDetail.openPdf')}
              </a>
            </div>

            <div className="research-publication__pdf-wrap">
              <iframe
                src={post.pdf}
                title={`${t('researchDetail.pdfIframeTitle')} ${post.title}`}
                className="research-publication__pdf"
              />
            </div>
          </div>

          <article className="research-publication__content">
            <p className="research-publication__section-label">{t('researchDetail.contentLabel')}</p>
            <h2 className="research-publication__section-title">
              {t('researchDetail.contentTitle')}
            </h2>

            <div
              className="research-publication__prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <section className="research-publication__cta">
            <div className="research-publication__cta-card">
              <div>
                <p className="research-publication__section-label">{t('researchDetail.contactLabel')}</p>
                <h2 className="research-publication__section-title">
                  {t('researchDetail.contactTitle')}
                </h2>
                <p className="research-publication__section-text">
                  {t('researchDetail.contactText')}
                </p>
              </div>

              <a
                href="/contact"
                className="research-publication__btn research-publication__btn--primary"
              >
                {t('researchDetail.contactButton')}
              </a>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}