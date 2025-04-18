import React, { useState, useEffect } from "react";
import { FiGithub, FiPhone } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { Download } from "lucide-react";
import HeroCode from "./HeroCode";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  socialIconVariants,
} from "../AnimationVariants/variants.";
import { heroDataRoles, USER_API_ENDPOINT } from "../constant/data";
import axios from "axios";


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/profile`);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroDataRoles?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const user = userData?.user || {
    name: "Khadim Ali",
    email: "Khadimalisoomro33@gmail.com",
    aboutText:
      "Crafting lightning-fast, scalable web applications with clean code and creative flair. I thrive on turning complex problems into elegant solutions, pushing the limits of frontend performance, and delivering pixel-perfect user experiences. Passionate about innovation, obsessed with precision — I don’t just build websites, I engineer digital excellence.",
    phone: "+923490393306",
    githubURL: "https://www.github.com/developer-khadim",
    linkedinURL: "https://www.linkedin.com/in/khadim-ali12",
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Iuo1bIFtWIneVVOLMPuXL8rk-m4FBLn7/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.section
      className="w-full container mx-auto px-4 mt-6 sm:mt-10 md:mt-14 lg:mt-14 xl:mt-14 2xl:mt-14 md:px-6 xl:px-8 2xl:px-7"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex justify-between ">
        <div className="w-full">
          {/* Welcome Tag */}
          <motion.div
            className="inline-flex items-center bg-primary/10 rounded-full px-3 py-1.5 sm:py-2 mb-3 sm:mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary font-medium flex items-center text-sm">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Heading Section */}
          <div className="mb-4 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-2 md:mb-4 tracking-tight dark:text-white"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                {user.name}
              </motion.span>
            </motion.h1>
            <motion.div
              className="flex items-center gap-2 md:gap-3"
              variants={itemVariants}
            >
              <p className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-medium dark:text-white flex items-center gap-2">
                I'm a{" "}
                <span className="text-primary font-medium">
                  <Typewriter
                    words={heroDataRoles?.map((item) => item.text)}
                    loop={true}
                    cursor
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </p>
              {heroDataRoles[currentIndex]?.icon && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  {React.cloneElement(heroDataRoles[currentIndex].icon, {
                    className: "w-6 h-6 text-primary",
                  })}
                </motion.span>
              )}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-700 dark:text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-10"
            variants={itemVariants}
          >
            {user.aboutText}
          </motion.p>

          {/* Buttons and Social Links */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                onClick={handleResumeClick}
                className="group flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto hover:shadow-lg"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.span>
                Resume
              </a>
            </motion.div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-3 md:gap-4">
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
                whileTap={{ scale: 0.9 }}
                href={`tel:${user.phone}`}
                className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                aria-label="Call me"
              >
                <FiPhone className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
              </motion.a>

              <motion.a
                custom={4}
                variants={socialIconVariants}
                whileTap={{ scale: 0.9 }}
                href={`https://wa.me/${user.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Code Animation or Image */}
        <div className="hidden lg:block ">
          <HeroCode />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
