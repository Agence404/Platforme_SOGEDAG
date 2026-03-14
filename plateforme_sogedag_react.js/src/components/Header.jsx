import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
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
            id="menuToggle"
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
          <a href="#" className="logo" aria-label="Accueil SOGEDAG">
            <img src="logo-Sogedag.jpg" alt="SOGEDAG" className="logo__mark" />
          </a>
        </div>

        <div className="header-side header-side--right">
          <a href="#" className="quote-btn" aria-label="Demandez un devis">
            <span className="quote-btn__icon-wrap" aria-hidden="true">
              <img src="flower.png" alt="" className="quote-btn__icon" />
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
            id="menuClose"
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
              <a href="#">
                <span className="menu-nav__label">Produits</span>
                <span className="menu-nav__arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="menu-nav__label">Apropos</span>
                <span className="menu-nav__arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="menu-nav__label">Recherche</span>
                <span className="menu-nav__arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="menu-nav__label">Blog</span>
                <span className="menu-nav__arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="menu-nav__label">Multimédia</span>
                <span className="menu-nav__arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="menu-nav__label">Contactez-nous</span>
                <span className="menu-nav__arrow">→</span>
              </a>
            </li>
          </ul>

          <div className="menu-panel__bottom">
            <a href="#" className="drawer-quote-btn" aria-label="Demandez un devis">
              <span className="drawer-quote-btn__icon-wrap" aria-hidden="true">
                <img src="flower.png" alt="" className="drawer-quote-btn__icon" />
              </span>
              <span className="drawer-quote-btn__text">Demandez un devis</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}