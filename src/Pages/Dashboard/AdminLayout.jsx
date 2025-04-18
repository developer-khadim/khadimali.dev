import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const AdminLayout = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen flex ${darkMode ? "dark" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
