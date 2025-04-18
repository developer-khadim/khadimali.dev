import { Link } from "react-router-dom";
import ReusableBtn from "../Pages/Dashboard/Components/ReusableBtn";

import { LiaHomeSolid } from "react-icons/lia";

import { motion } from "framer-motion";
import { socialIconVariants } from "../AnimationVariants/variants.";
import { FaWhatsapp } from "react-icons/fa";
import { USER_API_ENDPOINT } from "../constant/data";
import useGetData from "../hooks/useGetData";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiPhone } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

const PageNotFound = () => {
  const { data: userData } = useGetData(`${USER_API_ENDPOINT}/profile`);

  const user = userData?.user || {
    name: "Abdul Ali",
    email: "ab.ali.soomro@gmail.com",
    aboutText:
      "Experienced React Frontend Developer specializing in crafting scalable, high-performance web applications.",
    phone: "+923052879926",
    githubURL: "https://github.com/developer-abdulali",
    linkedinURL: "https://www.linkedin.com/in/abdulali12/",
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-7xl text-primary">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
          {`Sorry, we couldn’t find the page you’re looking for.`}
        </p>

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
            href={`mailto:${user.email}`}
            className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
            aria-label="Email me"
          >
            <HiOutlineMail className="w-5 h-5 group-hover:text-primary group-hover:rotate-6 transition-all duration-300" />
          </motion.a>

          <motion.a
            custom={1}
            variants={socialIconVariants}
            whileHover={{ rotate: 6 }}
            href={user.githubURL}
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
            href={user.linkedinURL}
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
            href={`tel:${user.phone}`}
            className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
            aria-label="Call me"
          >
            <FiPhone className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
          </motion.a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-2">
          <ReusableBtn
            as={Link}
            to="/"
            text="Back to Home"
            icon={<LiaHomeSolid className="w-5 h-5" />}
          />
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
