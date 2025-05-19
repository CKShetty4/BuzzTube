// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {
  home, like, history, content,
  collection, subscribers, suport, settings
} from '../../assets';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-section">
        <SidebarItem icon={home} text="Home" to="/" isOpen={isOpen} />
        <SidebarItem icon={like} text="Liked" to="/liked" isOpen={isOpen} />
        <SidebarItem icon={history} text="History" to="/history" isOpen={isOpen} />
        <SidebarItem icon={content} text="My Content" to="/content" isOpen={isOpen} />
        <SidebarItem icon={collection} text="Collections" to="/collections" isOpen={isOpen} />
        <SidebarItem icon={subscribers} text="Subscribers" to="/subscribers" isOpen={isOpen} />
      </div>

      <div className="sidebar-bottom">
        <SidebarItem icon={suport} text="Support" to="/support" isOpen={isOpen} />
        <SidebarItem icon={settings} text="Settings" to="/settings" isOpen={isOpen} />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen, to }) => (
  <Link to={to} className="sidebar-item-link">
    <div className="sidebar-item">
      <img src={icon} alt={text} className="sidebar-icon" />
      {isOpen && <span className="sidebar-text">{text}</span>}
    </div>
  </Link>
);

export default Sidebar;
