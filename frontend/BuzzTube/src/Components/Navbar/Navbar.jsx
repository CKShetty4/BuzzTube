import React, { useState } from 'react';
import './Navbar.css';
import { BuzzTubeLogo, search, uploadnav, user } from '../../assets';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="navbar flex-div">
      <div className="nav-left flex-div">
        <div
          className={`hamburger ${isSidebarOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/">
        <img src={BuzzTubeLogo} to="/" alt="BuzzTube Logo" className="logo" />
        </Link>
      </div>

      <div className="nav-center flex-div">
        <div className="search-bar flex-div">
          <input type="text" placeholder="Search" className="search-input" />
          <img src={search} alt="Search Icon" className="search-icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploadnav} alt="Upload" className="nav-icon" />
        <div className="user-icon-circle">
          <img src={user} alt="User Profile" className="nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
