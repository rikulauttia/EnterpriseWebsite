import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "fi";

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <html lang={currentLang} />
          <title>
            {t("meta.title", "M.A.T-Fish | Premium Fish Products & Processing")}
          </title>
          <meta
            name="description"
            content={t(
              "meta.description",
              "Premium quality farmed rainbow trout, whitefish, and char. Fresh fish delivery across Finland."
            )}
          />

          {/* Open Graph / Facebook */}
          <meta
            property="og:title"
            content={t(
              "meta.title",
              "M.A.T-Fish | Premium Fish Products & Processing"
            )}
          />
          <meta
            property="og:description"
            content={t(
              "meta.description",
              "Premium quality farmed rainbow trout, whitefish, and char. Fresh fish delivery across Finland."
            )}
          />
          <meta
            property="og:locale"
            content={`${currentLang}_${currentLang.toUpperCase()}`}
          />

          {/* Twitter */}
          <meta
            name="twitter:title"
            content={t(
              "meta.title",
              "M.A.T-Fish | Premium Fish Products & Processing"
            )}
          />
          <meta
            name="twitter:description"
            content={t(
              "meta.description",
              "Premium quality farmed rainbow trout, whitefish, and char. Fresh fish delivery across Finland."
            )}
          />
        </Helmet>

        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
