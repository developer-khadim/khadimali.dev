import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`flex items-center px-2 py-2 text-sm border border-indigo-600
    shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
    dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
    transition-all duration-300 ease-in-out select-none
    dark:bg-gray-800 dark:text-white fixed bottom-4 right-4 p-3 bg-white text-black rounded-full sm:hidden ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default GoToTopButton;
