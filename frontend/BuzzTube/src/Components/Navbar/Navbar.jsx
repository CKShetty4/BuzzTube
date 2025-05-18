// Navbar.jsx
import React from 'react';
import './Navbar.css';
import { BuzzTubeLogo, search, uploadnav, user } from '../../assets';

const Navbar = () => {
  return (
    <nav className="navbar flex-div">
      <div className="nav-left flex-div">
        <img src={BuzzTubeLogo} alt="BuzzTube Logo" className="logo" />
      </div>

      <div className="nav-center flex-div">
        <div className="search-bar flex-div">
          <input type="text" placeholder="Search" className="search-input" />
          <img src={search} alt="Search Icon" className="search-icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploadnav} alt="Upload" className="nav-icon" />
        <img src={user} alt="User Profile" className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
