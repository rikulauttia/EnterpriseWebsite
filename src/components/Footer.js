import React from 'react';

import {
  Facebook,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Language specific content
  const translations = {
    en: {
      quickLinks: 'Quick Links',
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact',
      ourProducts: 'Our Products',
      rainbowTrout: 'Rainbow Trout',
      whitefish: 'Whitefish',
      char: 'Char',
      caviar: 'Caviar',
      languages: 'Languages',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved',
      address: 'Address',
      tel: 'Tel'
    },
    fi: {
      quickLinks: 'Pikalinkit',
      home: 'Etusivu',
      products: 'Tuotteet',
      about: 'Tietoa meistä',
      contact: 'Yhteystiedot',
      ourProducts: 'Tuotteemme',
      rainbowTrout: 'Kirjolohi',
      whitefish: 'Siika',
      char: 'Nieriä',
      caviar: 'Kaviaari',
      languages: 'Kielet',
      privacy: 'Tietosuoja',
      terms: 'Käyttöehdot',
      rights: 'Kaikki oikeudet pidätetään',
      address: 'Osoite',
      tel: 'Puh'
    },
    sv: {
      quickLinks: 'Snabblänkar',
      home: 'Hem',
      products: 'Produkter',
      about: 'Om oss',
      contact: 'Kontakt',
      ourProducts: 'Våra produkter',
      rainbowTrout: 'Regnbåge',
      whitefish: 'Sik',
      char: 'Röding',
      caviar: 'Kaviar',
      languages: 'Språk',
      privacy: 'Integritetspolicy',
      terms: 'Användarvillkor',
      rights: 'Alla rättigheter förbehållna',
      address: 'Adress',
      tel: 'Tel'
    },
    ja: {
      quickLinks: 'クイックリンク',
      home: 'ホーム',
      products: '製品',
      about: '会社概要',
      contact: 'お問い合わせ',
      ourProducts: '当社の製品',
      rainbowTrout: 'ニジマス',
      whitefish: 'ホワイトフィッシュ',
      char: 'イワナ',
      caviar: 'キャビア',
      languages: '言語',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      rights: '全著作権所有',
      address: '住所',
      tel: '電話'
    }
  };

  // Get current language from URL or default to 'en'
  const getCurrentLanguage = () => {
    const path = location.pathname;
    if (path.startsWith('/fi')) return 'fi';
    if (path.startsWith('/sv')) return 'sv';
    if (path.startsWith('/ja')) return 'ja';
    return 'en';
  };

  const currentLang = getCurrentLanguage();
  const t = translations[currentLang];

  // Language options with native names
  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'fi', name: 'Finnish', native: 'Suomi' },
    { code: 'sv', name: 'Swedish', native: 'Svenska' },
    { code: 'ja', name: 'Japanese', native: '日本語' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">M.A.T-Fish Ab Oy</h3>
            <p className="text-sm mb-2">Y-tunnus: 2835881-3</p>
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
                {t.tel}: 040 1454 014
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <nav className="flex flex-col gap-2">
              <Link to={`/${currentLang === 'en' ? '' : currentLang}`} className="text-sm hover:text-white transition-colors">
                {t.home}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/products`} className="text-sm hover:text-white transition-colors">
                {t.products}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/about`} className="text-sm hover:text-white transition-colors">
                {t.about}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/contact`} className="text-sm hover:text-white transition-colors">
                {t.contact}
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.ourProducts}</h3>
            <nav className="flex flex-col gap-2">
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/products/rainbow-trout`} className="text-sm hover:text-white transition-colors">
                {t.rainbowTrout}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/products/whitefish`} className="text-sm hover:text-white transition-colors">
                {t.whitefish}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/products/char`} className="text-sm hover:text-white transition-colors">
                {t.char}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/products/caviar`} className="text-sm hover:text-white transition-colors">
                {t.caviar}
              </Link>
            </nav>
          </div>

          {/* Languages and Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.languages}</h3>
            <nav className="flex flex-col gap-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  to={`/${lang.code === 'en' ? '' : lang.code}${location.pathname.replace(/^\/(en|fi|sv|ja)?/, '')}`}
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
              &copy; {currentYear} M.A.T-Fish Ab Oy. {t.rights}.
            </p>
            <nav className="flex gap-6">
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/privacy`} className="text-sm hover:text-white transition-colors">
                {t.privacy}
              </Link>
              <Link to={`/${currentLang === 'en' ? '' : currentLang}/terms`} className="text-sm hover:text-white transition-colors">
                {t.terms}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;