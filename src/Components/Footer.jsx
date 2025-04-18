import React from "react";
import Logo from "../Components/Logo";
import { Mail, Github, Linkedin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700  px-0 sm:px-2 lg:px-24 xl:px-36 transition-colors duration-200">
      <div className="container mx-auto px-2 sm:px-2 md:px-4 lg:px-8 xl:px-8 py-2 sm:py-2 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        {/* Logo and Copyright */}
        <div className=" flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-4">
          <Logo />
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm ">
            © {new Date().getFullYear()} Developed by Khadim Ali. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <a
            href="mailto:khadimalisoomro33@gmail.com"
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Email me"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:rotate-6 transition-all duration-300" />
          </a>

          <a
            href="https://github.com/developer-khadim"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Visit my GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:scale-110 transition-all duration-300" />
          </a>

          <a
            href="https://linkedin.com/in/khadim-ali12"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Visit my LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:scale-110 transition-all duration-300" />
          </a>

          <a
            href="tel:+923490393306"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Call me"
          >
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:rotate-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;