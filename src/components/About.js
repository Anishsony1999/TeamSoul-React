import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'fas fa-network-wired',
      title: 'Professional Network',
      description: 'Event organizers and planners have some of the most proficient networks in the industry to get last minute executions possible.'
    },
    {
      icon: 'fas fa-coins',
      title: 'Cost Efficiency',
      description: 'Professional event organizers can help you cut down on unwanted costs that often occur while hosting events.'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Organization & Detailing',
      description: 'With years of experience, event organizers ensure a holistic arrangement and pay close attention to details that makes an event successful.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Negotiation Skills',
      description: 'Event organizers offers unmatched deals with their industry knowledge and negotiation skills.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Time Saving & Stress Relief',
      description: 'You can save a lot of hours that are required to put up with an event. Event organizers will take all the burden of numerous decisions, travelling and efforts.'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Legal & Logistics',
      description: 'Whether it\'s insurance, getting approvals from government bodies or booking last minute flight tickets, event organizers in Trivandrum deal with them all.'
    }
  ];

  return (
    <div className="about" id="about">
      <div className="about-header">
        <h2>Why Choose Us</h2>
        <p>Expert Event Management Services in Trivandrum</p>
      </div>
      
      <div className="about-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
