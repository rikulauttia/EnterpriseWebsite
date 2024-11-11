import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/products">{t('products')}</Link></li>
          <li><Link to="/about">{t('about_us')}</Link></li>
          <li><Link to="/contact">{t('contact_us')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
