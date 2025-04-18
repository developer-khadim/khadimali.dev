import { BiBriefcaseAlt } from "react-icons/bi";
import ExperienceTimeline from "../Components/ExperienceTimeline";
import { EXPERIENCE_API_ENDPOINT } from "../constant/data";
import useGetData from "../hooks/useGetData";

const Experiences = () => {
  const { data: experience, loading } = useGetData(
    `${EXPERIENCE_API_ENDPOINT}/get-experience`
  );

  return (
    <section
      id="experience"
      className="
        w-full py-8 sm:py-12 md:py-16 px-2 md:px-5 lg:px-6 xl:px-28 2xl:px-[210px]
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
          <BiBriefcaseAlt
            size={18}
            className="text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:rotate-12"
          />
          Work Experience
        </span>
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]
            pt-4 sm:pt-5 md:pt-6
            font-bold text-indigo-600 dark:text-white
            tracking-tight leading-tight
            transition-all duration-300"
        >
          My Professional Journey
        </h2>
        <p
          className="
            text-gray-600 dark:text-gray-300
            text-sm sm:text-base md:text-lg
            pt-2 sm:pt-3 md:pt-4
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto
            leading-relaxed"
        >
          Building innovative solutions and delivering value across diverse
          roles and industries
        </p>
      </div>

      {/* Timeline Container */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <ExperienceTimeline
          experiencesData={experience?.experiences}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Experiences;
