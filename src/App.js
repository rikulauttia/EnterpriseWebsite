import './styles/App.css';

import React, { Suspense } from 'react';

import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
// Layout Components
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

// Loading Components
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Error caught by boundary:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return children;
};

// Layout wrapper
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  const { i18n } = useTranslation();

  // Available languages
  const languages = ['en', 'fi', 'sv', 'ja'];

  // Get current language from path or default to 'en'
  const getCurrentLanguage = () => {
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv|ja)/);
    return langMatch ? langMatch[1] : 'en';
  };

  // Set initial language
  React.useEffect(() => {
    const currentLang = getCurrentLanguage();
    i18n.changeLanguage(currentLang);
  }, [i18n]);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Language-specific routes */}
            {languages.map((lang) => (
              <Route
                key={lang}
                path={`/${lang === 'en' ? '' : lang}`}
                element={
                  <Layout>
                    <Routes>
                      <Route index element={<HomePage />} />
                      <Route path="products" element={<ProductsPage />} />
                      <Route path="products/:productId" element={<ProductsPage />} />
                      <Route path="about" element={<AboutPage />} />
                      <Route path="contact" element={<ContactPage />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Layout>
                }
              />
            ))}

            {/* Redirect root to default language */}
            <Route
              path="/"
              element={<Navigate to="/en" replace />}
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <Layout>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                      <p className="text-gray-600 mb-4">Page not found</p>
                      <a
                        href="/"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                </Layout>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;