import React from 'react';

import {
  Award,
  Factory,
  Fish,
  Heart,
  LeafyGreen,
  Scale,
  Truck,
  Users,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  // Company milestones
  const milestones = [
    {
      year: "1970",
      title: t('about.milestones.founding'),
      description: t('about.milestones.founding.description')
    },
    {
      year: "1985",
      title: t('about.milestones.expansion'),
      description: t('about.milestones.expansion.description')
    },
    {
      year: "2000",
      title: t('about.milestones.modernization'),
      description: t('about.milestones.modernization.description')
    },
    {
      year: "2015",
      title: t('about.milestones.sustainability'),
      description: t('about.milestones.sustainability.description')
    }
  ];

  // Company values
  const values = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: t('about.values.quality.title', 'Quality'),
      description: t('about.values.quality.description', 'Commitment to delivering premium fish products')
    },
    {
      icon: <LeafyGreen className="w-6 h-6" />,
      title: t('about.values.sustainability.title', 'Sustainability'),
      description: t('about.values.sustainability.description', 'Environmentally conscious farming practices')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('about.values.responsibility.title', 'Responsibility'),
      description: t('about.values.responsibility.description', 'Social and environmental responsibility')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('about.values.community.title', 'Community'),
      description: t('about.values.community.description', 'Supporting local communities')
    }
  ];

  // Process steps
  const processSteps = [
    {
      icon: <Fish className="w-6 h-6" />,
      title: t('about.process.farming.title', 'Sustainable Farming'),
      description: t('about.process.farming.description', 'Fish farming in clean archipelago waters')
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: t('about.process.processing.title', 'Careful Processing'),
      description: t('about.process.processing.description', 'State-of-the-art processing facilities')
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('about.process.quality.title', 'Quality Control'),
      description: t('about.process.quality.description', 'Rigorous quality standards')
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: t('about.process.delivery.title', 'Fresh Delivery'),
      description: t('about.process.delivery.description', 'Efficient delivery system')
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.hero.title', 'About M.A.T-Fish')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('about.hero.description', 'Leading fish producer in Finland, specializing in premium quality rainbow trout, whitefish, and char since 1970.')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">
            {t('about.story.title', 'Our Story')}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('about.story.p1', 'M.A.T-Fish started as a small family business in the Föglö region of Finland\'s archipelago.')}
          </p>
          <p className="text-gray-600 mb-4">
            {t('about.story.p2', 'For over five decades, we have been committed to providing the highest quality fish products while maintaining sustainable farming practices.')}
          </p>
          <p className="text-gray-600">
            {t('about.story.p3', 'Today, we are proud to be one of Finland\'s leading suppliers of premium fish products, serving customers across the country.')}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            {t('about.values.title', 'Our Values')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            {t('about.process.title', 'Our Process')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            {t('about.milestones.title', 'Our Journey')}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                <span className="md:w-32 text-2xl font-bold text-blue-600">{milestone.year}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            {t('about.cta.title', 'Want to Learn More?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('about.cta.description', 'Contact us to learn more about our products and services')}
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium 
                     hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            {t('about.cta.button', 'Contact Us')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;