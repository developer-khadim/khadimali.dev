import React from 'react';
import { Code, Calendar, ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProjectItem = ({ project }) => {
  const { title, description, period, technologies, liveLink, repoLink, highlights } = project;
  
  return (
    <div className="mb-4 bg-gray-50 p-2 rounded-xl hover:bg-gray-100 select-none">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center gap-1">
          <Calendar size={14} className="text-indigo-600 flex-shrink-0" />
          <span className="text-sm">{period}</span>
        </div>
      </div>
      <p className="text-sm mb-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mb-2">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 hover:text-indigo-800">
            <ExternalLink size={14} className="mr-1" />
            Live Demo
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 hover:text-indigo-800">
            <Github size={14} className="mr-1" />
            Source Code
          </a>
        )}
      </div>
      <ul className="list-disc list-inside text-sm space-y-1 pl-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="break-words">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

const ProjectExperience = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with product listing, cart, and payment integration",
      period: "09/2023",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://my-ecommerce-demo.example.com",
      repoLink: "https://github.com/yourusername/ecommerce-platform",
      highlights: [
        "Implemented responsive design using Tailwind CSS for optimal viewing across all device sizes",
        "Integrated Stripe payment gateway with secure checkout process",
        "Built RESTful API with Node.js and Express to handle product data and user authentication",
        "Developed user authentication system with JWT and secure password hashing"
      ]
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative task management application with real-time updates",
      period: "04/2023",
      technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      liveLink: "https://task-manager-demo.example.com",
      repoLink: "https://github.com/yourusername/task-management",
      highlights: [
        "Created drag-and-drop functionality using React DnD for intuitive task management",
        "Implemented real-time updates with Firebase Realtime Database for collaborative work",
        "Designed an intuitive UI with progress tracking and task filtering capabilities",
        "Added data visualization for task completion metrics using Chart.js"
      ]
    },
    {
      title: "AI Content Generator",
      description: "Web application that leverages OpenAI API to generate various types of content",
      period: "12/2022",
      technologies: ["Next.js", "OpenAI API", "Vercel", "TailwindCSS"],
      liveLink: "https://ai-content-generator.example.com",
      repoLink: "https://github.com/yourusername/ai-content-generator",
      highlights: [
        "Integrated OpenAI's GPT-3.5 API to generate blog posts, product descriptions, and social media content",
        "Built a user-friendly interface with adjustable parameters for content generation",
        "Implemented content saving and export functionality in multiple formats",
        "Optimized API usage to keep costs low while maximizing functionality"
      ]
    }
  ];

  return (
    <section className="my-4">
      <SectionTitle icon={<Code size={16} />} title="Project Experience" />
      <hr className="mb-2" />
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectExperience;