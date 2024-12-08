import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import {
  Header,
  Sidebar,
  MainContent,
  SidebarLink,
  Footer,
  LogoutLayout,
} from "./DashBoardLayoutStyle";


import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";

const DashBoardLayout = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <Header>
        <h1>My Dashboard</h1>
        <LogoutLayout>Logout</LogoutLayout>
      </Header>

      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar>
          <SidebarLink onClick={() => handleNavigation("/home")}>Home</SidebarLink>
          <SidebarLink onClick={() => handleNavigation("/profile")}>Profile</SidebarLink>
          <SidebarLink onClick={() => handleNavigation("/settings")}>
            Settings
          </SidebarLink>
        </Sidebar>

        {/* Main Content Area */}
        <MainContent>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainContent>
      </div>

      <Footer>
        <p>&copy; 2024 My Dashboard. All Rights Reserved.</p>
      </Footer>
    </>
  );
};

export default DashBoardLayout;
