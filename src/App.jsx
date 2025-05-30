// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import RainfallPrediction from './components/RainfallPrediction';
import SoilSuggestions from './components/SoilSuggestions';
import IrrigationMethods from './components/IrrigationMethods';

const App = () => (
  <Router>
    <nav className="main-nav">
      <h1>AGRIONE</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rainfall">Rainfall Prediction</Link></li>
        <li><Link to="/soil">Soil Suggestions</Link></li>
        <li><Link to="/irrigation">Irrigation Methods</Link></li>
        <li><Link to="/about">About Us</Link></li>
        {/* 👇 Removed Contact as it's merged with About */}
      </ul>
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
    <div>
      <footer className="footer">
        <p>&copy; 2025 Agrione. All rights reserved.</p>
</footer>
    </div>
  </Router>
);

export default App;  