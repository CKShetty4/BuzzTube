import React, { useState } from 'react';
import { Navbar, Sidebar } from './Components';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const SIDEBAR_WIDTH = isSidebarOpen ? 220 : 70;

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div style={{ paddingTop: '60px' }}>
        <Sidebar isOpen={isSidebarOpen} />
        <div
          style={{
            marginLeft: `${SIDEBAR_WIDTH}px`,
            height: 'calc(100vh - 60px)',
            overflowY: 'auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <div style={{ minHeight: '200vh' }}>
            App Content (scrollable)
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
