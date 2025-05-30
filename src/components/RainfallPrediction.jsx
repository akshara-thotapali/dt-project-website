// RainfallPrediction.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/RainfallPrediction.css';

const RainfallPrediction = () => {


  const [formData, setFormData] = useState({
    location: '',
    period: '3 days',
  });

  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setPrediction('');

  try {
    const apiKey = '4182a3a4d66a4eb9bce180122252905';
    const city = formData.location;

    // Extract numeric days from user input
    const days = parseInt(formData.period.replace(/\D/g, ''), 10) || 3;

    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`
    );

    const forecastDays = response.data.forecast.forecastday;

    const result = forecastDays
      .map((day) => {
        const date = day.date;
        const condition = day.day.condition.text;
        const totalPrecip = day.day.totalprecip_mm;
        return `${date}: ${condition} — ${totalPrecip} mm precipitation`;
      })
      .join('\n');

    setPrediction(result);
  } catch (err) {
    console.error(err.response?.data || err.message);
    setError('Location not found or API error.');
  } finally {
    setLoading(false);
  }
};

  

      
  return (
    <div className="rainfall-prediction">
      <section className="description">
        <h2>Rainfall Prediction & Agricultural Planning</h2>
        <p>
          <strong>AI-Based Rainfall Forecast for Smarter Farming Decisions</strong>
          <br />
          "Rainfall is unpredictable — but your planning doesn’t have to be. Our AI model uses
          historical data and real-time weather APIs to give highly accurate rainfall predictions
          for your specific location."
        </p>
      </section>

      <form className="prediction-form" onSubmit={handleSubmit}>
        <label>
          Enter location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Prediction period:
          <input
            type="text"
            name="period"
            value={formData.period}
            onChange={handleChange}
          />
        </label>

       

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Loading...' : 'Generate Prediction'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {prediction && (
        <div className="result-box">
          <h3>Prediction Result:</h3>
          <pre>{prediction}</pre>
        </div>
      )}
    </div>
  );
};

export default RainfallPrediction;
