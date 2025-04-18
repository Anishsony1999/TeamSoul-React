import React from 'react';
import { Link } from 'react-router-dom';
import './Pass.css';

const Pass = () => {
  const passes = {
    platinum: {
      title: 'PLATINUM Pass',
      color: '#9f8585',
      image: '/images/platinam pass.png',
      badge: '/images/brance-removebg-preview.png',
      features: [
        'Decoration',
        'Chair',
        'Dispose',
        'Home Cleaning',
        'Home Painting'
      ]
    },
    gold: {
      title: 'GOLD Pass',
      color: '#ffea00',
      image: '/images/gold pass.png',
      badge: '/images/gold-removebg-preview.png',
      features: [
        'Decoration',
        'Welcome Drink',
        'Coffin Dance',
        'Event Dress',
        'Traffic Management',
        'Breakfast, Lunch & Dinner',
        'Parking Arrangement',
        'Royal Adakam',
        'Special Vehicle',
        'Flowers',
        'Home Cleaning',
        'Home Painting',
        'Things Arrangement',
        'Night Party',
        'A-Z with Adiyantharam'
      ]
    },
    silver: {
      title: 'SILVER Pass',
      color: '#ffe2c5',
      image: '/images/silver pass.png',
      badge: '/images/silver-removebg-preview.png',
      features: [
        'Coffin Dance',
        'Event Dress',
        'Welcome Drinks',
        'Decoration',
        'Home Cleaning',
        'Home Painting',
        'Parking Arrangement',
        'Flowers',
        'Royal Adakam',
        'Breakfast & Lunch',
        'Traffic Management'
      ]
    }
  };

  return (
    <div className="pass-container">
      {Object.entries(passes).map(([type, pass]) => (
        <div key={type} className={`pass-card ${type}`}>
          <img id="pass" src={pass.image} alt={`${type} Pass`} />
          <img id="rot" src={pass.badge} height={type === 'gold' ? '90' : '100'} alt={type} />
          <span>
            <h4 style={{ color: pass.color, marginLeft: '24px' }}>{pass.title}</h4>
            <br />
            {pass.features.map((feature, index) => (
              <React.Fragment key={index}>
                &#128123;&nbsp;&nbsp;&nbsp; {feature}<br />
              </React.Fragment>
            ))}
          </span>
          <br />
          <Link to="/contact"><button>Booking</button></Link>
        </div>
      ))}
    </div>
  );
};

export default Pass;