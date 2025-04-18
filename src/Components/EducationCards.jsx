import { MdOutlineCalendarMonth } from "react-icons/md";
import { LiaGraduationCapSolid, LiaUniversitySolid } from "react-icons/lia";
import { PiMedalDuotone } from "react-icons/pi";
import { FiExternalLink, FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";

const EducationCard = ({
  educationData,
  certificationsData,
  educationLoading,
  certsLoading,
}) => {
  return (
    <section
      id="education"
      className="w-full py-8 sm:py-12 md:py-16 px-3 selection-none bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div className="w-full">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-gray-900 dark:text-gray-100 font-bold text-2xl sm:text-3xl pb-2 sm:pb-3 tracking-tight">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl">
              Formal academic degrees showcasing foundational knowledge.
            </p>
          </div>

          {/* Loading Indicator for Education */}
          {educationLoading ? (
            <div className="flex items-center justify-center">
              <FiLoader className="mr-2 animate-spin" size={20} />
              <span className="animate-pulse">Loading education data...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:gap-6">
              {educationData?.map((data, index) => (
                <div
                  key={index}
                  className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl
                      border-2 border-indigo-600 dark:border-gray-700
                      shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
                      hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)]
                      dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
                      dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)]
                      transform transition-all duration-300 ease-out
                      hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750
                      w-full"
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 rounded-xl z-0
                      bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]
                      [background-size:10px_10px] opacity-10 dark:opacity-15
                      pointer-events-none transition-opacity duration-300
                      group-hover:opacity-20"
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full">
                    {/* Icon - Now visible on all screens */}
                    <div
                      className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6"
                    >
                      <LiaGraduationCapSolid className="text-white w-6 h-16" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-1 sm:gap-2 mt-2 sm:mt-0">
                      <h4
                        className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white
                          transition-colors duration-300 group-hover:text-indigo-600
                          dark:group-hover:text-indigo-400"
                      >
                        {data?.degree}
                      </h4>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap">
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300">
                          <LiaUniversitySolid className="text-primary w-5 h-5" />
                          <span className="line-clamp-1">
                            {data?.institution}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300">
                          <MdOutlineCalendarMonth className="text-primary w-4 h-4" />
                          <span>
                            {data.startDate} - {data.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certifications Section */}
        <div className="w-full">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-gray-900 dark:text-gray-100 font-bold text-2xl sm:text-3xl pb-2 sm:pb-3 tracking-tight">
              Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl">
              Professional certifications demonstrating specialized skills.
            </p>
          </div>

          {/* Loading Indicator for Certifications */}
          {certsLoading ? (
            <div className="flex items-center justify-center">
              <FiLoader className="mr-2 animate-spin" size={20} />
              <span className="animate-pulse">
                Loading certifications data...
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:gap-6">
              {certificationsData?.map((data, index) => (
                <div
                  key={index}
                  className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl
                      border-2 border-indigo-600 dark:border-gray-700
                      shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
                      hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)]
                      dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
                      dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)]
                      transform transition-all duration-300 ease-out
                      hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750
                      w-full"
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 rounded-xl z-0
                      bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]
                      [background-size:10px_10px] opacity-10 dark:opacity-15
                      pointer-events-none transition-opacity duration-300
                      group-hover:opacity-20"
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full">
                    {/* Icon - Now visible on all screens */}
                    <div
                      className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6"
                    >
                      <PiMedalDuotone className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-1 sm:gap-2 w-full mt-2 sm:mt-0">
                      <h4
                        className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white
                          transition-colors duration-300 group-hover:text-indigo-600
                          dark:group-hover:text-indigo-400"
                      >
                        {data.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row justify-between w-full">
                        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                          <div className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300">
                            <LiaUniversitySolid className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="line-clamp-1">
                              {data.institution}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300">
                            <MdOutlineCalendarMonth className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{data.startDate}</span>
                          </div>
                          {/* view credentials */}
                          {data?.viewCredentials && (
                            <Link
                              to={data.viewCredentials}
                              className="flex items-center gap-1"
                              target="_blank"
                            >
                              <FiExternalLink className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                              <p className="text-primary">View Credentials</p>
                            </Link>
                          )}
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <a
                            href={data.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                          >
                            {data.button} {data.linkIcon}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
