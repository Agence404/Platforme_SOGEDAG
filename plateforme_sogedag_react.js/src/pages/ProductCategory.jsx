import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './ProductCategory.css';
import { useTranslation } from 'react-i18next';

export default function ProductCategory() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const { t } = useTranslation();

  const productCategories = {
    biostimulants: {
      slug: 'biostimulants',
      title: t('productCategory.categories.biostimulants.title'),
      label: t('productCategory.categories.biostimulants.label'),
      description: t('productCategory.categories.biostimulants.description'),
      image: '/image_cata1.jpg',
      products: [
        {
          id: 'BIO-01',
          slug: 'stim-root',
          name: 'Stim Root',
          shortDescription: t('productCategory.categories.biostimulants.products.stimRoot'),
          image: '/image_cata1.jpg',
        },
        {
          id: 'BIO-02',
          slug: 'green-pulse',
          name: 'Green Pulse',
          shortDescription: t('productCategory.categories.biostimulants.products.greenPulse'),
          image: '/image_cata3.jpg',
        },
        {
          id: 'BIO-03',
          slug: 'active-flow',
          name: 'Active Flow',
          shortDescription: t('productCategory.categories.biostimulants.products.activeFlow'),
          image: '/image_cata5.jpg',
        },
      ],
    },

    'engrais-speciaux': {
      slug: 'engrais-speciaux',
      title: t('productCategory.categories.special.title'),
      label: t('productCategory.categories.special.label'),
      description: t('productCategory.categories.special.description'),
      image: '/image-2.jpg',
      products: [
        {
          id: 'ESP-01',
          slug: 'calbor-tech',
          name: 'CalBor Tech',
          shortDescription: t('productCategory.categories.special.products.calborTech'),
          image: '/image-2.jpg',
        },
        {
          id: 'ESP-02',
          slug: 'mag-active',
          name: 'Mag Active',
          shortDescription: t('productCategory.categories.special.products.magActive'),
          image: '/image_cata2.jpg',
        },
        {
          id: 'ESP-03',
          slug: 'trace-mix-pro',
          name: 'Trace Mix Pro',
          shortDescription: t('productCategory.categories.special.products.traceMixPro'),
          image: '/image_cata4.jpg',
        },
      ],
    },

    'mineral-tech': {
      slug: 'mineral-tech',
      title: t('productCategory.categories.tech.title'),
      label: t('productCategory.categories.tech.label'),
      description: t('productCategory.categories.tech.description'),
      image: '/image_cata3.jpg',
      products: [
        {
          id: 'MT-01',
          slug: 'mineral-one',
          name: 'Mineral One',
          shortDescription: t('productCategory.categories.tech.products.mineralOne'),
          image: '/image_cata3.jpg',
        },
        {
          id: 'MT-02',
          slug: 'tech-assimil',
          name: 'Tech Assimil',
          shortDescription: t('productCategory.categories.tech.products.techAssimil'),
          image: '/image_cata4.jpg',
        },
      ],
    },

    'engrais-organiques': {
      slug: 'engrais-organiques',
      title: t('productCategory.categories.organic.title'),
      label: t('productCategory.categories.organic.label'),
      description: t('productCategory.categories.organic.description'),
      image: '/image_cata4.jpg',
      products: [
        {
          id: 'ORG-01',
          slug: 'organic-base',
          name: 'Organic Base',
          shortDescription: t('productCategory.categories.organic.products.organicBase'),
          image: '/image_cata4.jpg',
        },
        {
          id: 'ORG-02',
          slug: 'humic-plus',
          name: 'Humic Plus',
          shortDescription: t('productCategory.categories.organic.products.humicPlus'),
          image: '/image_cata6.jpg',
        },
      ],
    },

    npk: {
      slug: 'npk',
      title: t('productCategory.categories.npk.title'),
      label: t('productCategory.categories.npk.label'),
      description: t('productCategory.categories.npk.description'),
      image: '/image_cata5.jpg',
      products: [
        {
          id: 'NPK-01',
          slug: 'soluble-max',
          name: 'Soluble Max',
          shortDescription: t('productCategory.categories.npk.products.solubleMax'),
          image: '/image_cata5.jpg',
        },
        {
          id: 'NPK-02',
          slug: 'pasta-grow',
          name: 'Pasta Grow',
          shortDescription: t('productCategory.categories.npk.products.pastaGrow'),
          image: '/image_cata1.jpg',
        },
        {
          id: 'NPK-03',
          slug: 'balance-npk',
          name: 'Balance NPK',
          shortDescription: t('productCategory.categories.npk.products.balanceNpk'),
          image: '/image_cata2.jpg',
        },
      ],
    },

    'engrais-mineraux': {
      slug: 'engrais-mineraux',
      title: t('productCategory.categories.mineral.title'),
      label: t('productCategory.categories.mineral.label'),
      description: t('productCategory.categories.mineral.description'),
      image: '/image_cata6.jpg',
      products: [
        {
          id: 'MIN-01',
          slug: 'mineral-crop',
          name: 'Mineral Crop',
          shortDescription: t('productCategory.categories.mineral.products.mineralCrop'),
          image: '/image_cata6.jpg',
        },
        {
          id: 'MIN-02',
          slug: 'yield-support',
          name: 'Yield Support',
          shortDescription: t('productCategory.categories.mineral.products.yieldSupport'),
          image: '/image_cata2.jpg',
        },
      ],
    },
  };

  const category = useMemo(() => {
    return productCategories[slug];
  }, [slug, t]);

  useEffect(() => {
    if (!category) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.product-category-v3__breadcrumbs',
          '.product-category-v3__hero-copy',
          '.product-category-v3__hero-media',
          '.product-category-v3__products-head',
        ],
        { opacity: 0, y: 30 }
      );

      gsap.set('.product-item-card', {
        opacity: 0,
        y: 36,
      });

      gsap.to('.product-category-v3__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.product-category-v3__hero-copy', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.product-category-v3__hero-media', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power4.out',
      });

      gsap.to('.product-category-v3__products-head', {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.22,
        ease: 'power4.out',
      });

      gsap.to('.product-item-card', {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        delay: 0.28,
        ease: 'power3.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, [category]);

  if (!category) {
    return (
      <main className="product-category-v3">
        <section className="product-category-v3__hero">
          <div className="product-category-v3__bg" aria-hidden="true"></div>

          <div className="product-category-v3__container">
            <div style={{ maxWidth: '720px' }}>
              <p className="product-category-v3__label">{t('productCategory.notFound.label')}</p>
              <h1 className="product-category-v3__title">{t('productCategory.notFound.title')}</h1>
              <p className="product-category-v3__description">
                {t('productCategory.notFound.text')}
              </p>

              <div className="product-category-v3__hero-actions">
                <Link to="/catalogue" className="product-category-v3__back-btn">
                  {t('productCategory.backToCatalogue')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main ref={pageRef} className="product-category-v3">
      <section className="product-category-v3__hero">
        <div className="product-category-v3__bg" aria-hidden="true"></div>

        <div className="product-category-v3__container">
          <nav className="product-category-v3__breadcrumbs" aria-label={t('productCategory.breadcrumb')}>
            <Link to="/">{t('productCategory.home')}</Link>
            <span>/</span>
            <Link to="/catalogue">{t('productCategory.catalogue')}</Link>
            <span>/</span>
            <span>{category.title}</span>
          </nav>

          <div className="product-category-v3__hero-grid">
            <div className="product-category-v3__hero-copy">
              <p className="product-category-v3__label">{category.label}</p>
              <h1 className="product-category-v3__title">{category.title}</h1>
              <p className="product-category-v3__description">
                {category.description}
              </p>

              <div className="product-category-v3__hero-actions">
                <Link to="/catalogue" className="product-category-v3__back-btn">
                  {t('productCategory.backToCatalogue')}
                </Link>
              </div>
            </div>

            <div className="product-category-v3__hero-media">
              <img src={category.image} alt={category.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="product-category-v3__products">
        <div className="product-category-v3__container">
          <div className="product-category-v3__products-head">
            <p className="product-category-v3__section-label">{t('productCategory.productsAvailable')}</p>
            <h2 className="product-category-v3__section-title">
              {t('productCategory.chooseProduct')}
            </h2>
            <p className="product-category-v3__section-text">
              {t('productCategory.productsText')}
            </p>
          </div>

          <div className="product-category-v3__grid">
            {category.products.map((product) => (
              <Link
                key={product.id}
                to={`/produits/${category.slug}/${product.slug}`}
                className="product-item-card"
                aria-label={t('productCategory.viewProductAria', { name: product.name })}
              >
                <div className="product-item-card__media">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-item-card__image"
                  />
                  <div className="product-item-card__overlay"></div>
                </div>

                <div className="product-item-card__body">
                  <div className="product-item-card__top">
                    <span className="product-item-card__id">{product.id}</span>
                    <span className="product-item-card__tag">{t('productCategory.viewProduct')}</span>
                  </div>

                  <h3 className="product-item-card__title">{product.name}</h3>
                  <p className="product-item-card__text">{product.shortDescription}</p>

                  <div className="product-item-card__footer">
                    <span className="product-item-card__link-text">
                      {t('productCategory.discoverSheet')}
                    </span>
                    <span className="product-item-card__arrow">→</span>
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