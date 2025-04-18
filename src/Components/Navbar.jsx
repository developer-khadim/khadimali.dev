import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import Logo from "./Logo";
import ReusableBtn from "../Pages/Dashboard/Components/ReusableBtn";
import { motion } from "framer-motion";
import { socialIconVariants } from "../AnimationVariants/variants.";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { NavItems, USER_API_ENDPOINT } from "../constant/data";
import useGetData from "../Hooks/useGetData";

const Navbar = () => {
  const { data: userData } = useGetData(`${USER_API_ENDPOINT}/profile`);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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

  const user = userData?.user || {
    name: "Khadim Ali",
    email: "ab.ali.soomro@gmail.com",
    aboutText:
      "Experienced React Frontend Developer specializing in crafting scalable, high-performance web applications.",
    phone: "+923052879926",
    githubURL: "https://github.com/developer-abdulali",
    linkedinURL: "https://www.linkedin.com/in/abdulali12/",
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress * 100}%`,
            opacity: isScrolled ? 1 : 0,
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full px-2 my-1 sm:px-3 md:px-5 transition-all duration-300 fixed top-0 left-0 z-50 backdrop-blur-md
        ${
          isScrolled
            ? "shadow-lg border-b border-gray-200 dark:border-accent bg-white/90 dark:bg-transparent"
            : "shadow-none border-b border-gray-200 dark:border-dark-secondary bg-white dark:bg-transparent"
        }`}
        style={{ height: "60px" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-0 xl:px-7 2xl:px-6 2xl:max-w-screen-2xl">
          <Logo />

          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <ReusableBtn
              type="button"
              onClick={toggleTheme}
              icon={
                isDarkMode ? (
                  <Sun size={22} className="text-white/80" />
                ) : (
                  <Moon size={22} className="text-primary" />
                )
              }
              isMr={false}
              className="md:hidden"
            />

            <ReusableBtn
              type="button"
              onClick={toggleMenu}
              icon={isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              isMr={false}
              className="md:hidden"
            />
          </div>

          {/* Desktop Theme Toggle */}
          <ReusableBtn
            type="button"
            onClick={toggleTheme}
            icon={
              isDarkMode ? (
                <Sun size={22} className="text-white/80" />
              ) : (
                <Moon size={22} className="text-primary" />
              )
            }
            isMr={false}
            className="hidden md:flex"
          />

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="bg-white dark:bg-gray-900 w-full md:hidden h-screen absolute top-[56px] left-0 backdrop-blur-lg shadow-xl rounded-b-2xl transition-all duration-300">
              <div className="flex flex-col space-y-3 px-6 py-24">
                {NavItems?.map((item) => (
                  <a
                    key={item.id}
                    href={item.to}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      document
                        .querySelector(item.to)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="relative flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all duration-300 font-semibold rounded-lg hover:bg-gray-200/50 dark:hover:bg-dark-accent/50 group"
                  >
                    <item.icon
                      size={20}
                      className="mr-3 text-primary dark:text-accent"
                    />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4">
                <motion.a
                  custom={0}
                  variants={socialIconVariants}
                  whileTap={{ scale: 0.9 }}
                  href="https://wa.me/+923052879926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                  aria-label="Chat with me on WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 group-hover:text-primary group-hover:rotate-6 transition-all duration-300" />
                </motion.a>

                <motion.a
                  custom={0}
                  variants={socialIconVariants}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  // href={`mailto:${user?.email}`}
                  className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                  aria-label="Email me"
                >
                  <HiOutlineMail className="w-5 h-5 group-hover:text-primary group-hover:rotate-6 transition-all duration-300" />
                </motion.a>

                <motion.a
                  custom={1}
                  variants={socialIconVariants}
                  whileHover={{ rotate: 6 }}
                  href="#"
                  // href={user?.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                  aria-label="Visit my GitHub"
                >
                  <FiGithub className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
                </motion.a>

                <motion.a
                  custom={2}
                  variants={socialIconVariants}
                  whileHover={{ rotate: 5 }}
                  href="#"
                  // href={user?.linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                  aria-label="Visit my LinkedIn"
                >
                  <LuLinkedin className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
                </motion.a>

                <motion.a
                  custom={3}
                  variants={socialIconVariants}
                  whileHover={{ rotate: 6 }}
                  href="#"
                  // href={`tel:${user?.phone}`}
                  className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                  aria-label="Call me"
                >
                  <FiPhone className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
                </motion.a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
