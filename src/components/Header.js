import React, {
  useEffect,
  useState,
} from 'react';

import {
  ChevronDown,
  Globe,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Language specific content
  const translations = {
    en: {
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact',
      ourProducts: 'Our Products',
      rainbowTrout: 'Rainbow Trout',
      whitefish: 'Whitefish',
      char: 'Char',
      caviar: 'Caviar'
    },
    fi: {
      home: 'Etusivu',
      products: 'Tuotteet',
      about: 'Tietoa meistä',
      contact: 'Yhteystiedot',
      ourProducts: 'Tuotteemme',
      rainbowTrout: 'Kirjolohi',
      whitefish: 'Siika',
      char: 'Nieriä',
      caviar: 'Kaviaari'
    },
    sv: {
      home: 'Hem',
      products: 'Produkter',
      about: 'Om oss',
      contact: 'Kontakt',
      ourProducts: 'Våra produkter',
      rainbowTrout: 'Regnbåge',
      whitefish: 'Sik',
      char: 'Röding',
      caviar: 'Kaviar'
    },
    ja: {
      home: 'ホーム',
      products: '製品',
      about: '会社概要',
      contact: 'お問い合わせ',
      ourProducts: '当社の製品',
      rainbowTrout: 'ニジマス',
      whitefish: 'ホワイトフィッシュ',
      char: 'イワナ',
      caviar: 'キャビア'
    }
  };

  // Get current language from URL
  const getCurrentLanguage = () => {
    const path = location.pathname;
    if (path.startsWith('/fi')) return 'fi';
    if (path.startsWith('/sv')) return 'sv';
    if (path.startsWith('/ja')) return 'ja';
    return 'en';
  };

  const currentLang = getCurrentLanguage();
  const t = translations[currentLang];

  // Language options
  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'fi', name: 'Finnish', native: 'Suomi' },
    { code: 'sv', name: 'Swedish', native: 'Svenska' },
    { code: 'ja', name: 'Japanese', native: '日本語' }
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+358401454014" className="flex items-center gap-1 hover:text-blue-200">
                <Phone size={14} />
                <span>040 1454 014</span>
              </a>
              <a href="mailto:info@matfish.fi" className="flex items-center gap-1 hover:text-blue-200">
                <Mail size={14} />
                <span>info@matfish.fi</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  to={`/${lang.code === 'en' ? '' : lang.code}${location.pathname.replace(/^\/(en|fi|sv|ja)?/, '')}`}
                  className={`flex items-center gap-1 hover:text-blue-200 ${currentLang === lang.code ? 'text-blue-200 font-medium' : ''}`}
                >
                  <Globe size={14} />
                  <span className="hidden sm:inline">{lang.native}</span>
                  <span className="sm:hidden">{lang.code.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={`/${currentLang === 'en' ? '' : currentLang}`} className="flex items-center">
              <img src="/logo.svg" alt="M.A.T-Fish" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to={`/${currentLang === 'en' ? '' : currentLang}`}
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                {t.home}
              </Link>
              
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-900 font-medium">
                  {t.products}
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48">
                  <Link
                    to={`/${currentLang === 'en' ? '' : currentLang}/products/rainbow-trout`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                  >
                    {t.rainbowTrout}
                  </Link>
                  <Link
                    to={`/${currentLang === 'en' ? '' : currentLang}/products/whitefish`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                  >
                    {t.whitefish}
                  </Link>
                  <Link
                    to={`/${currentLang === 'en' ? '' : currentLang}/products/char`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                  >
                    {t.char}
                  </Link>
                  <Link
                    to={`/${currentLang === 'en' ? '' : currentLang}/products/caviar`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                  >
                    {t.caviar}
                  </Link>
                </div>
              </div>

              <Link
                to={`/${currentLang === 'en' ? '' : currentLang}/about`}
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                {t.about}
              </Link>
              
              <Link
                to={`/${currentLang === 'en' ? '' : currentLang}/contact`}
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                {t.contact}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  to={`/${currentLang === 'en' ? '' : currentLang}`}
                  className="text-gray-700 hover:text-blue-900 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.home}
                </Link>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">{t.ourProducts}</h3>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      to={`/${currentLang === 'en' ? '' : currentLang}/products/rainbow-trout`}
                      className="text-gray-700 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.rainbowTrout}
                    </Link>
                    <Link
                      to={`/${currentLang === 'en' ? '' : currentLang}/products/whitefish`}
                      className="text-gray-700 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.whitefish}
                    </Link>
                    <Link
                      to={`/${currentLang === 'en' ? '' : currentLang}/products/char`}
                      className="text-gray-700 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.char}
                    </Link>
                    <Link
                      to={`/${currentLang === 'en' ? '' : currentLang}/products/caviar`}
                      className="text-gray-700 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.caviar}
                    </Link>
                  </div>
                </div>

                <Link
                  to={`/${currentLang === 'en' ? '' : currentLang}/about`}
                  className="text-gray-700 hover:text-blue-900 font-medium py-2 border-t"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.about}
                </Link>
                
                <Link
                  to={`/${currentLang === 'en' ? '' : currentLang}/contact`}
                  className="text-gray-700 hover:text-blue-900 font-medium py-2 border-t"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.contact}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;