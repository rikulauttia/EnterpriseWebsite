import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { Activity, ArrowRight, Award, Globe, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.$bg || "white"};

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.75rem;
  transition: transform 0.3s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ProductCard = styled(motion.div)`
  border-bottom: 1px solid #e5e7eb;
  padding: 3.5rem 2rem;
  margin: 0 -2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: default;

  &:last-child {
    border-bottom: none;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: #003366;
    opacity: 0;
    transition: width 0.3s ease, opacity 0.3s ease;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #f8fafc;
      transform: translateX(10px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);

      &:before {
        width: 4px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 0;
    border-radius: 0.5rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    margin-bottom: 1rem;

    &:hover {
      transform: translateX(0);
      background-color: #f8fafc;
    }
  }
`;

const ProductTitle = styled.h2`
  color: #1e293b;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 1.1rem;
  max-width: 65ch;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ProductsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv)/);
    return langMatch ? langMatch[1] : "en";
  };

  const currentLang = getCurrentLanguage();

  const products = [
    {
      id: "rainbow-trout",
      name: t("products.rainbowTrout.name"),
      description: t("products.rainbowTrout.description"),
      details: t("products.rainbowTrout.details"),
    },
    {
      id: "whitefish",
      name: t("products.whitefish.name"),
      description: t("products.whitefish.description"),
      details: t("products.whitefish.details"),
    },
    {
      id: "arctic-char",
      name: t("products.char.name"),
      description: t("products.char.description"),
      details: t("products.char.details"),
    },
    {
      id: "caviar",
      name: t("products.caviar.name"),
      description: t("products.caviar.description"),
      details: t("products.caviar.details"),
    },
  ];

  const stats = [
    {
      icon: <Globe className="w-6 h-6" />,
      value: "5+",
      label: t("products.stats.countries"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "40+",
      label: t("products.stats.years"),
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "100%",
      label: t("products.stats.sustainable"),
    },
    {
      icon: <Activity className="w-6 h-6" />,
      value: "4M+",
      label: t("products.stats.production"),
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 bg-gradient-to-b from-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("products.title")}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t("products.subtitle")}
          </motion.p>

          <StatsContainer>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex justify-center text-blue-600 mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </StatItem>
            ))}
          </StatsContainer>
        </div>
      </motion.section>

      {/* Products List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductDescription className="mt-4">
                {product.details}
              </ProductDescription>
            </ProductCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Section $bg="linear-gradient(to bottom right, #003366, #004d99)">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t("products.contact.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("products.contact.description")}
            </p>
            <Link
              to={`/${currentLang}/contact`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t("products.contact.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ProductsPage;
