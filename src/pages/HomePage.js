import React from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

import heroImage from "../images/hero/hero-background.jpg";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  animation: zoomOut 20s ease-in-out infinite alternate;

  @keyframes zoomOut {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`;

const FeatureCard = styled(motion.div)`
  position: relative;
  padding: 2rem 0;
  border-left: 2px solid #e5e7eb;
  padding-left: 2rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #2563eb;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0 1.5rem 1.5rem;
  }
`;

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("home.features.quality.title", "Premium Quality"),
      description: t(
        "home.features.quality.description",
        "Carefully selected premium fish from pristine Finnish archipelago waters"
      ),
    },
    {
      title: t("home.features.fresh.title", "Freshness Guaranteed"),
      description: t(
        "home.features.fresh.description",
        "Direct delivery from our local facilities ensuring optimal quality"
      ),
    },
    {
      title: t("home.features.sustainable.title", "Sustainable Practice"),
      description: t(
        "home.features.sustainable.description",
        "Committed to environmentally conscious and sustainable fishing methods"
      ),
    },
    {
      title: t("home.features.local.title", "Local Excellence"),
      description: t(
        "home.features.local.description",
        "Supporting local communities and traditions in Finnish archipelago"
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={heroImage} alt="Finnish archipelago" loading="eager" />
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            M.A.T FISH
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white text-center max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t("home.hero.subtitle")}
          </motion.p>
        </motion.div>
      </HeroSection>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </FeatureCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("home.about.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("home.about.description")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              {t("home.about.link")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.contact.title")}
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("home.contact.description")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {t("home.contact.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
