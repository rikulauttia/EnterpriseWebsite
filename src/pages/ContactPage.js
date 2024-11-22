import React from "react";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

const GradientBackground = styled(motion.div)`
  background: linear-gradient(135deg, #003366 0%, #004d99 100%);
  position: relative;
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 0.5rem;
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1e293b;
  transition: all 0.3s ease;

  &:hover {
    color: #003366;
    transform: translateX(5px);
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

  const contactPersons = [
    {
      name: "Anu Lauttia",
      title: t("contact.roles.ceo", "Chief Executive Officer"),
      contacts: {
        mobile: "040 8644 982",
        phone: "018-511 00",
        email: "anu.lauttia@matfish.fi",
      },
    },
    {
      name: "Kerli Vokksepp",
      title: t("contact.roles.sales", "Sales Representative"),
      contacts: {
        mobile: "040 1454 014",
        phone: "018-511 01",
        email: "info@matfish.fi",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GradientBackground>
        <Section className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t("contact.title", "Get in Touch")}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {t(
                  "contact.subtitle",
                  "Connect with our team of experts to discuss your premium fish needs"
                )}
              </p>
            </motion.div>
          </div>
        </Section>
      </GradientBackground>

      {/* Team Section */}
      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactPersons.map((person, index) => (
              <ContactCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {person.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{person.title}</p>
                <div className="space-y-4">
                  <ContactLink
                    href={`tel:${person.contacts.mobile.replace(/\s/g, "")}`}
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">{person.contacts.mobile}</span>
                  </ContactLink>
                  <ContactLink
                    href={`tel:${person.contacts.phone.replace(/\s/g, "")}`}
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">{person.contacts.phone}</span>
                  </ContactLink>
                  <ContactLink href={`mailto:${person.contacts.email}`}>
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">{person.contacts.email}</span>
                  </ContactLink>
                </div>
              </ContactCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("contact.location.title", "Our Location")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t(
                "contact.location.subtitle",
                "Located in the heart of Finnish archipelago"
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <ContactCard className="lg:col-span-2">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    M.A.T-Fish Ab Oy
                  </h3>
                  <p className="text-lg text-gray-600">Tingsvägen 3</p>
                  <p className="text-lg text-gray-600">22710 Föglö</p>
                  <p className="text-lg text-gray-600">Åland, Finland</p>
                </div>
              </div>
            </ContactCard>

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
