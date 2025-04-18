import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiPhone } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-0 sm:px-2 lg:px-24 xl:px-36 transition-colors duration-200">
      <div className="container mx-auto px-2 sm:px-2 md:px-4 lg:px-8 xl:px-8 py-2 sm:py-2 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-4">
          <Logo />
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Developed by Abdul Ali. All rights
            reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <Link
            to="#"
            onClick={() => handleExternalLink("https://wa.me/+923052879926")}
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Chat with me on WhatsApp"
          >
            <FaWhatsapp
              className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:scale-110 transition-all duration-300"
            />
          </Link>

          <a
            href="mailto:ab.ali.soomro@gmail.com"
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Email me"
          >
            <HiOutlineMail
              className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:rotate-6 transition-all duration-300"
            />
          </a>

          <Link
            to="#"
            onClick={() =>
              handleExternalLink("https://github.com/developer-abdulali")
            }
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Visit my GitHub"
          >
            <FiGithub
              className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:scale-110 transition-all duration-300"
            />
          </Link>

          <Link
            to="#"
            onClick={() =>
              handleExternalLink("https://linkedin.com/in/abdulali12")
            }
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Visit my LinkedIn"
          >
            <LuLinkedin
              className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:scale-110 transition-all duration-300"
            />
          </Link>

          <a
            href="tel:+923052879926"
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 
              text-gray-700 dark:text-gray-300 rounded-full p-2 sm:p-2.5 
              hover:bg-indigo-600/10 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-out"
            aria-label="Call me"
          >
            <FiPhone
              className="w-4 h-4 sm:w-5 sm:h-5 
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
              group-hover:rotate-12 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
