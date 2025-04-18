import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/images/logo.png" width="80px" alt="TEAM Soul Logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
};

export default Header;
