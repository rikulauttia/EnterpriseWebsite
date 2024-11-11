import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;