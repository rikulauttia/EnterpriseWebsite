import React from 'react';

import {
  ArrowRight,
  Fish,
  Leaf,
  ShieldCheck,
  Waves,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import heroImage from '../images/hero/hero-background.jpg';

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Fish className="w-6 h-6 fish-icon" />,
      title: t('home.features.quality.title', 'Premium Fish'),
      description: t('home.features.quality.description', 'Superior quality fish from Finnish waters')
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: t('home.features.fresh.title', 'Fresh From Water'),
      description: t('home.features.fresh.description', 'Direct from our local fish farms')
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t('home.features.sustainable.title', 'Sustainable'),
      description: t('home.features.sustainable.description', 'Environmentally conscious practices')
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: t('home.features.local.title', 'Local Production'),
      description: t('home.features.local.description', 'Produced in Finnish archipelago')
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen hero-section">
        <img 
          src={heroImage}
          alt="Finnish archipelago"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-wider text-center mb-8 text-shadow animate-slide-up">
            M.A.T FISH
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl text-center px-4 text-shadow-sm">
            {t('home.hero.subtitle', 'Sustainable fish farming from the pristine waters of Finnish archipelago')}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container">
          <div className="flex justify-center space-x-8 py-6">
            {['Products', 'About', 'Sustainability', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="nav-link text-gray-800 hover:text-blue-600"
              >
                {t(`nav.${item.toLowerCase()}`, item)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card card-hover p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('home.about.title', 'Our Commitment')}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('home.about.description', 'We are dedicated to sustainable fish farming in the Finnish archipelago. Our methods respect both tradition and innovation, ensuring the highest quality products while protecting our precious marine environment.')}
            </p>
            <Link
              to="/about"
              className="btn-primary"
            >
              {t('home.about.link', 'Learn more about us')} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('home.contact.title', 'Get in Touch')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('home.contact.description', 'Interested in our products? Contact us to learn more about our sustainable fish farming practices and premium products.')}
          </p>
          <Link
            to="/contact"
            className="btn-secondary"
          >
            {t('home.contact.button', 'Contact Us')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;