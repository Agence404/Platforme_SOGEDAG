import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-side header-side--left">
          <button
            className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="menuPanel"
            onClick={toggleMenu}
          >
            <span className="menu-toggle__lines">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <div className="header-center">
          <Link to="/" className="logo" aria-label="Accueil SOGEDAG" onClick={closeMenu}>
            <img src="/logo-Sogedag.jpg" alt="SOGEDAG" className="logo__mark" />
          </Link>
        </div>

        <div className="header-side header-side--right">
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    className="quote-btn quote-btn--linkedin"
    aria-label="Voir notre page LinkedIn"
  >
    <span className="quote-btn__icon-wrap quote-btn__icon-wrap--linkedin" aria-hidden="true">
      <img src="/linkedin.png" alt="" className="quote-btn__icon quote-btn__icon--linkedin" />
    </span>
    <span className="quote-btn__text">LinkedIn</span>
  </a>

  <a href="#contact" className="quote-btn" aria-label="Demandez un devis">
    <span className="quote-btn__icon-wrap" aria-hidden="true">
      <img src="/flower.png" alt="" className="quote-btn__icon" />
    </span>
    <span className="quote-btn__text">Demandez un devis</span>
  </a>
</div>
      </header>

      <div
        className={`menu-overlay ${isOpen ? 'is-open' : ''}`}
        id="menuOverlay"
        onClick={closeMenu}
      ></div>

      <nav
        className={`menu-panel ${isOpen ? 'is-open' : ''}`}
        id="menuPanel"
        aria-hidden={isOpen ? 'false' : 'true'}
      >
        <div className="menu-panel__top">
          <span className="menu-panel__eyebrow">Navigation</span>
          <button
            className="menu-close"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <div className="menu-panel__content">
          <div className="menu-panel__intro">
            <h2 className="menu-panel__title">
              Explorez
              <br />
              le site
            </h2>
            <p className="menu-panel__subtitle">
              Accédez rapidement aux pages importantes et demandez aussi votre
              devis depuis ce menu.
            </p>
          </div>

          <ul className="menu-nav">
            <li>
              <Link to="/catalogue" onClick={closeMenu}>
                <span className="menu-nav__label">Produits</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/apropos" onClick={closeMenu}>
                <span className="menu-nav__label">À propos</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/recherche" onClick={closeMenu}>
              <span className="menu-nav__label">Recherche</span>
              <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/blog" onClick={closeMenu}>
                <span className="menu-nav__label">Blog</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/multimedia" onClick={closeMenu}>
                <span className="menu-nav__label">Multimédia</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                <span className="menu-nav__label">Contactez-nous</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>
          </ul>

          <div className="menu-panel__bottom">
            <a
              href="#contact"
              className="drawer-quote-btn"
              aria-label="Demandez un devis"
              onClick={closeMenu}
            >
              <span className="drawer-quote-btn__icon-wrap" aria-hidden="true">
                <img src="/flower.png" alt="" className="drawer-quote-btn__icon" />
              </span>
              <span className="drawer-quote-btn__text">Demandez un devis</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}