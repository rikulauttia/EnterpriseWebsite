import React from 'react';

import {
  ArrowRight,
  Award,
  Fish,
  LeafyGreen,
  Truck,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Fish className="w-6 h-6" />,
      title: t('home.features.quality.title', 'Premium Fish'),
      description: t('home.features.quality.description', 'Highest quality rainbow trout, whitefish, and char')
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('home.features.sustainable.title', 'Sustainable Farming'),
      description: t('home.features.sustainable.description', 'Environmentally conscious fish farming practices')
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: t('home.features.delivery.title', 'Fresh Delivery'),
      description: t('home.features.delivery.description', 'Direct delivery ensuring maximum freshness')
    },
    {
      icon: <LeafyGreen className="w-6 h-6" />,
      title: t('home.features.local.title', 'Local Production'),
      description: t('home.features.local.description', 'Produced in the clean waters of Finnish archipelago')
    }
  ];

  const products = [
    {
      name: t('products.rainbowTrout'),
      image: '/api/placeholder/600/400',
      description: t('products.rainbowTrout.shortDesc'),
      link: '/products/rainbow-trout'
    },
    {
      name: t('products.whitefish'),
      image: '/api/placeholder/600/400',
      description: t('products.whitefish.shortDesc'),
      link: '/products/whitefish'
    },
    {
      name: t('products.char'),
      image: '/api/placeholder/600/400',
      description: t('products.char.shortDesc'),
      link: '/products/char'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-10" />
        <img 
          src="/api/placeholder/1920/1080" 
          alt={t('home.hero.image')}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('home.hero.title', 'Premium Quality Fish Products')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('home.hero.subtitle', 'Sustainable farmed fish from the clean waters of Finnish archipelago')}
            </p>
            <div className="flex gap-4">
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg 
                         font-medium transition-colors inline-flex items-center gap-2"
              >
                {t('home.hero.cta')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg 
                         font-medium transition-colors backdrop-blur-sm"
              >
                {t('home.hero.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('home.products.title', 'Our Products')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('home.products.subtitle', 'Discover our range of premium fish products, sustainably farmed and carefully processed')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link 
                key={index}
                to={product.link}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('home.cta.title', 'Ready to Order?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description', 'Contact us to place your order or learn more about our products')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium 
                     hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            {t('home.cta.button')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;