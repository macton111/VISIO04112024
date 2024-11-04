import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CompanyShowcase from './components/CompanyShowcase';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import FundingPage from './components/FundingPage';
import RepresentativesPage from './components/RepresentativesPage';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authType, setAuthType] = useState('login');

  const handleOpenAuth = (type) => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/funding" element={<FundingPage />} />
        <Route path="/representatives" element={<RepresentativesPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar onOpenAuth={handleOpenAuth} />
      <Hero onGetStarted={() => handleOpenAuth('signup')} />
      <Features />
      <CompanyShowcase />
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
        onSuccess={() => {
          setIsLoggedIn(true);
          setIsAuthModalOpen(false);
        }}
      />
    </div>
  );
}

export default App;