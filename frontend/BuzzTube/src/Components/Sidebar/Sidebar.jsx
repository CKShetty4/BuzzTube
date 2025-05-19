import React from 'react';
import './Sidebar.css';
import { home, like, history, content, collection, subscribers, suport, settings } from '../../assets';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-section">
        <SidebarItem icon={home} text="Home" isOpen={isOpen} />
        <SidebarItem icon={like} text="Liked" isOpen={isOpen} />
        <SidebarItem icon={history} text="History" isOpen={isOpen} />
        <SidebarItem icon={content} text="My Content" isOpen={isOpen} />
        <SidebarItem icon={collection} text="Collections" isOpen={isOpen} />
        <SidebarItem icon={subscribers} text="Subscribers" isOpen={isOpen} />
      </div>

      <div className="sidebar-bottom">
        <SidebarItem icon={suport} text="Support" isOpen={isOpen} />
        <SidebarItem icon={settings} text="Settings" isOpen={isOpen} />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="sidebar-item">
    <img src={icon} alt={text} className="sidebar-icon" />
    {isOpen && <span className="sidebar-text">{text}</span>}
  </div>
);

export default Sidebar;
