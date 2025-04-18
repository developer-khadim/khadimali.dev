import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaCode } from 'react-icons/fa';
import { SiNextdotjs } from "react-icons/si";
import { motion } from 'framer-motion';
import ProjectSection from './ProjectSection';
import { FiLoader } from 'react-icons/fi';

const WorkCard = ({ projectsData, loading }) => {
  // State for responsive slide count
  const [slideCount, setSlideCount] = useState(2);
  const [categorizedProjects, setCategorizedProjects] = useState({
    fullstack: [],
    frontend: [],
    htmlCssJs: []
  });

  // Set slide count based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlideCount(1);
      } else {
        setSlideCount(2);
      }
    };

    // Initial setup
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Categorize projects when data is loaded
  useEffect(() => {
    if (projectsData && projectsData.length > 0) {
      const categorized = {
        fullstack: [],
        frontend: [],
        htmlCssJs: []
      };

      projectsData.forEach(project => {
        // Map API project format to our component format
        const formattedProject = {
          id: project._id,
          title: project.title,
          image: project.imageUrl || "https://via.placeholder.com/300",
          description: project.description,
          liveLink: project.liveDemoUrl,
          githubLink: project.githubUrl,
          skills: project.technologies.map(tech => ({
            name: tech,
            icon: getTechIcon(tech)
          }))
        };

        // Categorize based on project category from backend
        if (project.category === "Full Stack Project") {
          categorized.fullstack.push(formattedProject);
        } else if (project.category === "Frontend With React") {
          categorized.frontend.push(formattedProject);
        } else if (project.category === "HTML/CSS/JS") {
          categorized.htmlCssJs.push(formattedProject);
        } else {
          // Fallback categorization if category is missing or invalid
          if (project.technologies.some(tech => 
              tech.toLowerCase().includes('node') && 
              project.technologies.some(t => t.toLowerCase().includes('react')))) {
            categorized.fullstack.push(formattedProject);
          } else if (project.technologies.some(tech => 
              tech.toLowerCase().includes('react'))) {
            categorized.frontend.push(formattedProject);
          } else if (project.technologies.some(tech => 
              tech.toLowerCase().includes('html') || 
              tech.toLowerCase().includes('css'))) {
            categorized.htmlCssJs.push(formattedProject);
          } else {
            // Default to fullstack if no other category matches
            categorized.fullstack.push(formattedProject);
          }
        }
      });

      setCategorizedProjects(categorized);
    }
  }, [projectsData]);

  // Helper function to get icon based on technology name
  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    const iconStyle = "w-4 h-4 transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-12 group-hover/skill:animate-pulse";
    
    if (techLower.includes('react')) {
      return <FaReact className={`${iconStyle} text-blue-500`} />;
    } else if (techLower.includes('node')) {
      return <FaNodeJs className={`${iconStyle} text-green-500`} />;
    } else if (techLower.includes('html')) {
      return <FaHtml5 className={`${iconStyle} text-orange-500`} />;
    } else if (techLower.includes('css')) {
      return <FaCss3Alt className={`${iconStyle} text-blue-500`} />;
    } else if (techLower.includes('javascript') || techLower.includes('js')) {
      return <FaJs className={`${iconStyle} text-yellow-500`} />;
    } else if (techLower.includes('next')) {
      return <SiNextdotjs className={`${iconStyle} text-black dark:text-white`} />;
    } else {
      // Default icon for other technologies
      return <FaCode className={`${iconStyle} text-gray-500`} />;
    }
  };

  // Container animation variant
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <FiLoader className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-3 text-gray-600 dark:text-gray-300">Loading projects...</span>
      </div>
    );
  }

  return (
    <motion.div 
      className="container mx-auto px-4 md:px-16 py-2"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* FullStack Projects Section */}
      <ProjectSection 
        title="Full Stack Project"
        description="End-to-end applications with frontend and backend integration"
        icon={
          <div className="flex mr-4 relative">
            <FaReact className="w-10 h-10 text-blue-500 animate-spin-slow" />
            <FaNodeJs className="w-10 h-10 text-green-500 -ml-2" />
          </div>
        }
        projects={categorizedProjects.fullstack}
        gradientColors="bg-gradient-to-b from-purple-600 to-indigo-600"
        borderColor="border-purple-600"
        shadowColor="shadow-[2px_2px_0px_0px_rgba(124,58,237,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(124,58,237,1)]"
        slideCount={slideCount}
      />

      {/* Frontend With React Projects Section */}
      <ProjectSection 
        title="Frontend With React"
        description="Modern user interfaces and interactive web experiences"
        icon={
          <div className="flex mr-4 relative">
            <FaReact className="w-10 h-10 text-blue-500 animate-spin-slow" />
            <SiNextdotjs className="w-10 h-10 text-black dark:text-white -ml-2" />
          </div>
        }
        projects={categorizedProjects.frontend}
        gradientColors="bg-gradient-to-b from-cyan-500 to-blue-500"
        borderColor="border-cyan-600"
        shadowColor="shadow-[2px_2px_0px_0px_rgba(8,145,178,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(8,145,178,1)]"
        slideCount={slideCount}
      />
      
      {/* HTML/CSS/JS Projects Section */}
      <ProjectSection 
        title="HTML/CSS/JS"
        description="Classic web development projects with vanilla technologies"
        icon={
          <div className="flex mr-4 relative">
            <FaHtml5 className="w-10 h-10 text-orange-500" />
            <FaCss3Alt className="w-10 h-10 text-blue-500 -ml-2" />
            <FaJs className="w-10 h-10 text-yellow-500 -ml-2" />
          </div>
        }
        projects={categorizedProjects.htmlCssJs}
        gradientColors="bg-gradient-to-b from-yellow-500 to-orange-500"
        borderColor="border-orange-500"
        shadowColor="shadow-[2px_2px_0px_0px_rgba(249,115,22,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(249,115,22,1)]"
        slideCount={slideCount}
      />
    </motion.div>
  );
};

export default WorkCard;