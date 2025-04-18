import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiX,
  FiHome,
  FiFolder,
  FiBook,
  FiCode,
  FiSettings,
  FiMenu,
  FiChevronRight,
} from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { TiMessages } from "react-icons/ti";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  const [activeHover, setActiveHover] = useState(null);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-2xl dark:shadow-gray-950 overflow-y-auto transform transition-all duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-[18px] border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <h1 className="text-lg font-bold text-primary dark:text-secondary">
                Welcome to {user?.name || "Khadim Ali"}
              </h1>
            </div>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? (
                  <FiX className="w-6 h-6 transform transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
            {[
              { to: "/admin", icon: <FiHome />, text: "Dashboard" },
              { to: "/admin/projects", icon: <FiFolder />, text: "Projects" },
              { to: "/admin/education", icon: <FiBook />, text: "Education" },
              { to: "/admin/expertise", icon: <FiCode />, text: "Expertise" },
              {
                to: "/admin/experience",
                icon: <MdWorkOutline />,
                text: "Experience",
              },
              { to: "/admin/messages", icon: <TiMessages />, text: "Messages" },
              { to: "/admin/settings", icon: <FiSettings />, text: "Settings" },
            ].map((link) => (
              <SidebarLink
                key={link.to}
                {...link}
                active={location.pathname === link.to}
                hoverState={[activeHover, setActiveHover]}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

const SidebarLink = ({ to, icon, text, active, hoverState }) => {
  const [activeHover, setActiveHover] = hoverState;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`
         relative flex items-center px-4 py-3 text-sm dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:text-white
              shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
              hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
              dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
              dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
               hover:border-indigo-700 dark:hover:border-indigo-500
              transition-all duration-300 ease-in-out select-none 
              
 group ${
   active ? "shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]" : "bg-white"
 }`}
      onMouseEnter={() => {
        setIsHovered(true);
        setActiveHover(to);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveHover(null);
      }}
    >
      <span
        className={`mr-3 transition-all duration-300 ${
          active
            ? "text-purple-600 dark:text-purple-400"
            : "text-gray-500 dark:text-gray-400"
        } ${isHovered && !active ? "scale-125" : ""}`}
      >
        {icon}
      </span>

      <span
        className={`transition-transform duration-300 ${
          isHovered ? "translate-x-1" : ""
        }`}
      >
        {text}
      </span>

      {/* Animated chevron */}
      {!active && (
        <FiChevronRight
          className={`ml-auto opacity-0 transform -translate-x-1 transition-all duration-300 ${
            activeHover === to ? "opacity-100 translate-x-0 text-blue-500" : ""
          }`}
        />
      )}

      {/* Hover effect */}
      {!active && (
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-purple-400 to-blue-400" />
      )}
    </Link>
  );
};

export default Sidebar;
