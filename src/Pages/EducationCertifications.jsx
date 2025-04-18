import { MdOutlineCastForEducation } from "react-icons/md";
import EducationCard from "../Components/EducationCards";
import useGetData from "../hooks/useGetData";
import { COURSE_API_ENDPOINT, EDUCATION_API_ENDPOINT } from "../constant/data";

const EducationCertifications = () => {
  const { data: education, loading: educationLoading } = useGetData(
    `${EDUCATION_API_ENDPOINT}/get-degrees`
  );

  const { data: certifications, loading: certsLoading } = useGetData(
    `${COURSE_API_ENDPOINT}/get-courses`
  );

  return (
    <div className="w-full py-8 sm:py-12 md:pb-16 px-0 lg:px-3 xl:px-[99px] 2xl:px-[200px] select-none">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <span
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full
  border-2 border-indigo-600 text-indigo-600 dark:text-gray-200
  shadow-[3px_3px_0px_0px_rgba(192,132,252,0.7)]
  bg-gradient-to-r from-indigo-100/80 to-violet-100/80
  dark:from-indigo-900/30 dark:to-violet-900/30
  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(192,132,252,0.9)]
  text-sm sm:text-base"
        >
          <MdOutlineCastForEducation
            size={14}
            className="sm:size-18 text-indigo-600 dark:text-indigo-400"
          />
          Education & Certifications
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl py-2 sm:py-3 md:py-4
          font-bold text-indigo-600 dark:text-white tracking-tight leading-tight"
        >
          My Academic Journey
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300
          text-xs sm:text-sm md:text-base lg:text-lg
          pt-1 sm:pt-2 md:pt-3 lg:pt-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
        >
          Building a strong foundation through continuous learning and
          professional development
        </p>
      </div>
      {/* Content Section */}
      <EducationCard
        educationData={education?.degrees}
        certificationsData={certifications?.courses}
        educationLoading={educationLoading}
        certsLoading={certsLoading}
      />
    </div>
  );
};

export default EducationCertifications;
