import React, {
  useEffect,
  useState,
} from 'react';

import {
  Globe,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  useLocation,
} from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Language options
  const languages = [
    { code: 'fi', name: 'Finnish', native: 'Suomi' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'sv', name: 'Swedish', native: 'Svenska' },
    { code: 'ja', name: 'Japanese', native: '日本語' }
  ];

  // Navigation items
  const navItems = [
    { path: '', label: t('nav.home', 'Home') },
    { path: 'products', label: t('nav.products', 'Products') },
    { path: 'about', label: t('nav.about', 'About') },
    { path: 'contact', label: t('nav.contact', 'Contact') }
  ];

  // Get current language from URL
  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv|ja)/);
    return langMatch ? langMatch[1] : 'fi';
  };

  const currentLang = getCurrentLanguage();

  // Update i18n language when URL changes
  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Create language path
  const createLanguagePath = (langCode) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fi|sv|ja)/, '');
    return `/${langCode}${pathWithoutLang || ''}`;
  };

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
                  to={createLanguagePath(lang.code)}
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
            {/* Company Name */}
            <Link to={`/${currentLang}`} className="text-2xl font-bold text-blue-900">
              M.A.T FISH
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={`/${currentLang}${item.path ? '/' + item.path : ''}`}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                </Link>
              ))}
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
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={`/${currentLang}${item.path ? '/' + item.path : ''}`}
                    className="text-gray-700 hover:text-blue-900 font-medium py-3 border-b border-gray-100 last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;