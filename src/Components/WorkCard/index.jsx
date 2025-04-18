import React, { useState, useEffect } from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { motion } from "framer-motion";
import ProjectSection from "./ProjectSection";
import { WorkCardContainerVariant } from "../../AnimationVariants/variants.";

const WorkCard = ({ projectsData }) => {
  const [slideCount, setSlideCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlideCount(1);
      } else {
        setSlideCount(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Transform API data to match expected format
  const transformedProjects =
    projectsData?.map((project) => ({
      _id: project._id,
      title: project.title,
      description: project.description,
      image: project.imageUrl,
      liveLink: project.liveDemoUrl,
      githubLink: project.githubUrl,
      skills: project.technologies.map((tech) => ({ name: tech })),
      isPinned: project.isPinned,
      category: project.category,
    })) || [];

  // Group projects by category
  const groupedProjects = transformedProjects.reduce((acc, project) => {
    const category = project.category || "other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});

  // Define category sections with their display names and icons (updated to four categories)
  const categorySections = [
    {
      category: "fullstack",
      title: "FullStack Projects",
      description: "End-to-end solutions with both frontend and backend",
      icon: (
        <div className="flex mr-4 relative">
          <FaReact className="w-10 h-10 text-blue-500 animate-spin-slow" />
          <SiNextdotjs className="w-10 h-10 text-black dark:text-white -ml-2" />
          <FaNodeJs className="w-10 h-10 text-green-600 -ml-2" />
        </div>
      ),
      gradientColors: "bg-gradient-to-b from-cyan-500 to-blue-500",
      borderColor: "border-cyan-600",
      shadowColor:
        "shadow-[2px_2px_0px_0px_rgba(8,145,178,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(8,145,178,1)]",
    },
    {
      category: "frontend",
      title: "Frontend Projects",
      description: "Modern user interfaces and interactive web experiences",
      icon: (
        <div className="flex mr-4 relative">
          <FaReact className="w-10 h-10 text-blue-500 animate-spin-slow" />
          <SiNextdotjs className="w-10 h-10 text-black dark:text-white -ml-2" />
        </div>
      ),
      gradientColors: "bg-gradient-to-b from-purple-500 to-indigo-500",
      borderColor: "border-purple-600",
      shadowColor:
        "shadow-[2px_2px_0px_0px_rgba(124,58,237,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(124,58,237,1)]",
    },
    {
      category: "html-css-js",
      title: "HTML/CSS/JS Projects",
      description: "Static websites built with core web technologies",
      icon: (
        <div className="flex mr-4 relative">
          <FaHtml5 className="w-10 h-10 text-[#DD4B25]" />
          <FaCss3Alt className="w-10 h-10 text-[#2160AB] -ml-2" />
          <FaJs className="w-10 h-10 text-[#EFD81D] -ml-2" />
        </div>
      ),
      gradientColors: "bg-gradient-to-b from-yellow-500 to-orange-500",
      borderColor: "border-yellow-600",
      shadowColor:
        "shadow-[2px_2px_0px_0px_rgba(202,138,4,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(202,138,4,1)]",
    },
    {
      category: "other",
      title: "Other Projects",
      description: "Miscellaneous projects and experiments",
      icon: (
        <div className="flex mr-4 relative">
          <RxDashboard className="w-10 h-10 text-black dark:text-white" />
        </div>
      ),
      gradientColors: "bg-gradient-to-b from-gray-500 to-gray-700",
      borderColor: "border-gray-600",
      shadowColor:
        "shadow-[2px_2px_0px_0px_rgba(75,85,99,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(75,85,99,1)]",
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-2 py-2"
      variants={WorkCardContainerVariant}
      initial="hidden"
      animate="visible"
    >
      {categorySections.map((section) => {
        const projects = groupedProjects[section.category] || [];
        if (projects?.length === 0) return null; // Skip empty sections

        return (
          <ProjectSection
            key={section.category}
            title={section.title}
            description={section.description}
            icon={section.icon}
            projects={projects}
            gradientColors={section.gradientColors}
            borderColor={section.borderColor}
            shadowColor={section.shadowColor}
            slideCount={slideCount}
          />
        );
      })}
    </motion.div>
  );
};

export default WorkCard;
