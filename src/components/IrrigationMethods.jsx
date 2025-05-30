import React from 'react';
import '../Styles/IrrigationMethods.css';

const irrigationData = [
  {
    id: 'clay-soil',
    title: 'Clay Soil',
    tips: [
      'Drip irrigation to avoid waterlogging',
      'Deep, infrequent watering sessions',
      'Install drainage systems',
    ],
  },
  {
    id: 'sandy-soil',
    title: 'Sandy Soil',
    tips: [
      'Frequent, light watering',
      'Use sprinklers for even coverage',
      'Add organic matter to improve retention',
    ],
  },
  {
    id: 'silt-soil',
    title: 'Silt Soil',
    tips: [
      'Avoid overwatering',
      'Ensure good drainage',
      'Monitor compaction and aerate when needed',
    ],
  },
  {
    id: 'loamy-soil',
    title: 'Loamy Soil',
    tips: [
      'Regular, moderate watering',
      'Both drip and sprinkler systems work well',
      'Monitor soil moisture levels',
    ],
  },
  {
    id: 'chalky-soil',
    title: 'Chalky Soil',
    tips: [
      'Regular watering during dry periods',
      'Add organic matter to improve retention',
      'Mulch to conserve moisture',
    ],
  },
];

const rainfallSuggestions = [
  {
    zone: 'Low Rainfall Area (<500mm/year)',
    methods: [
      {
        name: 'Drip Irrigation',
        details: 'Extremely efficient water use. Essential for water-scarce areas. Apply mulch to reduce evaporation.',
      },
      {
        name: 'Micro-sprinklers',
        details: 'Targeted application with good coverage. Useful for tree crops with broader needs.',
      },
    ],
  },
  {
    zone: 'High Rainfall Area (>1000mm/year)',
    methods: [
      {
        name: 'Drainage Systems',
        details: 'Prevent waterlogging with tile drainage, ditches, and raised beds.',
      },
      {
        name: 'Supplemental Irrigation',
        details: 'Targeted irrigation during dry spells ensures continuous crop health.',
      },
    ],
  },
];

const IrrigationMethods = () => {
  return (
    <div className="irrigation-page">
      <header className="irrigation-header">
        <h2>🌱 Smart Irrigation Planning for Every Crop and Soil</h2>
        <p>
          Using the right irrigation method can save water, time, and money. Based on your crop and soil, we suggest the most efficient irrigation technique to maximize yield.
        </p>
      </header>

      <section className="soil-irrigation">
        <h3>💧 Irrigation Tips by Soil Type</h3>
        <div className="irrigation-cards">
          {irrigationData.map((item) => (
            <div key={item.id} className="irrigation-card">
              <h4>{item.title}</h4>
              <ul>
                {item.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rainfall-irrigation">
        <h3>☔ Irrigation by Rainfall Pattern</h3>
        <div className="rainfall-groups">
          {rainfallSuggestions.map((group, index) => (
            <div key={index} className="rainfall-block">
              <h4>{group.zone}</h4>
              {group.methods.map((method, i) => (
                <div key={i} className="rainfall-method">
                  <strong>{method.name}</strong>
                  <p>{method.details}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        &copy; 2025 Agrione. All rights reserved.
      </footer>
    </div>
  );
};

export default IrrigationMethods;