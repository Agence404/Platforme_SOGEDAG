import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './ProductDetail.css';
import { useTranslation } from 'react-i18next';

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const pageRef = useRef(null);
  const { t } = useTranslation();

  const productCategories = {
    biostimulants: {
      slug: 'biostimulants',
      title: t('productCategory.categories.biostimulants.title'),
      products: [
        {
          id: 'BIO-01',
          slug: 'stim-root',
          name: 'Stim Root',
          image: '/image_cata1.jpg',
          shortDescription: t('productCategory.categories.biostimulants.products.stimRoot'),
          description: t('productDetail.products.stimRoot.description'),
          usage: t('productDetail.products.stimRoot.usage'),
          benefits: [
            t('productDetail.products.stimRoot.benefits.one'),
            t('productDetail.products.stimRoot.benefits.two'),
            t('productDetail.products.stimRoot.benefits.three'),
          ],
        },
        {
          id: 'BIO-02',
          slug: 'green-pulse',
          name: 'Green Pulse',
          image: '/image_cata3.jpg',
          shortDescription: t('productCategory.categories.biostimulants.products.greenPulse'),
          description: t('productDetail.products.greenPulse.description'),
          usage: t('productDetail.products.greenPulse.usage'),
          benefits: [
            t('productDetail.products.greenPulse.benefits.one'),
            t('productDetail.products.greenPulse.benefits.two'),
            t('productDetail.products.greenPulse.benefits.three'),
          ],
        },
        {
          id: 'BIO-03',
          slug: 'active-flow',
          name: 'Active Flow',
          image: '/image_cata5.jpg',
          shortDescription: t('productCategory.categories.biostimulants.products.activeFlow'),
          description: t('productDetail.products.activeFlow.description'),
          usage: t('productDetail.products.activeFlow.usage'),
          benefits: [
            t('productDetail.products.activeFlow.benefits.one'),
            t('productDetail.products.activeFlow.benefits.two'),
            t('productDetail.products.activeFlow.benefits.three'),
          ],
        },
      ],
    },

    'engrais-speciaux': {
      slug: 'engrais-speciaux',
      title: t('productCategory.categories.special.title'),
      products: [
        {
          id: 'ESP-01',
          slug: 'calbor-tech',
          name: 'CalBor Tech',
          image: '/image-2.jpg',
          shortDescription: t('productCategory.categories.special.products.calborTech'),
          description: t('productDetail.products.calborTech.description'),
          usage: t('productDetail.products.calborTech.usage'),
          benefits: [
            t('productDetail.products.calborTech.benefits.one'),
            t('productDetail.products.calborTech.benefits.two'),
            t('productDetail.products.calborTech.benefits.three'),
          ],
        },
        {
          id: 'ESP-02',
          slug: 'mag-active',
          name: 'Mag Active',
          image: '/image_cata2.jpg',
          shortDescription: t('productCategory.categories.special.products.magActive'),
          description: t('productDetail.products.magActive.description'),
          usage: t('productDetail.products.magActive.usage'),
          benefits: [
            t('productDetail.products.magActive.benefits.one'),
            t('productDetail.products.magActive.benefits.two'),
            t('productDetail.products.magActive.benefits.three'),
          ],
        },
        {
          id: 'ESP-03',
          slug: 'trace-mix-pro',
          name: 'Trace Mix Pro',
          image: '/image_cata4.jpg',
          shortDescription: t('productCategory.categories.special.products.traceMixPro'),
          description: t('productDetail.products.traceMixPro.description'),
          usage: t('productDetail.products.traceMixPro.usage'),
          benefits: [
            t('productDetail.products.traceMixPro.benefits.one'),
            t('productDetail.products.traceMixPro.benefits.two'),
            t('productDetail.products.traceMixPro.benefits.three'),
          ],
        },
      ],
    },

    'mineral-tech': {
      slug: 'mineral-tech',
      title: t('productCategory.categories.tech.title'),
      products: [
        {
          id: 'MT-01',
          slug: 'mineral-one',
          name: 'Mineral One',
          image: '/image_cata3.jpg',
          shortDescription: t('productCategory.categories.tech.products.mineralOne'),
          description: t('productDetail.products.mineralOne.description'),
          usage: t('productDetail.products.mineralOne.usage'),
          benefits: [
            t('productDetail.products.mineralOne.benefits.one'),
            t('productDetail.products.mineralOne.benefits.two'),
            t('productDetail.products.mineralOne.benefits.three'),
          ],
        },
        {
          id: 'MT-02',
          slug: 'tech-assimil',
          name: 'Tech Assimil',
          image: '/image_cata4.jpg',
          shortDescription: t('productCategory.categories.tech.products.techAssimil'),
          description: t('productDetail.products.techAssimil.description'),
          usage: t('productDetail.products.techAssimil.usage'),
          benefits: [
            t('productDetail.products.techAssimil.benefits.one'),
            t('productDetail.products.techAssimil.benefits.two'),
            t('productDetail.products.techAssimil.benefits.three'),
          ],
        },
      ],
    },

    'engrais-organiques': {
      slug: 'engrais-organiques',
      title: t('productCategory.categories.organic.title'),
      products: [
        {
          id: 'ORG-01',
          slug: 'organic-base',
          name: 'Organic Base',
          image: '/image_cata4.jpg',
          shortDescription: t('productCategory.categories.organic.products.organicBase'),
          description: t('productDetail.products.organicBase.description'),
          usage: t('productDetail.products.organicBase.usage'),
          benefits: [
            t('productDetail.products.organicBase.benefits.one'),
            t('productDetail.products.organicBase.benefits.two'),
            t('productDetail.products.organicBase.benefits.three'),
          ],
        },
        {
          id: 'ORG-02',
          slug: 'humic-plus',
          name: 'Humic Plus',
          image: '/image_cata6.jpg',
          shortDescription: t('productCategory.categories.organic.products.humicPlus'),
          description: t('productDetail.products.humicPlus.description'),
          usage: t('productDetail.products.humicPlus.usage'),
          benefits: [
            t('productDetail.products.humicPlus.benefits.one'),
            t('productDetail.products.humicPlus.benefits.two'),
            t('productDetail.products.humicPlus.benefits.three'),
          ],
        },
      ],
    },

    npk: {
      slug: 'npk',
      title: t('productCategory.categories.npk.title'),
      products: [
        {
          id: 'NPK-01',
          slug: 'soluble-max',
          name: 'Soluble Max',
          image: '/image_cata5.jpg',
          shortDescription: t('productCategory.categories.npk.products.solubleMax'),
          description: t('productDetail.products.solubleMax.description'),
          usage: t('productDetail.products.solubleMax.usage'),
          benefits: [
            t('productDetail.products.solubleMax.benefits.one'),
            t('productDetail.products.solubleMax.benefits.two'),
            t('productDetail.products.solubleMax.benefits.three'),
          ],
        },
        {
          id: 'NPK-02',
          slug: 'pasta-grow',
          name: 'Pasta Grow',
          image: '/image_cata1.jpg',
          shortDescription: t('productCategory.categories.npk.products.pastaGrow'),
          description: t('productDetail.products.pastaGrow.description'),
          usage: t('productDetail.products.pastaGrow.usage'),
          benefits: [
            t('productDetail.products.pastaGrow.benefits.one'),
            t('productDetail.products.pastaGrow.benefits.two'),
            t('productDetail.products.pastaGrow.benefits.three'),
          ],
        },
        {
          id: 'NPK-03',
          slug: 'balance-npk',
          name: 'Balance NPK',
          image: '/image_cata2.jpg',
          shortDescription: t('productCategory.categories.npk.products.balanceNpk'),
          description: t('productDetail.products.balanceNpk.description'),
          usage: t('productDetail.products.balanceNpk.usage'),
          benefits: [
            t('productDetail.products.balanceNpk.benefits.one'),
            t('productDetail.products.balanceNpk.benefits.two'),
            t('productDetail.products.balanceNpk.benefits.three'),
          ],
        },
      ],
    },

    'engrais-mineraux': {
      slug: 'engrais-mineraux',
      title: t('productCategory.categories.mineral.title'),
      products: [
        {
          id: 'MIN-01',
          slug: 'mineral-crop',
          name: 'Mineral Crop',
          image: '/image_cata6.jpg',
          shortDescription: t('productCategory.categories.mineral.products.mineralCrop'),
          description: t('productDetail.products.mineralCrop.description'),
          usage: t('productDetail.products.mineralCrop.usage'),
          benefits: [
            t('productDetail.products.mineralCrop.benefits.one'),
            t('productDetail.products.mineralCrop.benefits.two'),
            t('productDetail.products.mineralCrop.benefits.three'),
          ],
        },
        {
          id: 'MIN-02',
          slug: 'yield-support',
          name: 'Yield Support',
          image: '/image_cata2.jpg',
          shortDescription: t('productCategory.categories.mineral.products.yieldSupport'),
          description: t('productDetail.products.yieldSupport.description'),
          usage: t('productDetail.products.yieldSupport.usage'),
          benefits: [
            t('productDetail.products.yieldSupport.benefits.one'),
            t('productDetail.products.yieldSupport.benefits.two'),
            t('productDetail.products.yieldSupport.benefits.three'),
          ],
        },
      ],
    },
  };

  const category = useMemo(() => productCategories[categorySlug], [categorySlug, t]);
  const product = useMemo(
    () => category?.products.find((item) => item.slug === productSlug),
    [category, productSlug]
  );

  useEffect(() => {
    if (!product) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          '.product-detail__breadcrumbs',
          '.product-detail__hero-copy',
          '.product-detail__hero-media',
          '.product-detail__content',
          '.product-detail__sidebar',
        ],
        { opacity: 0, y: 30 }
      );

      gsap.to('.product-detail__breadcrumbs', {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to('.product-detail__hero-copy', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.08,
        ease: 'power4.out',
      });

      gsap.to('.product-detail__hero-media', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.14,
        ease: 'power4.out',
      });

      gsap.to('.product-detail__content', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power4.out',
      });

      gsap.to('.product-detail__sidebar', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.24,
        ease: 'power4.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, [product]);

  if (!category || !product) {
    return (
      <main className="product-detail">
        <section className="product-detail__hero">
          <div className="product-detail__container">
            <p className="product-detail__label">{t('productDetail.notFound.label')}</p>
            <h1 className="product-detail__title">{t('productDetail.notFound.title')}</h1>
            <p className="product-detail__description">{t('productDetail.notFound.text')}</p>

            <div className="product-detail__actions">
              <Link to="/catalogue" className="product-detail__btn product-detail__btn--primary">
                {t('productDetail.backToCatalogue')}
              </Link>
            </div>
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
          <nav className="product-detail__breadcrumbs" aria-label={t('productDetail.breadcrumb')}>
            <Link to="/">{t('productDetail.home')}</Link>
            <span>/</span>
            <Link to="/catalogue">{t('productDetail.catalogue')}</Link>
            <span>/</span>
            <Link to={`/catalogue/${category.slug}`}>{category.title}</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="product-detail__hero-grid">
            <div className="product-detail__hero-copy">
              <p className="product-detail__label">{t('productDetail.productLabel')}</p>
              <h1 className="product-detail__title">{product.name}</h1>
              <p className="product-detail__description">{product.shortDescription}</p>

              <div className="product-detail__actions">
                <a href="/contact" className="product-detail__btn product-detail__btn--primary">
                  {t('productDetail.requestQuote')}
                </a>
                <Link
                  to={`/catalogue/${category.slug}`}
                  className="product-detail__btn product-detail__btn--secondary"
                >
                  {t('productDetail.backToRange')}
                </Link>
              </div>
            </div>

            <div className="product-detail__hero-media">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail__main">
        <div className="product-detail__container product-detail__layout">
          <article className="product-detail__content">
            <div className="product-detail__section">
              <p className="product-detail__section-label">{t('productDetail.overview')}</p>
              <h2>{t('productDetail.descriptionTitle')}</h2>
              <p>{product.description}</p>
            </div>

            <div className="product-detail__section">
              <p className="product-detail__section-label">{t('productDetail.fieldUse')}</p>
              <h2>{t('productDetail.usageTitle')}</h2>
              <p>{product.usage}</p>
            </div>

            <div className="product-detail__section">
              <p className="product-detail__section-label">{t('productDetail.benefits')}</p>
              <h2>{t('productDetail.keyBenefitsTitle')}</h2>

              <ul className="product-detail__benefits">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="product-detail__sidebar">
            <div className="product-detail__card">
              <p className="product-detail__card-label">{t('productDetail.reference')}</p>
              <p className="product-detail__card-value">{product.id}</p>
            </div>

            <div className="product-detail__card">
              <p className="product-detail__card-label">{t('productDetail.range')}</p>
              <p className="product-detail__card-value">{category.title}</p>
            </div>

            <div className="product-detail__card">
              <p className="product-detail__card-label">{t('productDetail.positioning')}</p>
              <p className="product-detail__card-value">{t('productDetail.professionalUse')}</p>
            </div>

            <a href="/contact" className="product-detail__sidebar-btn">
              {t('productDetail.contactTeam')}
            </a>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}