import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Choose Your Path</h2>
        <p>Select the appropriate form for your departed soul</p>
      </div>
      
      <div className="contact-buttons">
        <Link to="/male-form" className="contact-button male">
          <span className="button-glow"></span>
          <span className="button-text">Male</span>
        </Link>

        <Link to="/female-form" className="contact-button female">
          <span className="button-glow"></span>
          <span className="button-text">Female</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;