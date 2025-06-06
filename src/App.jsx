// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import RainfallPrediction from './components/RainfallPrediction';
import SoilSuggestions from './components/SoilSuggestions';
import IrrigationMethods from './components/IrrigationMethods';
import './i18.js';

import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="language-switcher">
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('te')}>తెలుగు</button>
    </div>
  );
};

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <nav className="main-nav">
        <h1>AGRIONE</h1>
        <Link to="/">{t('Home')}</Link>
      <Link to="/Rainfall">{t('RainfallPrediction')}</Link>
      <Link to="/Soil">{t('SoilSuggestion')}</Link>
      <Link to="/Irrigation">{t('IrrigationMethods')}</Link>
      <Link to="/About">{t('AboutUs')}</Link>
        <LanguageSwitcher />
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rainfall" element={<RainfallPrediction />} />
          <Route path="/Soil" element={<SoilSuggestions />} />
          <Route path="/Irrigation" element={<IrrigationMethods />} />
          <Route path="/About" element={<AboutUs />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Agrione. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
