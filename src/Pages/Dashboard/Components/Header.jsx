import React, { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiSearch,
  FiMoon,
  FiSun,
  FiUser,
  FiLogOut,
  FiLoader,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../../constant/data";
import { logoutUser } from "../../../redux/slices/userSlice";

const Header = ({ setSidebarOpen }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const profileRef = useRef(null);

  // Dark mode setup
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const isDark = storedDarkMode === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.get(`${USER_API_ENDPOINT}/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(logoutUser());
        navigate("/login");
        toast.success(res.data.message || "Success logged out!");
      } else {
        toast.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(
        error.response.data.message || "An error occurred while logging out"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-2">
      {/* <div className="px-4 sm:px-6 lg:px-8"> */}
      <div className="flex items-center justify-between h-16">
        {/* Sidebar Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu className="h-6 w-6" />
        </motion.button>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
        >
          <motion.div
            animate={{ rotate: darkMode ? 0 : -90 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {darkMode ? (
              <FiSun className="h-6 w-6 text-amber-500" />
            ) : (
              <FiMoon className="h-6 w-6 text-indigo-600" />
            )}
          </motion.div>
        </motion.button>

        {/* Profile Dropdown */}
        <div className="relative ml-3" ref={profileRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProfileOpen(!profileOpen)}
            className="relative group"
          >
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white shadow-lg relative overflow-hidden">
              <FiUser className="h-4 w-4" />
            </div>
          </motion.button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 origin-top-right"
              >
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-xl ring-1 ring-black/5 dark:ring-white/10 py-2">
                  <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200/50 dark:border-gray-700/50">
                    Signed in as{" "}
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {user?.email || ""}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    {isLoading ? (
                      <FiLoader className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <FiLogOut className="mr-2 h-4 w-4" />
                    )}
                    <p className="dark:text-white">
                      {isLoading ? "Logging out..." : "Logout"}
                    </p>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
