import React from 'react';

const CoffinDisplay = () => {
  const items = [
    { img: '/images/coffin/co1.avif', title: "RGB Plant", price: "2.4- 4 lakhs" },
    { img: '/images/coffin/co2.jpeg', title: "Flower Show", price: "6- 8 lakhs" },
    { img: '/images/coffin/co3.jpeg', title: "Flower Show 2", price: "4.4- 6 lakhs" },
    { img: '/images/coffin/co4.jpeg', title: "Flower Show 3", price: "2.4- 4 lakhs" },
    { img: '/images/coffin/co5.jpeg', title: "Jaind Loga", price: "2- 3 lakhs" },
    { img: '/images/coffin/co6.jpeg', title: "Bed Room set", price: "2- 5 lakhs" },
    { img: '/images/coffin/co7.jpeg', title: "SLEEPING Car", price: "20- 40 lakhs" },
    { img: '/images/coffin/co8.jpeg', title: "Golden Bed", price: "40- 50 lakhs" },
    { img: '/images/coffin/co9.webp', title: "Study Box", price: "3- 4 lakhs" },
  ];

  return (
    <div className="show">
      {items.map((item, index) => (
        <div key={index} className="show-item">
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
          <h5>thiruvandram(thiruvanathapuram)</h5>
          <h6>panning fee</h6>
          <h4>&#8377; {item.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default CoffinDisplay;
