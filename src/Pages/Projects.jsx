import { FolderGit2 } from "lucide-react";
import WorkCard from "../Components/WorkCard";
import { FiLoader } from "react-icons/fi";
import useGetData from "../hooks/useGetData";
import { PROJECTS_API_ENDPOINT } from "../constant/data";

const Projects = () => {
  const { data: projectsData, loading } = useGetData(
    `${PROJECTS_API_ENDPOINT}/get-all`
  );

  return (
    <section
      id="experience"
      className="
        w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 
        select-none bg-gray-50 dark:bg-gray-900 
        transition-colors duration-300"
    >
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <span
          className="
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            border-2 border-indigo-600 text-indigo-600 dark:text-indigo-200
            shadow-[3px_3px_0px_0px_rgba(99,102,241,0.7)]
            bg-gradient-to-r from-indigo-100/80 to-violet-100/80
            dark:from-indigo-900/40 dark:to-violet-900/40
            transform transition-all duration-300
            hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(99,102,241,0.9)]
            text-sm sm:text-base font-medium"
        >
          <FolderGit2
            size={18}
            className="text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:rotate-12"
          />
          My Projects
        </span>
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] 
            pt-4 sm:pt-5 md:pt-6 
            font-bold text-indigo-600 dark:text-white 
            tracking-tight leading-tight
            transition-all duration-300"
        >
          My Recent Works
        </h2>
        <p
          className="
            text-gray-600 dark:text-gray-300
            text-sm sm:text-base md:text-lg 
            pt-2 sm:pt-3 md:pt-4 
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto
            leading-relaxed"
        >
          Showcasing technical expertise through innovative and impactful
          projects
        </p>
      </div>

      {/* Work Cards */}
      <div className="relative mt-10">
        {loading ? (
          <div className="text-center py-16">
            <FiLoader className="h-12 w-12 animate-spin mx-auto text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              Loading projects...
            </h3>
          </div>
        ) : projectsData?.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600 dark:text-gray-400">
              No projects found
            </h3>
          </div>
        ) : (
          <WorkCard projectsData={projectsData} />
        )}
      </div>
    </section>
  );
};

export default Projects;
  