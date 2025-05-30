// Home.jsx  – now includes "How AGRIONE Works"
import React from 'react';
import '../Styles/Home.css';
import FarmerImg from '../assets/farmer.svg'; // or .png
const Home = () => {
  return (
     <div className="home">
      <section className="hero-section">
        <div className="hero-left">
          <h1>Welcome to AGRIONE</h1>
          <p>
            Smart Farming with AI-powered predictions. Plan better. Grow smarter.
          </p>
        </div>
        <div className="hero-right">
          <img src={FarmerImg} alt="Farmer Illustration" className="farmer-img" />
        </div>
      </section>
    <div className="home">
      {/* ----------  FEATURE CARDS  ---------- */}
      <section className="hero-title">
        <h2>FEATURES</h2>
      </section>

      <div className="features">
        <div className="feature-card">
          <h3>RAINFALL PREDICTION</h3>
          <p>
            Forecast rainfall using AI and weather data to help you plan farming
            tasks efficiently.
          </p>
        </div>

        <div className="feature-card">
          <h3>SOIL SUGGESTION</h3>
          <p>
            Analyze your soil type to suggest crops that grow best in your land
            conditions.
          </p>
        </div>

        <div className="feature-card">
          <h3>IRRIGATION METHODS</h3>
          <p>
            Recommends smart irrigation based on crop, soil, and rainfall —
            saving water and boosting yield.
          </p>
        </div>
      </div>

      {/* ----------  HOW IT WORKS  ---------- */}
      <section className="how-section">
        <h2>How AGRIONE Works</h2>

        <div className="work-blocks">
          <div className="work-block">
            <h4>Real-Time Rainfall Forecasting</h4>
            <p>
              AGRIONE analyzes weather data to predict rainfall in your region,
              helping farmers plan sowing, harvesting, and irrigation.
            </p>
          </div>

          <div className="work-block">
            <h4>Soil-Based Crop Recommendations</h4>
            <p>
              Input your soil type to get smart suggestions on which crops will
              grow best, improving productivity and reducing risk.
            </p>
          </div>
        </div>
      </section>

      {/* ----------  WHY USE AGRIONE  ---------- */}
      <section className="why-section">
        <h2>Why Use AGRIONE?</h2>

        <div className="why-cards">
          <div className="why-card">
            <h5>AI-Driven Rainfall Forecasting</h5>
            <p>
              Know the rain before it comes. Our system predicts rainfall based
              on your location, helping you prepare in advance.
            </p>
          </div>
          <div className="why-card">
            <h5>Soil-Based Crop Suggestions</h5>
            <p>
              Just input your soil type and get personalised crop
              recommendations that suit your land’s nature.
            </p>
          </div>
          <div className="why-card">
            <h5>Smart Irrigation Planning</h5>
            <p>
              Get irrigation method suggestions that match your soil, saving
              water and improving crop health.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;
