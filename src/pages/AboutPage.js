import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.$bg || "white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Card = styled(motion.div)`
  padding: 3.5rem;
  position: relative;
  background: white;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 51, 102, 0.02),
    0 12px 16px rgba(0, 51, 102, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, #003366, #004d99);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 1rem 0 0 1rem;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateX(10px);
      box-shadow: 0 20px 40px rgba(0, 51, 102, 0.08),
        0 8px 16px rgba(0, 51, 102, 0.04);

      &::before {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 1rem;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 2.5rem;
  position: relative;
  border-left: 2px solid rgba(0, 51, 102, 0.1);
  margin-left: 1.5rem;
  background: white;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 51, 102, 0.02),
    0 12px 16px rgba(0, 51, 102, 0.04);

  &::before {
    content: "";
    position: absolute;
    left: -0.5625rem;
    top: 2.5rem;
    width: 1rem;
    height: 1rem;
    background: linear-gradient(135deg, #003366, #004d99);
    border-radius: 50%;
    box-shadow: 0 0 0 0.25rem rgba(0, 51, 102, 0.1);
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateX(10px);
      border-left-color: #003366;
      box-shadow: 0 20px 40px rgba(0, 51, 102, 0.08),
        0 8px 16px rgba(0, 51, 102, 0.04);

      &::before {
        box-shadow: 0 0 0 0.5rem rgba(0, 51, 102, 0.1);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const YearBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 51, 102, 0.05);
  color: #003366;
  border-radius: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  color: #003366;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
  }
`;

const AboutPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
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

  const values = [
    {
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      title: t("about.values.sustainability.title"),
      description: t("about.values.sustainability.description"),
    },
    {
      title: t("about.values.responsibility.title"),
      description: t("about.values.responsibility.description"),
    },
    {
      title: t("about.values.community.title"),
      description: t("about.values.community.description"),
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: t("about.milestones.founding.title"),
      description: t("about.milestones.founding.description"),
    },
    {
      year: "2012",
      title: t("about.milestones.expansion.title"),
      description: t("about.milestones.expansion.description"),
    },
    {
      year: "2014",
      title: t("about.milestones.modernization.title"),
      description: t("about.milestones.modernization.description"),
    },
    {
      year: "2018",
      title: t("about.milestones.sustainability.title"),
      description: t("about.milestones.sustainability.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 bg-gradient-to-b from-gray-50 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              {t("about.hero.title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            >
              {t("about.hero.description")}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 text-gray-900"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("about.values.title")}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <Card key={index} variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section $bg="linear-gradient(to bottom, #f8fafc, white)">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 text-gray-900"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("about.milestones.title")}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item, index) => (
              <TimelineItem key={index} variants={itemVariants}>
                <YearBadge>{item.year}</YearBadge>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </TimelineItem>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section $bg="linear-gradient(135deg, #003366, #004d99)">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {t("about.contact.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("about.contact.description")}
            </p>
            <StyledLink to={`/${currentLang}/contact`}>
              {t("about.contact.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </StyledLink>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
