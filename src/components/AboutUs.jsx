// src/components/AboutUs.jsx
import React, { useState } from 'react';
import '../Styles/AboutUs.css';


const AboutUs = () => {
 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.firstName}! We’ve received your message.`);
  };

  return (
    <div className="about-page">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are <strong>AKSHARA</strong>, <strong>BHOOMIKA</strong>, and <strong>CHAKRIKA</strong>,
          the creators of <strong>AGRIONE</strong> – a smart farming tool to support farmers.
        </p>
        <p>
          AgriOne is an AI-powered web platform helping farmers make informed choices about
          weather, soil, and water.
        </p>
        <p>
          We believe software can simplify farming decisions and improve yields. Our system is
          fully automated, free to use, and built with real agricultural data.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Your Message</label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default AboutUs;
