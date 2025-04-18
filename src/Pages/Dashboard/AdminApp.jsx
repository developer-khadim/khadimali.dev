import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

// Pages
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Expertise from "./Pages/Expertise";
import UserProfile from "./Pages/UserProfile";
import Header from "./Components/Header";
import Experience from "./Pages/Experience";
import { useSelector } from "react-redux";
import AllMessages from "./Pages/AllMessages";

const AdminApp = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div className={`min-h-screen flex ${darkMode ? "dark" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/settings" element={<UserProfile />} />
            <Route path="/messages" element={<AllMessages />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminApp;
