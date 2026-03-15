import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Blog.css';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const pageRef = useRef(null);
  const { t } = useTranslation();

  const featuredPost = {
    id: '00',
    slug: 'comprendre-le-terrain',
    title: t('blog.featuredPost.title'),
    content: t('blog.featuredPost.content'),
    author: t('blog.featuredPost.author'),
    date: t('blog.featuredPost.date'),
    image: 'image_cata1.jpg',
    product: t('blog.featuredPost.product'),
  };

  const posts = [
    {
      id: '01',
      slug: 'nutrition-equilibre-cultures',
      title: t('blog.posts.one.title'),
      content: t('blog.posts.one.content'),
      author: t('blog.posts.one.author'),
      date: t('blog.posts.one.date'),
      image: 'image_cata2.jpg',
      product: t('blog.posts.one.product'),
    },
    {
      id: '02',
      slug: 'stimuler-sans-desequilibrer',
      title: t('blog.posts.two.title'),
      content: t('blog.posts.two.content'),
      author: t('blog.posts.two.author'),
      date: t('blog.posts.two.date'),
      image: 'image_cata3.jpg',
      product: t('blog.posts.two.product'),
    },
    {
      id: '03',
      slug: 'innovation-realite-champ',
      title: t('blog.posts.three.title'),
      content: t('blog.posts.three.content'),
      author: t('blog.posts.three.author'),
      date: t('blog.posts.three.date'),
      image: 'image_cata4.jpg',
      product: t('blog.posts.three.product'),
    },
    {
      id: '04',
      slug: 'accompagnement-levier-decision',
      title: t('blog.posts.four.title'),
      content: t('blog.posts.four.content'),
      author: t('blog.posts.four.author'),
      date: t('blog.posts.four.date'),
      image: 'image_cata5.jpg',
      product: t('blog.posts.four.product'),
    },
    {
      id: '05',
      slug: 'performance-temps-long',
      title: t('blog.posts.five.title'),
      content: t('blog.posts.five.content'),
      author: t('blog.posts.five.author'),
      date: t('blog.posts.five.date'),
      image: 'image_cata6.jpg',
      product: t('blog.posts.five.product'),
    },
    {
      id: '06',
      slug: 'role-formulation-coherence-agronomique',
      title: t('blog.posts.six.title'),
      content: t('blog.posts.six.content'),
      author: t('blog.posts.six.author'),
      date: t('blog.posts.six.date'),
      image: 'image 2.jpg',
      product: t('blog.posts.six.product'),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.blog-plus-hero__eyebrow',
          '.blog-plus-hero__title',
          '.blog-plus-hero__text',
          '.blog-plus-featured__eyebrow',
          '.blog-plus-featured__title',
          '.blog-plus-featured__subtitle',
          '.blog-plus-editorial__eyebrow',
          '.blog-plus-editorial__title',
          '.blog-plus-editorial__subtitle',
        ],
        { opacity: 0, y: 40 }
      );

      gsap.set('.blog-plus-featured__card', {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set('.blog-plus-post', {
        opacity: 0,
        y: 60,
      });

      gsap.set('.blog-plus-editorial__panel', {
        opacity: 0,
        y: 50,
      });

      gsap
        .timeline()
        .to('.blog-plus-hero__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          '.blog-plus-hero__title',
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.blog-plus-hero__text',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.5'
        );

      gsap.to('.blog-plus-hero__orb--one', {
        x: 44,
        y: 24,
        scrollTrigger: {
          trigger: '.blog-plus-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.blog-plus-hero__orb--two', {
        x: -36,
        y: -18,
        scrollTrigger: {
          trigger: '.blog-plus-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.blog-plus-featured',
            start: 'top 84%',
          },
        })
        .to('.blog-plus-featured__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.blog-plus-featured__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.blog-plus-featured__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          '.blog-plus-featured__card',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=0.35'
        );

      gsap.to('.blog-plus-post', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-plus-grid',
          start: 'top 84%',
        },
      });

      document.querySelectorAll('.blog-plus-post').forEach((post) => {
        const image = post.querySelector('.blog-plus-post__image');
        if (!image) return;

        gsap.to(image, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: post,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.blog-plus-editorial',
            start: 'top 84%',
          },
        })
        .to('.blog-plus-editorial__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
        .to(
          '.blog-plus-editorial__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.2'
        )
        .to(
          '.blog-plus-editorial__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
          },
          '-=0.45'
        );

      gsap.to('.blog-plus-editorial__panel', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-plus-editorial__grid',
          start: 'top 84%',
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="blog-plus-page">
      <section className="blog-plus-hero">
        <div className="blog-plus-hero__bg" aria-hidden="true">
          <div className="blog-plus-hero__orb blog-plus-hero__orb--one"></div>
          <div className="blog-plus-hero__orb blog-plus-hero__orb--two"></div>
          <div className="blog-plus-hero__grid"></div>
        </div>

        <div className="blog-plus-hero__inner">
          <p className="blog-plus-hero__eyebrow">{t('blog.hero.eyebrow')}</p>
          <h1 className="blog-plus-hero__title">
            {t('blog.hero.title')}
            <span> {t('blog.hero.titleAccent')}</span>
          </h1>
          <p className="blog-plus-hero__text">{t('blog.hero.text')}</p>
        </div>
      </section>

      <section className="blog-plus-featured">
        <div className="blog-plus-featured__head">
          <p className="blog-plus-featured__eyebrow">{t('blog.featured.eyebrow')}</p>
          <h2 className="blog-plus-featured__title">
            {t('blog.featured.title')}
            <span> {t('blog.featured.titleAccent')}</span>
          </h2>
          <p className="blog-plus-featured__subtitle">{t('blog.featured.subtitle')}</p>
        </div>

        <Link to={`/blog/${featuredPost.slug}`} className="blog-plus-featured__card">
          <div className="blog-plus-featured__media">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="blog-plus-featured__image"
            />
            <div className="blog-plus-featured__overlay"></div>
            <div className="blog-plus-featured__ghost">{t('blog.featured.ghost')}</div>
          </div>

          <div className="blog-plus-featured__content">
            <div className="blog-plus-featured__meta">
              <span>{featuredPost.product}</span>
              <span>•</span>
              <span>{featuredPost.author}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
            </div>

            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.content}</p>
          </div>
        </Link>
      </section>

      <section className="blog-plus-posts">
        <div className="blog-plus-grid">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="blog-plus-post">
              <div className="blog-plus-post__media">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-plus-post__image"
                />
                <div className="blog-plus-post__overlay"></div>
                <div className="blog-plus-post__product">{post.product}</div>
              </div>

              <div className="blog-plus-post__content">
                <div className="blog-plus-post__top">
                  <span className="blog-plus-post__id">{post.id}</span>
                  <span className="blog-plus-post__date">{post.date}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.content}</p>

                <div className="blog-plus-post__bottom">
                  <strong>{post.author}</strong>
                  <span>{post.product}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-plus-editorial">
        <div className="blog-plus-editorial__head">
          <p className="blog-plus-editorial__eyebrow">{t('blog.editorial.eyebrow')}</p>
          <h2 className="blog-plus-editorial__title">
            {t('blog.editorial.title')}
            <span> {t('blog.editorial.titleAccent')}</span>
          </h2>
          <p className="blog-plus-editorial__subtitle">{t('blog.editorial.subtitle')}</p>
        </div>

        <div className="blog-plus-editorial__grid">
          <article className="blog-plus-editorial__panel">
            <strong>{t('blog.editorial.panels.products.title')}</strong>
            <p>{t('blog.editorial.panels.products.text')}</p>
          </article>

          <article className="blog-plus-editorial__panel">
            <strong>{t('blog.editorial.panels.field.title')}</strong>
            <p>{t('blog.editorial.panels.field.text')}</p>
          </article>

          <article className="blog-plus-editorial__panel">
            <strong>{t('blog.editorial.panels.expertise.title')}</strong>
            <p>{t('blog.editorial.panels.expertise.text')}</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}