import React from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import heroImage from "../images/hero/hero-background.jpg";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: calc(100vh - 60px); /* Adjust for mobile header */
  }
`;

const HeroSection = styled(Section)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    pointer-events: none;
  }
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.98);
  padding: 3.5rem 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 51, 102, 0.02),
    0 12px 16px rgba(0, 51, 102, 0.04), 0 0 1px rgba(0, 51, 102, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(229, 231, 235, 0.7);
  backdrop-filter: blur(20px);
  transform: translateY(0);
  will-change: transform;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.2),
      rgba(37, 99, 235, 0.05) 50%,
      transparent
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 51, 102, 0.03),
        0 16px 24px rgba(0, 51, 102, 0.05), 0 0 1px rgba(0, 51, 102, 0.1);
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$primary ? "rgba(255, 255, 255, 0.9)" : "#2563eb"};
  color: ${(props) => (props.$primary ? "#1a365d" : "white")};
  backdrop-filter: ${(props) => (props.$primary ? "blur(10px)" : "none")};

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      background: ${(props) =>
        props.$primary ? "rgba(255, 255, 255, 1)" : "#1d4ed8"};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv|ja)/);
    return langMatch ? langMatch[1] : "fi";
  };

  const currentLang = getCurrentLanguage();

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

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection className="snap-start">
        <HeroImage
          src={heroImage}
          alt="Finnish archipelago"
          loading="eager"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            variants={itemVariants}
          >
            M.A.T FISH
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white mb-12 font-light"
            variants={itemVariants}
          >
            {t("home.hero.subtitle")}
          </motion.p>
          <motion.div className="space-x-4" variants={itemVariants}>
            <StyledButton
              to={`/${currentLang}/contact`}
              $primary
              className="text-lg md:text-xl"
            >
              {t("home.hero.contact", "Contact Us")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </StyledButton>
          </motion.div>
        </motion.div>
      </HeroSection>

      {/* Features Section */}
      <Section className="snap-start relative overflow-hidden flex items-center min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Subtle premium background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
              opacity: 0.1,
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Features Grid */}
          <div className="max-w-6xl mx-auto -mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Premium icon container */}
                  <div className="relative w-16 h-16 mb-8">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/10 to-blue-400/10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/40 to-blue-50/40 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-8 h-8 text-blue-600">
                        {index === 0 && (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                            <line x1="16" y1="8" x2="2" y2="22" />
                            <line x1="17.5" y1="15" x2="9" y2="15" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    {feature.title}
                  </h3>

                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-6 opacity-70" />

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                    {feature.description}
                  </p>

                  {/* Enhanced glass effect border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, rgba(37, 99, 235, 0.1), transparent)",
                    }}
                  />
                </FeatureCard>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section className="snap-start bg-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
              variants={itemVariants}
            >
              {t("home.about.title", "Our Commitment")}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              {t("home.about.description")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <StyledButton
                to={`/${currentLang}/about`}
                className="text-lg md:text-xl"
              >
                {t("home.about.link", "Learn more about us")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </StyledButton>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default HomePage;
