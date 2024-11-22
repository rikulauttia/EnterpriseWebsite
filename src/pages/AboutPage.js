import React from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.$bg || "white"};
`;

const Card = styled(motion.div)`
  padding: 3.5rem 2rem;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

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

  &:hover {
    background-color: #f8fafc;
    transform: translateX(10px);

    &:before {
      width: 4px;
      opacity: 1;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 2rem 0;
  position: relative;
  border-left: 2px solid #e5e7eb;
  padding-left: 2rem;
  margin-left: 1rem;

  &:before {
    content: "";
    position: absolute;
    left: -0.5625rem;
    top: 2.5rem;
    width: 1rem;
    height: 1rem;
    background: #003366;
    border-radius: 50%;
  }

  &:hover {
    border-left-color: #003366;
  }
`;

const AboutPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv|ja)/);
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
      year: "1970",
      title: t("about.milestones.founding.title"),
      description: t("about.milestones.founding.description"),
    },
    {
      year: "1985",
      title: t("about.milestones.expansion.title"),
      description: t("about.milestones.expansion.description"),
    },
    {
      year: "2000",
      title: t("about.milestones.modernization.title"),
      description: t("about.milestones.modernization.description"),
    },
    {
      year: "2015",
      title: t("about.milestones.sustainability.title"),
      description: t("about.milestones.sustainability.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 bg-gradient-to-b from-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("about.hero.title")}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t("about.hero.description")}
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <Section>
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("about.values.title")}
          </motion.h2>
          <div className="space-y-4">
            {values.map((value, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section $bg="#f8fafc">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("about.milestones.title")}
          </motion.h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-xl font-bold text-blue-600 mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </TimelineItem>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section $bg="linear-gradient(to bottom right, #003366, #004d99)">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t("about.contact.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("about.contact.description")}
            </p>
            <Link
              to={`/${currentLang}/contact`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t("about.contact.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
