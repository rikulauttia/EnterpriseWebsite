import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  scroll-margin-top: 4rem;
`;

const GradientBackground = styled(motion.div)`
  background: linear-gradient(135deg, #003366 0%, #004d99 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.98);
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 51, 102, 0.02),
    0 12px 16px rgba(0, 51, 102, 0.04), 0 0 1px rgba(0, 51, 102, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(229, 231, 235, 0.7);
  height: 100%; // Add this
  display: flex; // Add this
  flex-direction: column; // Add this

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
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 51, 102, 0.08),
        0 8px 16px rgba(0, 51, 102, 0.04);

      &::before {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1e293b;
  transition: all 0.3s ease;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: transparent;

  @media (hover: hover) {
    &:hover {
      color: #003366;
      transform: translateX(5px);
      background: rgba(0, 51, 102, 0.05);
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 51, 102, 0.02),
    0 12px 16px rgba(0, 51, 102, 0.04);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const contactPersons = [
    {
      name: "Anu Lauttia",
      title: t("contactpage.roles.ceo", "Chief Executive Officer"),
      contacts: {
        mobile: "040 8644 982",
        email: "anu.lauttia@matfish.fi",
      },
    },
    {
      name: "Kerli Vokksepp",
      title: t("contactpage.roles.sales", "Sales Representative"),
      contacts: {
        mobile: "040 1454 014",
        phone: "018-511 01",
        email: "info@matfish.fi",
      },
    },
    {
      name: "Marcus Eriksson",
      title: t("contactpage.roles.chairman", "Chairman of the Board"),
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
      <GradientBackground>
        <Section className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              >
                {t("contact.title", "Get in Touch")}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              >
                {t(
                  "contactpage.subtitle",
                  "Connect with our team of experts to discuss your premium fish needs"
                )}
              </motion.p>
            </motion.div>
          </div>
        </Section>
      </GradientBackground>

      {/* Team Section */}
      <Section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Update this grid div to center the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {contactPersons.map((person, index) => (
              <ContactCard
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {/* Reduced from mb-8 to mb-4 */}
                    {person.title}
                  </p>
                  {person.contacts && (
                    <div className="space-y-3">
                      {/* Removed mt-auto */}
                      {person.contacts.mobile && (
                        <ContactLink
                          href={`tel:${person.contacts.mobile.replace(
                            /\s/g,
                            ""
                          )}`}
                        >
                          <Phone className="w-5 h-5 text-blue-600" />
                          <span className="text-lg">
                            {person.contacts.mobile}
                          </span>
                        </ContactLink>
                      )}
                      {person.contacts.email && (
                        <ContactLink href={`mailto:${person.contacts.email}`}>
                          <Mail className="w-5 h-5 text-blue-600" />
                          <span className="text-lg">
                            {person.contacts.email}
                          </span>
                        </ContactLink>
                      )}
                      {person.contacts.phone && (
                        <ContactLink
                          href={`tel:${person.contacts.phone.replace(
                            /\s/g,
                            ""
                          )}`}
                        >
                          <Phone className="w-5 h-5 text-blue-600" />
                          <span className="text-lg">
                            {person.contacts.phone}
                          </span>
                        </ContactLink>
                      )}
                    </div>
                  )}
                </div>
              </ContactCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t("contactpage.location.title", "Our Location")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8"
            >
              {t(
                "contactpage.location.subtitle",
                "Located in the heart of Finnish archipelago"
              )}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              {/* Visiting Address */}
              <ContactCard>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("contactpage.location.visiting", "Visiting Address")}
                    </h3>
                    <p className="text-lg text-gray-600">Flisövägen 204</p>
                    <p className="text-lg text-gray-600">22710 Föglö</p>
                    <p className="text-lg text-gray-600">Åland, Finland</p>
                  </div>
                </div>
              </ContactCard>

              {/* Postal Address */}
              <ContactCard>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("contactpage.location.postal", "Postal Address")}
                    </h3>
                    <p className="text-lg text-gray-600">Tingsvägen 3</p>
                    <p className="text-lg text-gray-600">22710 Föglö</p>
                    <p className="text-lg text-gray-600">Åland, Finland</p>
                  </div>
                </div>
              </ContactCard>
            </div>

            <div className="lg:col-span-3">
              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1948.791435942319!2d20.34038133388154!3d60.017403936575164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ad9b730c8dc87%3A0x42c6c8243f2a9a41!2sMatfish!5e1!3m2!1sen!2sfi!4v1732239539353!5m2!1sen!2sfi"
                  title="M.A.T-Fish Ab Oy Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapContainer>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
