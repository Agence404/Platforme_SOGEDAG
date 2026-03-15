import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import './ProductCategory.css';

const productCategories = {
  biostimulants: {
    slug: 'biostimulants',
    title: 'Biostimulants',
    label: 'Gamme produit',
    description:
      'Une sélection de solutions conçues pour accompagner la vigueur, l’équilibre physiologique et la capacité de réponse des cultures.',
    image: '/image_cata1.jpg',
    products: [
      {
        id: 'BIO-01',
        slug: 'stim-root',
        name: 'Stim Root',
        shortDescription:
          'Biostimulant pensé pour accompagner le développement racinaire et la reprise végétative.',
        image: '/image_cata1.jpg',
      },
      {
        id: 'BIO-02',
        slug: 'green-pulse',
        name: 'Green Pulse',
        shortDescription:
          'Solution foliaire dédiée au soutien de la vigueur et de l’activité physiologique.',
        image: '/image_cata3.jpg',
      },
      {
        id: 'BIO-03',
        slug: 'active-flow',
        name: 'Active Flow',
        shortDescription:
          'Formulation conçue pour renforcer la plante face aux périodes de contrainte.',
        image: '/image_cata5.jpg',
      },
    ],
  },

  'engrais-speciaux': {
    slug: 'engrais-speciaux',
    title: 'Engrais spéciaux',
    label: 'Gamme produit',
    description:
      'Des formulations techniques développées pour répondre à des besoins ciblés et à des moments clés du cycle cultural.',
    image: '/image-2.jpg',
    products: [
      {
        id: 'ESP-01',
        slug: 'calbor-tech',
        name: 'CalBor Tech',
        shortDescription:
          'Une réponse technique dédiée aux besoins spécifiques des stades sensibles.',
        image: '/image-2.jpg',
      },
      {
        id: 'ESP-02',
        slug: 'mag-active',
        name: 'Mag Active',
        shortDescription:
          'Formulation pensée pour accompagner l’équilibre nutritionnel de la culture.',
        image: '/image_cata2.jpg',
      },
      {
        id: 'ESP-03',
        slug: 'trace-mix-pro',
        name: 'Trace Mix Pro',
        shortDescription:
          'Apport ciblé en oligo-éléments pour les situations de forte exigence.',
        image: '/image_cata4.jpg',
      },
    ],
  },

  'mineral-tech': {
    slug: 'mineral-tech',
    title: 'Engrais Mineral-Tech',
    label: 'Gamme produit',
    description:
      'Une technologie de nutrition avancée au service d’une assimilation plus précise, plus stable et plus performante.',
    image: '/image_cata3.jpg',
    products: [
      {
        id: 'MT-01',
        slug: 'mineral-one',
        name: 'Mineral One',
        shortDescription:
          'Nutrition technique conçue pour améliorer la disponibilité des éléments.',
        image: '/image_cata3.jpg',
      },
      {
        id: 'MT-02',
        slug: 'tech-assimil',
        name: 'Tech Assimil',
        shortDescription:
          'Solution dédiée à une assimilation plus précise et mieux régulée.',
        image: '/image_cata4.jpg',
      },
    ],
  },

  'engrais-organiques': {
    slug: 'engrais-organiques',
    title: 'Engrais organiques',
    label: 'Gamme produit',
    description:
      'Des solutions de fertilisation durable orientées vers l’équilibre du sol, la vie microbienne et la continuité agronomique.',
    image: '/image_cata4.jpg',
    products: [
      {
        id: 'ORG-01',
        slug: 'organic-base',
        name: 'Organic Base',
        shortDescription:
          'Apport organique conçu pour soutenir durablement la fertilité du sol.',
        image: '/image_cata4.jpg',
      },
      {
        id: 'ORG-02',
        slug: 'humic-plus',
        name: 'Humic Plus',
        shortDescription:
          'Solution enrichie pour accompagner la structure et l’activité biologique.',
        image: '/image_cata6.jpg',
      },
    ],
  },

  npk: {
    slug: 'npk',
    title: 'Engrais NPK hydrosolubles & en pâte',
    label: 'Gamme produit',
    description:
      'Des produits performants pour une nutrition rapide, maîtrisée et adaptée aux systèmes modernes de fertilisation.',
    image: '/image_cata5.jpg',
    products: [
      {
        id: 'NPK-01',
        slug: 'soluble-max',
        name: 'Soluble Max',
        shortDescription:
          'Formulation hydrosoluble pour une réponse nutritionnelle rapide.',
        image: '/image_cata5.jpg',
      },
      {
        id: 'NPK-02',
        slug: 'pasta-grow',
        name: 'Pasta Grow',
        shortDescription:
          'Version en pâte pensée pour une nutrition régulière et technique.',
        image: '/image_cata1.jpg',
      },
      {
        id: 'NPK-03',
        slug: 'balance-npk',
        name: 'Balance NPK',
        shortDescription:
          'Équilibre nutritionnel adapté aux différentes étapes du cycle cultural.',
        image: '/image_cata2.jpg',
      },
    ],
  },

  'engrais-mineraux': {
    slug: 'engrais-mineraux',
    title: 'Engrais minéraux',
    label: 'Gamme produit',
    description:
      'Une gamme essentielle pour soutenir la nutrition, la croissance et le rendement dans de nombreux contextes de production.',
    image: '/image_cata6.jpg',
    products: [
      {
        id: 'MIN-01',
        slug: 'mineral-crop',
        name: 'Mineral Crop',
        shortDescription:
          'Nutrition minérale dédiée aux besoins fondamentaux de la culture.',
        image: '/image_cata6.jpg',
      },
      {
        id: 'MIN-02',
        slug: 'yield-support',
        name: 'Yield Support',
        shortDescription:
          'Solution pensée pour accompagner la vigueur et la régularité de production.',
        image: '/image_cata2.jpg',
      },
    ],
  },
};

export default function ProductCategory() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const category = useMemo(() => {
    return productCategories[slug];
  }, [slug]);

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
              <p className="product-category-v3__label">Catalogue</p>
              <h1 className="product-category-v3__title">Catégorie introuvable</h1>
              <p className="product-category-v3__description">
                La catégorie demandée n’existe pas ou son lien est incorrect.
              </p>

              <div className="product-category-v3__hero-actions">
                <Link to="/catalogue" className="product-category-v3__back-btn">
                  Retour au catalogue
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
          <nav className="product-category-v3__breadcrumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue">Catalogue</Link>
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
                  Retour au catalogue
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
            <p className="product-category-v3__section-label">Produits disponibles</p>
            <h2 className="product-category-v3__section-title">
              Choisissez un produit de cette gamme
            </h2>
            <p className="product-category-v3__section-text">
              Cliquez sur un produit pour accéder à sa fiche détaillée, découvrir
              ses caractéristiques et poursuivre votre demande.
            </p>
          </div>

          <div className="product-category-v3__grid">
            {category.products.map((product) => (
              <Link
                key={product.id}
                to={`/produits/${category.slug}/${product.slug}`}
                className="product-item-card"
                aria-label={`Voir le produit ${product.name}`}
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
                    <span className="product-item-card__tag">Voir le produit</span>
                  </div>

                  <h3 className="product-item-card__title">{product.name}</h3>
                  <p className="product-item-card__text">{product.shortDescription}</p>

                  <div className="product-item-card__footer">
                    <span className="product-item-card__link-text">
                      Découvrir la fiche produit
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