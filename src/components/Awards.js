import React from 'react';

const Awards = () => {
  const awards = [
    { name: 'OSCAR Award', category: 'Best Event For a Private Individual', year: '2020' },
    { name: 'SCOPE INDIA', category: 'Best Event For a Private Individual', year: '2019' },
    { name: 'OSCAR Award', category: 'Best Event For a Private Individual', year: '2014' },
    { name: 'SUN Esprit', category: 'Best Team Effort', year: '2014' },
    { name: 'BEHINDWOOD Award', category: 'Best Cleaning Team', year: '2020' },
    { name: 'PARITHABAGAL', category: 'Best Event Management', year: '2015' },
    { name: 'MANI Award', category: 'Best Event Decoration', year: '2017' },
    { name: 'SONY AWARD', category: 'Best Food and Cleaning', year: '2019' },
    { name: 'KANYAKANUMAI Award', category: 'Best Client Award', year: '2012' },
    { name: 'VICRAM Award', category: 'Nominee', year: '2019' }
  ];

  return (
    <div className="awards-section">
      <div className="awards-header">
        <h2>Award-Winning Excellence</h2>
        <p>Celebrating Our Achievements in Service and Innovation</p>
      </div>
      
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="award-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="award-content">
              <h3>{award.name}</h3>
              <p className="award-category">{award.category}</p>
              <span className="award-year">{award.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
