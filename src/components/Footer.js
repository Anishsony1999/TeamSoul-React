import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <h3>SOUL NAVIGATERS</h3>
      <h6>Technopark TVM | Thampanoor TVM | Kochi, Kerala | Nagercoil, Tamil Nadu</h6>
      <div className="certifications">
        <img src="/images/iaf-removebg-preview.png" alt="IAF Certification" />
        <img src="/images/iso-removebg-preview.png" alt="ISO Certification" />
        <img src="/images/ias.png" alt="IAS Certification" />
      </div>
      <div className="stats">
        <div>
          <span>1000+</span><br />
          CUSTAMERS ARE<br />
          PACKED EVERY YEAR
        </div>
        <div>
          <span>30+</span><br />
          TYPE FUNERAL
        </div>
        <div>
          <span>95%</span><br />
          CUSTOMER SATISFACTION
        </div>
      </div>
    </div>
  );
};

export default Footer;
