import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route from react-router-dom
import { Header, Sidebar, MainContent, SidebarLink, Footer,LogoutLayout,MainContent2 } from './DashBoardLayoutStyle';

// Import the necessary pages/components for the routes
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';

const DashBoardLayout = () => {
  return (
    <>
    <Header>
      <h1>My Dashboard</h1>
      <LogoutLayout>Logout</LogoutLayout>
    </Header>
    
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/profile">Profile</SidebarLink>
        <SidebarLink to="/settings">Settings</SidebarLink>
      </Sidebar>

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainContent>
      <MainContent2>
        <div>
         {/* Content */}
        </div>
      </MainContent2>
      
      
    </div>

    <Footer>
      <p>&copy; 2024 My Dashboard. All Rights Reserved.</p>
    </Footer>
  </>
  );
};

export default DashBoardLayout;
