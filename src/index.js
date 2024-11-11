import './styles/index.css';
import './i18n';

import React, { Suspense } from 'react';

import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

// Loading component for Suspense
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading M.A.T-Fish...</p>
    </div>
  </div>
);

// Error logging
const logError = (error, errorInfo) => {
  // In production, you would send this to your error tracking service
  console.error('Application Error:', error);
  console.error('Error Info:', errorInfo);
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                       transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring
const reportWebVitals = (metric) => {
  // In production, send to your analytics service
  console.log(metric);
};

// Root element
const container = document.getElementById('root');
const root = createRoot(container);

// Prevent mounting in wrong element
if (!container) {
  throw new Error('Failed to find the root element. The app cannot be initialized.');
}

// App rendering
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Report web vitals
reportWebVitals();

// Enable hot reloading in development
if (import.meta.hot) {
  import.meta.hot.accept();
}

// Handle service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Handle uncaught errors
window.addEventListener('unhandledrejection', event => {
  logError(event.reason, 'Unhandled Promise Rejection');
});

window.addEventListener('error', event => {
  logError(event.error, 'Uncaught Error');
});