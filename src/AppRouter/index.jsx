import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage";
import Home from "../components/Pages/Home";
import Profile from "../components/Pages/Profile"; // Correct path to Profile
import Settings from "../components/Pages/Settings"; // Correct path to Settings
import DashboardLayout from "../components/Dashboard/DashBoardLayout"; // Corrected capitalization

import routes from "./routes";

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionStartTime = localStorage.getItem("sessionStartTime");

    if (sessionStartTime) {
      const currentTime = new Date().getTime();
      const sessionTimeout = 60 * 60 * 1000; // 1 hour
      if (currentTime - sessionStartTime > sessionTimeout) {
        localStorage.removeItem("sessionStartTime");
        setIsLoggedIn(false);
        alert("Session expired. Please log in again.");
      } else {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    const currentTime = new Date().getTime();
    localStorage.setItem("sessionStartTime", currentTime);
  };

  return (
 
    <HashRouter>
      <Routes>
        {/* Redirect to login if not logged in */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to={routes.home} /> : <Navigate to={routes.login} />}
        />

        {/* Login Route */}
        <Route
          path={routes.login}
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />

        {/* Protected Routes: Dashboard Layout */}
        <Route
          path="/"
          element={isLoggedIn ? <DashboardLayout /> : <Navigate to={routes.login} />}
        >
          {/* Nested routes for the Dashboard layout */}
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.profile} element={<Profile />} />
          <Route path={routes.settings} element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>

  );
};

export default AppRoutes;
