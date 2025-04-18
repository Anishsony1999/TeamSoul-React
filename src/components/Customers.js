import React from 'react';
import './Customers.css';

const Customers = () => {
  const customers = [
    {
      name: 'A.P.J.Abdul Kalam',
      position: 'President Of India',
      image: '/images/A._P._J._Abdul_Kalam.jpg.webp',
      born: '15 October 1931',
      service: '27 July 2015'
    },
    {
      name: 'Elizabeth II',
      position: 'Queen of Great Britain',
      image: '/images/Elizabeth-II-2007.webp',
      born: '21 April 1926',
      service: '8 September 2022'
    },
    {
      name: 'J.Jayalalithaa',
      position: 'Chief Minister of Tamil Nadu',
      image: '/images/J_Jayalalithaa.jpg',
      born: '24 February 1948',
      service: '5 December 2016'
    },
    {
      name: 'M.Karunanidhi',
      position: 'Chief Minister of Tamil Nadu',
      image: '/images/M._Karunanidhi_.jpg',
      born: '3 June 1924',
      service: '7 August 2018'
    },
    {
      name: 'M.G.Ramachandran',
      position: 'Chief Minister of Tamil Nadu',
      image: '/images/mgr.jpeg',
      born: '17 January 1917',
      service: '24 December 1987'
    },
    {
      name: 'Atal Bihari Vajpayee',
      position: 'President Of India',
      image: '/images/vajpay.jpeg',
      born: '25 December',
      service: '16 August 2018'
    },
    {
      name: 'Sivaji Ganesan',
      position: 'India Actor',
      image: '/images/Sivaji_Ganesan4.jpg',
      born: '1 October 1928',
      service: '21 July 2001'
    },
    {
      name: 'Kalabhavan Mani',
      position: 'India Actor',
      image: '/images/kalabigan.jpg',
      born: '1 January 1971',
      service: '6 March 2016'
    },
    {
      name: 'Captain America',
      position: 'Cap of Avengers',
      image: '/images/cap.webp',
      born: '1 January 1975',
      service: '6 July 2022'
    },
    {
      name: 'Hitler',
      position: 'Politician',
      image: '/images/hit.jpeg',
      born: '20 April 1889',
      service: '6 March 2016'
    }
  ];

  return (
    <div className="customers-container">
      <h2 className="customers-title">Eternal Souls</h2>
      <section className="customers-subtitle">
        1000's of Souls Have Found Their Final Peace Through Our Services
      </section>

      <div className="customers-grid">
        {customers.map((customer, index) => (
          <div key={index} className="customer-card">
            <div className="customer-image">
              <img src={customer.image} alt={customer.name} />
            </div>
            <div className="customer-content">
              <h3>{customer.name}</h3>
              <p className="position">{customer.position}</p>
              <div className="customer-dates">
                <h5>Born: {customer.born}</h5>
                <h5>Service On: {customer.service}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;