import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DocsPage from './components/DocsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'docs':
        return <DocsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
