import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Home,
  Code,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Contact,
} from "lucide-react";

const SidebarNav = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [isMounted, setIsMounted] = useState(false);

  const navItems = [
    { id: "home", icon: Home, label: "Home", to: "#home" },
    { id: "code", icon: Code, label: "Skills & Experiences", to: "#code" },
    {
      id: "education",
      icon: GraduationCap,
      label: "Academic Journey",
      to: "#education",
    },
    { id: "work", icon: Briefcase, label: "Experiences", to: "#work" },
    { id: "projects", icon: FolderGit2, label: "Projects", to: "#projects" },
    { id: "contact", icon: Contact, label: "contact", to: "#contact" },
  ];

  // Handle scroll to auto-activate sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const item of navItems) {
        const section = document.querySelector(item.to);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + scrollY;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (
            scrollY + windowHeight / 2 >= sectionTop &&
            scrollY + windowHeight / 2 < sectionBottom
          ) {
            setActiveIcon(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Trigger entrance animation on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-50">
      <div
        className={`bg-white dark:bg-dark-secondary rounded-full shadow-xl py-3 px-2 flex flex-col items-center gap-2 border border-gray-200 dark:border-accent transition-all duration-500 ${
          isMounted ? "animate-slideIn" : "opacity-0 translate-x-10"
        }`}
      >
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeIcon === item.id;
          const isLastItem = index === navItems.length - 1;

          return (
            <Link
              key={item.id}
              to={item.to}
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation
                setActiveIcon(item.id);
                document
                  .querySelector(item.to)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative p-2 my-2 mx-1 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-dark-secondary ${
                isActive
                  ? "bg-primary  text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-accent hover:text-primary dark:hover:text-accent"
              }`}
              aria-label={item.label}
            >
              {!isLastItem && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 h-6 w-px bg-primary/20 dark:bg-accent/20 top-full transition-all duration-300 ${
                    isActive || navItems[index + 1].id === activeIcon
                      ? "animate-lineGrow"
                      : ""
                  }`}
                />
              )}
              <IconComponent
                size={20}
                className={`transition-all duration-300 ${
                  isActive
                    ? "scale-110"
                    : "group-hover:scale-110 group-hover:rotate-6"
                }`}
              />
              {/* Tooltip */}
              <span
                className={`absolute right-full mr-4 top-1 transform -translate-y-1/2 bg-white dark:bg-dark-secondary border border-gray-200 dark:border-accent text-gray-700 dark:text-gray-200 rounded-lg shadow-md px-3 py-1.5 text-[11px] sm:text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:animate-tooltipSlide pointer-events-none whitespace-nowrap transition-all duration-300 z-50 ${
                  isActive
                    ? "bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"
                    : ""
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default SidebarNav;
