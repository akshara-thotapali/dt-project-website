// components/SoilSuggestions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SoilSuggestions.css';

const soils = [
  {
    type: 'Clay Soil',
    climate: 'Best for moderate to high rainfall areas',
    description: 'Heavy, dense soil that retains water and nutrients well but drains slowly.',
    crops: ['Rice', 'Wheat', 'Cotton', 'Corn'],
    tips: '/irrigation#clay-soil'
  },
  {
    type: 'Sandy Soil',
    climate: 'Best for low to moderate rainfall areas',
    description: "Light soil that drains quickly but doesn't retain nutrients well.",
    crops: ['Carrots', 'Potatoes', 'Lettuce', 'Strawberries'],
    tips: '/irrigation#sandy-soil'
  },
  {
    type: 'Silt Soil',
    climate: 'Best for moderate rainfall areas',
    description: 'Smooth, fine-textured soil that holds water well but can become compacted.',
    crops: ['Roses', 'Perennials', 'Shrubs', 'Most vegetables'],
    tips: '/irrigation#silt-soil'
  },
  {
    type: 'Loamy Soil',
    climate: 'Best for moderate rainfall areas',
    description: 'Perfect balance of sand, silt, and clay with excellent drainage and nutrient retention.',
    crops: ['Corn', 'Soybeans', 'Vegetables', 'Fruit trees'],
    tips: '/irrigation#loamy-soil'
  },
  {
    type: 'Chalky Soil',
    climate: 'Best for low to moderate rainfall areas',
    description: 'Alkaline soil with high lime content, drains freely but may lack nutrients.',
    crops: ['Lavender', 'Spinach', 'Cabbage', 'Beets'],
    tips: '/irrigation#chalky-soil'
  },
];

const SoilSuggestions = () => {


  return (
    <div className="soil-suggestions">
      <h2>Find the Best Soil Type for Your Crop</h2>
      <div className="soil-grid">
        {soils.map((soil, index) => (
          <div key={index} className="soil-card">
            <h3>{soil.type}</h3>
            <p className="climate">{soil.climate}</p>
            <p>{soil.description}</p>
            <p><strong>Suitable Crops:</strong> {soil.crops.join(', ')}</p>
            <Link className="irrigation-btn" to={soil.tips}>View Irrigation Tips</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoilSuggestions;
