import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './ProductDetail.css';

const productsData = {
  biostimulants: [
    {
      slug: 'stim-root',
      name: 'Stim Root',
      image: '/image_cata1.jpg',
      description:
        'Stim Root est une solution pensée pour accompagner le développement racinaire, améliorer la reprise végétative et soutenir la plante dans les phases de croissance sensibles. Sa formulation permet une meilleure dynamique d’installation de la culture et une réponse plus régulière face aux contraintes du terrain.',
      deficiency: 'Carence racinaire et faiblesse de reprise',
      pdf: '/pdfs/stim-root-fiche-technique.pdf',
      blogs: [
        {
          slug: 'comprendre-le-terrain',
          title: 'Comprendre le terrain avant toute décision technique',
          image: '/image_cata1.jpg',
          date: '12 Mars 2026',
        },
        {
          slug: 'stimuler-sans-desequilibrer',
          title: 'Stimuler sans déséquilibrer la plante',
          image: '/image_cata3.jpg',
          date: '03 Mars 2026',
        },
      ],
    },
    {
      slug: 'green-pulse',
      name: 'Green Pulse',
      image: '/image_cata3.jpg',
      description:
        'Green Pulse est un biostimulant foliaire conçu pour soutenir la vigueur générale de la plante, encourager une meilleure activité physiologique et renforcer l’expression végétative dans les moments clés du cycle.',
      deficiency: 'Faible vigueur végétative',
      pdf: '/pdfs/green-pulse-fiche-technique.pdf',
      blogs: [
        {
          slug: 'nutrition-equilibre-cultures',
          title: 'Nutrition, équilibre et régularité des cultures',
          image: '/image_cata2.jpg',
          date: '08 Mars 2026',
        },
      ],
    },
  ],

  npk: [
    {
      slug: 'soluble-max',
      name: 'Soluble Max',
      image: '/image_cata5.jpg',
      description:
        'Soluble Max est une formulation NPK hydrosoluble conçue pour une assimilation rapide et une nutrition maîtrisée. Elle accompagne les cultures dans les phases de forte demande et s’intègre efficacement dans les systèmes modernes de fertilisation.',
      deficiency: 'Carence nutritionnelle NPK',
      pdf: '/pdfs/soluble-max-fiche-technique.pdf',
      blogs: [
        {
          slug: 'performance-temps-long',
          title: 'Construire la performance dans le temps long',
          image: '/image_cata6.jpg',
          date: '09 Février 2026',
        },
      ],
    },
  ],
};

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const pageRef = useRef(null);

  const product = useMemo(() => {
    const categoryProducts = productsData[categorySlug] || [];
    return categoryProducts.find((item) => item.slug === productSlug);
  }, [categorySlug, productSlug]);

  useEffect(() => {
    if (!product) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.product-detail__breadcrumbs',
          '.product-detail__hero-copy',
          '.product-detail__hero-media',
          '.product-detail__sheet',
          '.product-detail__description',
          '.product-detail__blogs-head',
        ],
        { opacity: 0, y: 30 }
      );

      gsap.set('.product-blog-card', {
        opacity: 0,
        y: 30,
      });

      gsap.to('.product-detail__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.product-detail__hero-copy', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.product-detail__hero-media', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power4.out',
      });

      gsap.to(
        [
          '.product-detail__sheet',
          '.product-detail__description',
          '.product-detail__blogs-head',
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

      gsap.to('.product-blog-card', {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        delay: 0.32,
        ease: 'power3.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, [product]);

  if (!product) {
    return (
      <main className="product-detail">
        <section className="product-detail__notfound">
          <div className="product-detail__container">
            <p className="product-detail__section-label">Produit</p>
            <h1 className="product-detail__section-title">Produit introuvable</h1>
            <p className="product-detail__section-text">
              Le produit demandé n’existe pas ou son lien est incorrect.
            </p>
            <Link to="/catalogue" className="product-detail__quote-btn">
              Retour au catalogue
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main ref={pageRef} className="product-detail">
      <section className="product-detail__hero">
        <div className="product-detail__bg" aria-hidden="true"></div>

        <div className="product-detail__container">
          <nav className="product-detail__breadcrumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue">Catalogue</Link>
            <span>/</span>
            <Link to={`/catalogue/${categorySlug}`}>{categorySlug}</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="product-detail__hero-grid">
            <div className="product-detail__hero-copy">
              <p className="product-detail__label">Fiche produit</p>
              <h1 className="product-detail__title">{product.name}</h1>

              <div className="product-detail__meta">
                <div className="product-detail__meta-card">
                  <span className="product-detail__meta-label">Carence ciblée</span>
                  <strong className="product-detail__meta-value">
                    {product.deficiency}
                  </strong>
                </div>
              </div>

              <div className="product-detail__hero-actions">
                <a href="#contact" className="product-detail__quote-btn">
                  Demander un devis
                </a>
              </div>
            </div>

            <div className="product-detail__hero-media">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail__content">
        <div className="product-detail__container">
          <div className="product-detail__sheet">
            <div className="product-detail__sheet-head">
              <div>
                <p className="product-detail__section-label">Fiche technique</p>
                <h2 className="product-detail__section-title">
                  Documentation technique du produit
                </h2>
              </div>

              <a
                href={product.pdf}
                target="_blank"
                rel="noreferrer"
                className="product-detail__sheet-btn"
              >
                Ouvrir le PDF
              </a>
            </div>

            <div className="product-detail__pdf-wrap">
              <iframe
                src={product.pdf}
                title={`Fiche technique ${product.name}`}
                className="product-detail__pdf"
              />
            </div>
          </div>

          <div className="product-detail__description">
            <p className="product-detail__section-label">Description</p>
            <h2 className="product-detail__section-title">
              Présentation du produit
            </h2>
            <p className="product-detail__section-text">{product.description}</p>
          </div>

          <div className="product-detail__blogs-head">
            <p className="product-detail__section-label">Articles liés</p>
            <h2 className="product-detail__section-title">
              Articles à consulter autour de ce produit
            </h2>
            <p className="product-detail__section-text">
              Retrouvez des contenus utiles pour mieux comprendre le contexte
              technique, les besoins des cultures et les logiques d’utilisation.
            </p>
          </div>

          <div className="product-detail__blogs-grid">
            {product.blogs.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}`}
                className="product-blog-card"
              >
                <div className="product-blog-card__media">
                  <img src={blog.image} alt={blog.title} className="product-blog-card__image" />
                </div>

                <div className="product-blog-card__body">
                  <span className="product-blog-card__date">{blog.date}</span>
                  <h3 className="product-blog-card__title">{blog.title}</h3>
                  <div className="product-blog-card__footer">
                    <span>Lire l’article</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}