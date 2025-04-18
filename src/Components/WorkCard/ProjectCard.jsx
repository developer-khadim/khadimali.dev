import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    // <div className="relative group h-full">
    <div className="relative group  p-5 bg-white dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:border-gray-700 shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(67,56,202,1)] dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[6px_6px_0px_0px_rgba(55,65,81,1)] transition-all duration-300 select-none flex flex-col h-full min-h-[20rem] hover:-translate-y-2 hover:-translate-x-1">
      {/* Dotted Background */}
      <div className="absolute -inset-1 m-2 rounded-lg z-0 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] [background-size:8px_8px] opacity-10 dark:opacity-10 pointer-events-none group-hover:opacity-20 group-hover:[background-size:10px_10px] transition-all duration-500" />

      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 relative z-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="relative z-10 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </h3>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110 p-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-full"
            aria-label={`View ${project.title} live site`}
          >
            <ExternalLink
              size={18}
              className="transform group-hover:rotate-12 transition-transform duration-300"
            />
          </a>
        </div>
        {project.description && (
          <p
            title={project.description}
            className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300 mb-4"
          >
            {project.description}
          </p>
        )}
        {project.skills && project.skills.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
