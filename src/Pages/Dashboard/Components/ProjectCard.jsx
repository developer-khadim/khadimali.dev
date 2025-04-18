import { useSelector } from "react-redux";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ projectId }) => {
  // Get the specific project by ID from the Redux store
  const project = useSelector((state) =>
    state.portfolio.projects.find((p) => p.id === projectId)
  );

  if (!project) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="relative h-48 sm:h-56 md:h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 flex justify-between border-t border-gray-100 dark:border-gray-700">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <FiExternalLink className="mr-1.5" /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <FiGithub className="mr-1.5" /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
