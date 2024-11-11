import React, {
  useEffect,
  useState,
} from 'react';

import {
  Award,
  ChevronDown,
  Filter,
  Fish,
  LeafyGreen,
  Scale,
  Search,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Product categories
  const categories = [
    { id: 'all', name: t('products.categories.all') },
    { id: 'trout', name: t('products.categories.trout') },
    { id: 'whitefish', name: t('products.categories.whitefish') },
    { id: 'char', name: t('products.categories.char') },
    { id: 'caviar', name: t('products.categories.caviar') }
  ];

  // Product data
  const products = [
    {
      id: 'rainbow-trout',
      name: t('products.rainbowTrout.name', 'Rainbow Trout'),
      category: 'trout',
      image: '/api/placeholder/600/400',
      description: t('products.rainbowTrout.description'),
      features: [
        t('products.rainbowTrout.features.fresh'),
        t('products.rainbowTrout.features.sustainable'),
        t('products.rainbowTrout.features.local')
      ],
      availability: t('products.availability.yearRound'),
      price: t('products.price.market')
    },
    {
      id: 'whitefish-fresh',
      name: t('products.whitefish.name', 'Whitefish'),
      category: 'whitefish',
      image: '/api/placeholder/600/400',
      description: t('products.whitefish.description'),
      features: [
        t('products.whitefish.features.fresh'),
        t('products.whitefish.features.clean'),
        t('products.whitefish.features.quality')
      ],
      availability: t('products.availability.yearRound'),
      price: t('products.price.market')
    },
    {
      id: 'arctic-char',
      name: t('products.char.name', 'Arctic Char'),
      category: 'char',
      image: '/api/placeholder/600/400',
      description: t('products.char.description'),
      features: [
        t('products.char.features.premium'),
        t('products.char.features.taste'),
        t('products.char.features.fresh')
      ],
      availability: t('products.availability.yearRound'),
      price: t('products.price.market')
    },
    {
      id: 'rainbow-caviar',
      name: t('products.caviar.name', 'Rainbow Trout Caviar'),
      category: 'caviar',
      image: '/api/placeholder/600/400',
      description: t('products.caviar.description'),
      features: [
        t('products.caviar.features.premium'),
        t('products.caviar.features.seasonal'),
        t('products.caviar.features.delicacy')
      ],
      availability: t('products.availability.seasonal'),
      price: t('products.price.premium')
    }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Close filter on mobile when route changes
  useEffect(() => {
    setIsFilterOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('products.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full px-4 py-2 bg-white rounded-lg shadow-sm"
          >
            <span className="flex items-center gap-2">
              <Filter size={20} />
              {t('products.filter')}
            </span>
            <ChevronDown
              size={20}
              className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Categories */}
          <div className={`lg:flex ${isFilterOpen ? 'block' : 'hidden'} flex-wrap gap-2`}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-grow lg:max-w-md">
            <input
              type="text"
              placeholder={t('products.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.availability === t('products.availability.seasonal') && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {t('products.seasonal')}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <LeafyGreen size={16} className="text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Availability & Price */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Scale size={16} />
                    {product.availability}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    {product.price}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/products/${product.id}`}
                  className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  {t('products.viewDetails')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Fish size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('products.noResults.title')}</h3>
            <p className="text-gray-600">{t('products.noResults.description')}</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('products.contact.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('products.contact.description')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            {t('products.contact.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;