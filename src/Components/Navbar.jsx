import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import Logo from "./Logo";

import { NavItems } from "../constant/data";


const Navbar = () => {

  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollHeight > 0 ? Math.min(scrollY / scrollHeight, 1) : 0;

      setIsScrolled(scrollY > 20);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%`, opacity: isScrolled ? 1 : 0 }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full px-2 sm:px-3 md:px-5 transition-all duration-300 fixed top-0 left-0 z-50 backdrop-blur-md
        ${isScrolled
            ? "shadow-lg border-b border-gray-200/80 dark:border-accent/50 bg-white/90 dark:bg-dark-secondary/80" // Adjusted opacity and borders
            : "shadow-none border-b border-transparent dark:border-transparent bg-white dark:bg-dark-primary" // Start transparent or solid based on theme
          }`}
        style={{ height: "60px" }}
      >
        <div className="md:w-[78vw] sm:w-[90vw] w-[95vw] mx-auto flex justify-between items-center h-full"> {/* Adjusted widths */}
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation & Theme Toggle (Combined for potential future nav items) */}
          <div className="hidden md:flex items-center space-x-6">
             {/* Desktop Nav Items could go here if needed */}
             {/* {NavItems.map((item) => ( <a key={item.id} href={item.to}>...</a> ))} */}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-dark-accent/80 transition-all duration-200"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? <Sun size={20} className="text-secondary" /> : <Moon size={20} className="text-primary" />}
            </button>
             {/* Potentially Login/Signup or User Profile Button */}
             {/* <ReusableBtn text="Login" onClick={() => {}} /> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent" // Added focus states
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen} // Accessibility improvement
            aria-controls="mobile-menu" // Accessibility improvement
          >
            {/* Keep Menu icon even when open, X is inside drawer */}
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Close menu when backdrop is clicked
        aria-hidden="true" // Hide from screen readers when not visible
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu" // For aria-controls
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white dark:bg-dark-secondary shadow-xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog" // Accessibility
        aria-modal="true" // Accessibility
        aria-labelledby="mobile-menu-title" // Accessibility (add title below)
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-dark-accent">
          <h2 id="mobile-menu-title" className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-accent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-grow p-4 space-y-3 overflow-y-auto">
          {NavItems.map((item) => (
            <a
              key={item.id}
              href={item.to}
              onClick={(e) => {
                e.preventDefault(); // Keep smooth scroll behavior
                setIsMenuOpen(false); // Close menu on click
                // Optional: Slight delay to let menu close before scrolling
                setTimeout(() => {
                    document.querySelector(item.to)?.scrollIntoView({ behavior: "smooth" });
                }, 150); // Adjust delay as needed
              }}
              className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all duration-200 font-medium rounded-lg hover:bg-gray-100/80 dark:hover:bg-dark-accent/60 group" // Increased padding, adjusted hover bg
            >
              <item.icon size={20} className="mr-4 text-primary dark:text-accent flex-shrink-0" /> {/* Increased margin */}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

         {/* Drawer Footer - Theme Toggle */}
         <div className="p-4 border-t border-gray-200 dark:border-dark-accent mt-auto">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-dark-accent dark:hover:bg-opacity-80 transition-all duration-200"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? <Sun size={20} className="mr-3" /> : <Moon size={20} className="mr-3" />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
         </div>
      </div>
    </>
  );
};

export default Navbar;