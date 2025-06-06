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
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/rainfall">{t('rainfall')}</Link></li>
          <li><Link to="/soil">{t('soil')}</Link></li>
          <li><Link to="/irrigation">{t('irrigation')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rainfall" element={<RainfallPrediction />} />
          <Route path="/soil" element={<SoilSuggestions />} />
          <Route path="/irrigation" element={<IrrigationMethods />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Agrione. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
