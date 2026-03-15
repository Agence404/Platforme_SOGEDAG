import React, { useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './BlogDetail.css';
import { useTranslation } from 'react-i18next';

// Exemple local en attendant la vraie base de données / API
const blogPosts = {
  'comprendre-le-terrain': {
    slug: 'comprendre-le-terrain',
    titleKey: 'blogDetail.posts.comprendreTerrain.title',
    authorKey: 'blogDetail.posts.comprendreTerrain.author',
    publishedAt: '2026-03-12',
    image: 'image_cata1.jpg',
    contentKey: 'blogDetail.posts.comprendreTerrain.content',
  },
};

function formatDate(dateString, language) {
  if (!dateString) return '';

  const locale = language && language.startsWith('en') ? 'en-US' : 'fr-FR';

  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
}

function getReadingTime(html = '') {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.ceil(words / 220));
}

export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const { t, i18n } = useTranslation();

  const post = blogPosts[slug] || blogPosts['comprendre-le-terrain'];

  const translatedContent = t(post.contentKey);
  const translatedTitle = t(post.titleKey);
  const translatedAuthor = t(post.authorKey);

  const readingTime = useMemo(() => getReadingTime(translatedContent), [translatedContent]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.blog-detail-v2__crumbs',
          '.blog-detail-v2__header',
          '.blog-detail-v2__cover',
          '.blog-detail-v2__layout',
        ],
        { opacity: 0, y: 30 }
      );

      gsap.to('.blog-detail-v2__crumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.blog-detail-v2__header', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.blog-detail-v2__cover', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.16,
        ease: 'power4.out',
      });

      gsap.to('.blog-detail-v2__layout', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.24,
        ease: 'power4.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  return (
    <main ref={pageRef} className="blog-detail-v2">
      <section className="blog-detail-v2__hero">
        <div className="blog-detail-v2__container">
          <nav className="blog-detail-v2__crumbs" aria-label={t('blogDetail.breadcrumb')}>
            <Link to="/">{t('blogDetail.home')}</Link>
            <span>/</span>
            <Link to="/blog">{t('blogDetail.blog')}</Link>
            <span>/</span>
            <span>{translatedTitle}</span>
          </nav>

          <header className="blog-detail-v2__header">
            <span className="blog-detail-v2__label">{t('blogDetail.label')}</span>
            <h1 className="blog-detail-v2__title">{translatedTitle}</h1>

            <div className="blog-detail-v2__meta">
              <span>{translatedAuthor}</span>
              <span className="blog-detail-v2__dot"></span>
              <span>{formatDate(post.publishedAt, i18n.language)}</span>
              <span className="blog-detail-v2__dot"></span>
              <span>{t('blogDetail.readingTimeFull', { count: readingTime })}</span>
            </div>
          </header>
        </div>
      </section>

      <section className="blog-detail-v2__body">
        <div className="blog-detail-v2__container">
          <div className="blog-detail-v2__cover">
            <img
              src={post.image}
              alt={translatedTitle}
              className="blog-detail-v2__cover-img"
            />
          </div>

          <div className="blog-detail-v2__layout">
            <aside className="blog-detail-v2__sidebar">
              <div className="blog-detail-v2__card">
                <p className="blog-detail-v2__card-label">{t('blogDetail.sidebar.author')}</p>
                <p className="blog-detail-v2__card-value">{translatedAuthor}</p>
              </div>

              <div className="blog-detail-v2__card">
                <p className="blog-detail-v2__card-label">{t('blogDetail.sidebar.publication')}</p>
                <p className="blog-detail-v2__card-value">
                  {formatDate(post.publishedAt, i18n.language)}
                </p>
              </div>

              <div className="blog-detail-v2__card">
                <p className="blog-detail-v2__card-label">{t('blogDetail.sidebar.reading')}</p>
                <p className="blog-detail-v2__card-value">
                  {t('blogDetail.readingTimeShort', { count: readingTime })}
                </p>
              </div>

              <Link to="/blog" className="blog-detail-v2__back">
                {t('blogDetail.back')}
              </Link>
            </aside>

            <article className="blog-detail-v2__article">
              <div
                className="blog-detail-v2__content"
                dangerouslySetInnerHTML={{ __html: translatedContent }}
              />
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}