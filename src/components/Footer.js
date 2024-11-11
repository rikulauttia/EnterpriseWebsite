import React from 'react';

import {
  Facebook,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  useLocation,
} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const { t } = useTranslation();

  // Language options with native names
  const languages = [
    { code: 'fi', name: 'Finnish', native: 'Suomi' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'sv', name: 'Swedish', native: 'Svenska' },
    { code: 'ja', name: 'Japanese', native: '日本語' }
  ];

  // Get current language from URL
  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv|ja)/);
    return langMatch ? langMatch[1] : 'fi';
  };

  const currentLang = getCurrentLanguage();

  // Create language path
  const createLanguagePath = (langCode) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fi|sv|ja)/, '');
    return `/${langCode}${pathWithoutLang || ''}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">M.A.T-Fish Ab Oy</h3>
            <p className="text-sm mb-2">2835881-3</p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="flex-shrink-0" />
              <p className="text-sm">Tingsvägen 3, 22710 Föglö</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} className="flex-shrink-0" />
              <a href="mailto:info@matfish.fi" className="text-sm hover:text-white transition-colors">
                info@matfish.fi
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <a href="tel:+358401454014" className="text-sm hover:text-white transition-colors">
                {t('footer.tel', 'Tel')}: 040 1454 014
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t('footer.quickLinks', 'Quick Links')}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to={`/${currentLang}`} className="text-sm hover:text-white transition-colors">
                {t('nav.home', 'Home')}
              </Link>
              <Link to={`/${currentLang}/products`} className="text-sm hover:text-white transition-colors">
                {t('nav.products', 'Products')}
              </Link>
              <Link to={`/${currentLang}/about`} className="text-sm hover:text-white transition-colors">
                {t('nav.about', 'About Us')}
              </Link>
              <Link to={`/${currentLang}/contact`} className="text-sm hover:text-white transition-colors">
                {t('nav.contact', 'Contact')}
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t('products.ourProducts', 'Our Products')}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to={`/${currentLang}/products/rainbow-trout`} className="text-sm hover:text-white transition-colors">
                {t('products.rainbowTrout', 'Rainbow Trout')}
              </Link>
              <Link to={`/${currentLang}/products/whitefish`} className="text-sm hover:text-white transition-colors">
                {t('products.whitefish', 'Whitefish')}
              </Link>
              <Link to={`/${currentLang}/products/char`} className="text-sm hover:text-white transition-colors">
                {t('products.char', 'Char')}
              </Link>
              <Link to={`/${currentLang}/products/caviar`} className="text-sm hover:text-white transition-colors">
                {t('products.caviar', 'Caviar')}
              </Link>
            </nav>
          </div>

          {/* Languages and Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t('footer.languages', 'Languages')}
            </h3>
            <nav className="flex flex-col gap-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  to={createLanguagePath(lang.code)}
                  className={`text-sm hover:text-white transition-colors flex items-center gap-2
                    ${currentLang === lang.code ? 'text-white font-medium' : ''}`}
                >
                  <Globe size={16} className="flex-shrink-0" />
                  <span>{lang.native}</span>
                </Link>
              ))}
            </nav>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/matfish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/matfish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {currentYear} M.A.T-Fish Ab Oy. {t('footer.rights', 'All rights reserved')}.
            </p>
            <nav className="flex gap-6">
              <Link to={`/${currentLang}/privacy`} className="text-sm hover:text-white transition-colors">
                {t('footer.privacy', 'Privacy Policy')}
              </Link>
              <Link to={`/${currentLang}/terms`} className="text-sm hover:text-white transition-colors">
                {t('footer.terms', 'Terms of Service')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;