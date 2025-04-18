

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    // Card Container with hover effects
    <div className="relative group h-full">
      <div className="relative p-5 bg-white dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:border-gray-700 shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(67,56,202,1)] dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[6px_6px_0px_0px_rgba(55,65,81,1)] transition-all duration-300 select-none flex flex-col h-full min-h-[20rem] hover:-translate-y-2 hover:-translate-x-1">
        {/* Dotted Background with enhanced hover effect */}
        <div className="absolute -inset-1 m-2 rounded-lg z-0 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] [background-size:8px_8px] opacity-10 dark:opacity-10 pointer-events-none group-hover:opacity-20 group-hover:[background-size:10px_10px] transition-all duration-500" />
        
        {/* Project Image with zoom effect */}
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 relative z-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300 pointer-events-none" />
        </div>
          
        {/* Project Content */}
        <div className="relative z-10 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
            <div className="flex space-x-2">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110 p-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-full"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <Github size={18} className="transform group-hover:rotate-12 transition-transform duration-300" />
                </a>
              )}
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110 p-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-full"
                aria-label={`View ${project.title} live site`}
              >
                <ExternalLink size={18} className="transform group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
          {/* Project Description */}
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
          {/* Project Skills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.skills.map((skill, index) => (
              <div 
                key={index} 
                className="group relative flex items-center gap-2 px-1.5 py-1 rounded-lg
                border border-indigo-600/30 dark:border-indigo-600/30
                bg-white dark:bg-slate-900/90
                hover:bg-indigo-50 dark:hover:bg-indigo-900/50
                hover:border-indigo-500 dark:hover:border-indigo-400
                hover:scale-125 hover:shadow-lg hover:z-10
                hover:-translate-y-1 hover:rotate-2
                transition-all dark:text-white   duration-300 ease-in-out cursor-pointer select-none"
                title={skill.name}
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;