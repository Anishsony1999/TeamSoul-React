import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <video className="backvideo" autoPlay loop playsInline muted>
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
      </video>
      <img id="gost" src="/images/gost-removebg-preview.png" alt="Ghost" />
      <div className='flickering-light1'>
      </div>
      <img src="/images/ghost.png" alt="ghost" 
        style={{
          zIndex: -1,
          width: '250px',
          position: 'absolute',
          top: '29%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
        }}
      />
      <div className='flickering-light2'></div>
      <div className='flickering-light3'></div>
      <div className="content">
        <h1>SOUL <br/>
        Navigaters</h1>
        <Link to="/contact">Booking</Link>
      </div>
    </div>
  );
};

export default Hero;
