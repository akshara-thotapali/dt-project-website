import React from 'react';
import '../Styles/Home.css';
import FarmerImg from '../assets/farmer.svg';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            {i18n.language === 'te' ? t('welcome') : 'Welcome to AGRIONE'}
          </h1>
          <p>
            {i18n.language === 'te'
              ? t('description')
              : 'Smart Farming with AI-powered predictions. Plan better. Grow smarter.'}
          </p>
        </div>
        <div className="hero-right">
          <img src={FarmerImg} alt="Farmer Illustration" className="farmer-img" />
        </div>
      </section>

      {/* ----------  FEATURE CARDS  ---------- */}
      <section className="hero-title">
        <h2>{i18n.language === 'te' ? t('features') : 'FEATURES'}</h2>
      </section>

      <div className="features">
        <div className="feature-card">
          <h3>{i18n.language === 'te' ? t('rainfall') : 'RAINFALL PREDICTION'}</h3>
          <p>
            {i18n.language === 'te'
              ? t('rainfall_desc')
              : 'Forecast rainfall using AI and weather data to help you plan farming tasks efficiently.'}
          </p>
        </div>

        <div className="feature-card">
          <h3>{i18n.language === 'te' ? t('soil') : 'SOIL SUGGESTION'}</h3>
          <p>
            {i18n.language === 'te'
              ? t('soil_desc')
              : 'Analyze your soil type to suggest crops that grow best in your land conditions.'}
          </p>
        </div>

        <div className="feature-card">
          <h3>{i18n.language === 'te' ? t('irrigation') : 'IRRIGATION METHODS'}</h3>
          <p>
            {i18n.language === 'te'
              ? t('irrigation_desc')
              : 'Recommends smart irrigation based on crop, soil, and rainfall — saving water and boosting yield.'}
          </p>
        </div>
      </div>

      {/* ----------  HOW IT WORKS  ---------- */}
      <section className="how-section">
        <h2>{i18n.language === 'te' ? t('howWorks') : 'How AGRIONE Works'}</h2>

        <div className="work-blocks">
          <div className="work-block">
            <h4>{i18n.language === 'te' ? t('realTime') : 'Real-Time Rainfall Forecasting'}</h4>
            <p>
              {i18n.language === 'te'
                ? t('realTime_desc')
                : 'AGRIONE analyzes weather data to predict rainfall in your region, helping farmers plan sowing, harvesting, and irrigation.'}
            </p>
          </div>

          <div className="work-block">
            <h4>{i18n.language === 'te' ? t('soilBased') : 'Soil-Based Crop Recommendations'}</h4>
            <p>
              {i18n.language === 'te'
                ? t('soilBased_desc')
                : 'Input your soil type to get smart suggestions on which crops will grow best, improving productivity and reducing risk.'}
            </p>
          </div>
        </div>
      </section>

      {/* ----------  WHY USE AGRIONE  ---------- */}
      <section className="why-section">
        <h2>{i18n.language === 'te' ? t('whyUse') : 'Why Use AGRIONE?'}</h2>

        <div className="why-cards">
          <div className="why-card">
            <h5>{i18n.language === 'te' ? t('aiRain') : 'AI-Driven Rainfall Forecasting'}</h5>
            <p>
              {i18n.language === 'te'
                ? t('aiRain_desc')
                : 'Know the rain before it comes. Our system predicts rainfall based on your location, helping you prepare in advance.'}
            </p>
          </div>
          <div className="why-card">
            <h5>{i18n.language === 'te' ? t('soilCrop') : 'Soil-Based Crop Suggestions'}</h5>
            <p>
              {i18n.language === 'te'
                ? t('soilCrop_desc')
                : 'Just input your soil type and get personalised crop recommendations that suit your land’s nature.'}
            </p>
          </div>
          <div className="why-card">
            <h5>{i18n.language === 'te' ? t('smartIrrigation') : 'Smart Irrigation Planning'}</h5>
            <p>
              {i18n.language === 'te'
                ? t('smartIrrigation_desc')
                : 'Get irrigation method suggestions that match your soil, saving water and improving crop health.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
