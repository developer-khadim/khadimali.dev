import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  projectarrowVariants,
  projectbuttonVariants,
  projectcardContainerVariants,
  projectcardVariants,
  projectheaderVariants,
  projectlineVariants,
  projectsectionVariants,
} from "../../AnimationVariants/variants.";

const ProjectSection = ({
  title,
  description,
  icon,
  projects,
  gradientColors,
  borderColor,
  shadowColor,
  slideCount,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const maxIndex = Math.max(0, projects.length - slideCount);
  const showControls = projects.length > slideCount;

  const handlePrevSlide = (e) => {
    e.preventDefault();
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const handleDotClick = (e, index) => {
    e.preventDefault();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <>
      {projects?.length === 0 ? (
        <p className="text-lg text-gray-900 dark:text-white text-center">
          No projects found!
        </p>
      ) : (
        <motion.section
          className="relative mb-24 group/section"
          variants={projectsectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-start mb-6 sm:mb-10 relative p-2">
            <motion.div
              className={`hidden sm:block absolute -left-4 h-16 w-1 ${gradientColors} rounded-full`}
              // className={`hidden sm:block absolute -left-4 h-16 w-1 ${gradientColors} rounded-full`}
              variants={projectlineVariants}
              whileHover="hover"
            />
            <motion.div
              className="transform mb-3 sm:mb-0 sm:mr-4"
              variants={projectlineVariants}
              whileHover="hover"
            >
              {icon}
            </motion.div>
            <motion.div variants={projectheaderVariants} className="w-full">
              <motion.h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white group-hover/section:text-indigo-700 dark:group-hover/section:text-indigo-400 transition-colors duration-300">
                {title}
              </motion.h2>
              <motion.p className="text-gray-600 dark:text-gray-300 text-sm mt-1 group-hover/section:text-gray-900 dark:group-hover/section:text-gray-200 transition-colors duration-300">
                {description}
              </motion.p>
            </motion.div>
          </div>

          <div className="relative">
            {showControls && (
              <>
                <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 md:-left-10">
                  <motion.button
                    onClick={handlePrevSlide}
                    className={`p-2 rounded-full bg-white dark:bg-gray-800 border ${borderColor} ${shadowColor} focus:outline-none group transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700`}
                    // className={`p-3 rounded-full bg-white dark:bg-gray-800 border ${borderColor} ${shadowColor} focus:outline-none group transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700`}
                    aria-label="Previous slide"
                    variants={projectbuttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      variants={projectarrowVariants}
                      custom={-1}
                      whileHover="hoverLeft"
                    >
                      <ChevronLeft
                        size={24}
                        className="dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      />
                    </motion.div>
                  </motion.button>
                </div>

                <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 md:-right-10">
                  <motion.button
                    onClick={handleNextSlide}
                    className={`p-2 rounded-full bg-white dark:bg-gray-800 border ${borderColor} ${shadowColor} focus:outline-none group transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700`}
                    // className={`p-3 rounded-full bg-white dark:bg-gray-800 border-2 ${borderColor} ${shadowColor} focus:outline-none group transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700`}
                    aria-label="Next slide"
                    variants={projectbuttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      variants={projectarrowVariants}
                      custom={1}
                      whileHover="hoverRight"
                    >
                      <ChevronRight
                        size={24}
                        className="dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      />
                    </motion.div>
                  </motion.button>
                </div>
              </>
            )}

            <motion.div
              className="overflow-hidden"
              variants={projectcardContainerVariants}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6"
                >
                  {projects
                    .slice(currentIndex, currentIndex + slideCount)
                    .map((project, index) => (
                      <motion.div
                        key={`${project._id}-${index}`}
                        className="px-1"
                        custom={direction}
                        variants={projectcardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        layout
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {showControls && (
              <motion.div
                className="flex justify-center mt-8 gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={(e) => handleDotClick(e, index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? `${borderColor.replace(
                            "border-",
                            "bg-"
                          )} w-8 border ${borderColor}`
                        : "bg-gray-300 dark:bg-gray-600 w-2.5"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: currentIndex === index ? "" : "#9ca3af",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ProjectSection;
