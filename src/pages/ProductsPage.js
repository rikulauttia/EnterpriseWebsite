import React from 'react';

import {
  Fish,
  Shell,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  useLocation,
} from 'react-router-dom';

const ProductsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Product data
  const products = [
    {
      id: 'rainbow-trout',
      name: t('products.rainbowTrout.name', 'Rainbow Trout'),
      description: t('products.rainbowTrout.description', 'Premium quality rainbow trout from Finnish waters'),
      icon: <Fish className="w-8 h-8" />,
      iconColor: 'text-blue-600'
    },
    {
      id: 'whitefish',
      name: t('products.whitefish.name', 'Whitefish'),
      description: t('products.whitefish.description', 'Fresh whitefish from clean Finnish waters'),
      icon: <Fish className="w-8 h-8" />,
      iconColor: 'text-blue-600'
    },
    {
      id: 'char',
      name: t('products.char.name', 'Arctic Char'),
      description: t('products.char.description', 'Delicate Arctic char from pristine waters'),
      icon: <Fish className="w-8 h-8" />,
      iconColor: 'text-blue-600'
    },
    {
      id: 'caviar',
      name: t('products.caviar.name', 'Rainbow Trout Caviar'),
      description: t('products.caviar.description', 'Premium rainbow trout caviar'),
      icon: <Shell className="w-8 h-8" />,
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('products.title', 'Our Products')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {t('products.subtitle', 'Premium fish products from Finnish waters')}
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/${location.pathname.split('/')[1]}/products/${product.id}`}
                className="block group"
              >
                <div className="border-t border-gray-200 pt-8 pb-12 hover:bg-gray-50 transition-colors -mx-4 px-4">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`${product.iconColor} p-3 bg-blue-50 rounded-lg`}>
                      {product.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h2>
                      </div>
                      <p className="mt-2 text-gray-600 max-w-3xl">
                        {product.description}
                      </p>
                    </div>

                    {/* Arrow indicator for hover */}
                    <div className="hidden group-hover:block text-blue-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('products.contact.title', 'Interested in our products?')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('products.contact.description', 'Contact us to learn more about our premium fish products')}
          </p>
          <Link
            to={`/${location.pathname.split('/')[1]}/contact`}
            className="inline-flex bg-blue-600 text-white px-8 py-3 rounded-lg font-medium 
                     hover:bg-blue-700 transition-colors"
          >
            {t('products.contact.button', 'Contact Us')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;