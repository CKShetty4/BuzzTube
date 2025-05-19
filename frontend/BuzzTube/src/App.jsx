// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Empty, Sidebar } from './Components';
import { ChannelPage } from './Pages';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const SIDEBAR_WIDTH = isSidebarOpen ? 220 : 70;

  return (
    <Router>
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
          <Routes>
            <Route path="/subscribers" element={<ChannelPage />} />
            {/* All other paths route to Empty */}
            <Route path="*" element={<Empty title="Nothing yet" description="Please select an option from the sidebar." />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
