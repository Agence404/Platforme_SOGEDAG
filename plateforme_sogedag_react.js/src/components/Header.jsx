import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
            aria-label={t('header.openMenu')}
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
          <Link to="/" className="logo" aria-label={t('header.home')} onClick={closeMenu}>
            <img src="/logo-Sogedag.jpg" alt="SOGEDAG" className="logo__mark" />
          </Link>
        </div>

        <div className="header-side header-side--right">
          <div className="language-switcher" aria-label="Language switcher">
  <button
    type="button"
    className={`language-switcher__btn ${i18n.language.startsWith('fr') ? 'active' : ''}`}
    onClick={() => i18n.changeLanguage('fr')}
  >
    FR
  </button>

  <button
    type="button"
    className={`language-switcher__btn ${i18n.language.startsWith('en') ? 'active' : ''}`}
    onClick={() => i18n.changeLanguage('en')}
  >
    EN
  </button>
</div>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="quote-btn quote-btn--linkedin"
            aria-label={t('header.linkedin')}
          >
            <span className="quote-btn__icon-wrap quote-btn__icon-wrap--linkedin" aria-hidden="true">
              <img src="/linkedin.png" alt="" className="quote-btn__icon quote-btn__icon--linkedin" />
            </span>
            <span className="quote-btn__text">LinkedIn</span>
          </a>

          <a href="#contact" className="quote-btn" aria-label={t('header.quote')}>
            <span className="quote-btn__icon-wrap" aria-hidden="true">
              <img src="/flower.png" alt="" className="quote-btn__icon" />
            </span>
            <span className="quote-btn__text">{t('header.quote')}</span>
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
          <span className="menu-panel__eyebrow">{t('header.navigation')}</span>
          <button
            className="menu-close"
            aria-label={t('header.closeMenu')}
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <div className="menu-panel__content">
          <div className="menu-panel__intro">
            <h2 className="menu-panel__title">{t('header.explore')}</h2>
            <p className="menu-panel__subtitle">{t('header.subtitle')}</p>
          </div>

          <ul className="menu-nav">
            <li>
              <Link to="/catalogue" onClick={closeMenu}>
                <span className="menu-nav__label">{t('header.products')}</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/apropos" onClick={closeMenu}>
                <span className="menu-nav__label">{t('header.about')}</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/recherche" onClick={closeMenu}>
                <span className="menu-nav__label">{t('header.research')}</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/blog" onClick={closeMenu}>
                <span className="menu-nav__label">{t('header.blog')}</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/multimedia" onClick={closeMenu}>
                <span className="menu-nav__label">{t('header.multimedia')}</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                <span className="menu-nav__label">{t('header.contact')}</span>
                <span className="menu-nav__arrow">→</span>
              </Link>
            </li>
          </ul>

          <div className="menu-panel__bottom">
            <a
              href="#contact"
              className="drawer-quote-btn"
              aria-label={t('header.quote')}
              onClick={closeMenu}
            >
              <span className="drawer-quote-btn__icon-wrap" aria-hidden="true">
                <img src="/flower.png" alt="" className="drawer-quote-btn__icon" />
              </span>
              <span className="drawer-quote-btn__text">{t('header.quote')}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}