// import { Building2, MapPin, Globe, Calendar } from "lucide-react";
// import { FiLoader } from "react-icons/fi";

// const ExperienceTimeline = ({ experiencesData, loading }) => {
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center">
//         <FiLoader className="mr-2 animate-spin" size={20} />
//         <span className="animate-pulse">Loading work experience data...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       {/* Timeline center line */}
//       <div
//         className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500/0 via-indigo-600 to-indigo-500/0 hidden sm:block"
//         aria-hidden="true"
//       />
//       <div className="relative">
//         {experiencesData?.map((experience, index) => {
//           const isLeft = index % 2 === 0; // Alternate left and right alignment
//           const endDateDisplay = experience.endDate
//             ? experience.endDate
//             : "Present";
//           const dateRange = `${experience.startDate} - ${endDateDisplay}`;
//           const dateTime = experience.endDate
//             ? `${experience.startDate}-${experience.endDate}`
//             : experience.startDate;

//           return (
//             <article
//               key={experience._id}
//               className={`relative mb-12 ${
//                 isLeft
//                   ? "md:pr-0 md:mr-auto md:w-[calc(50%-3rem)]"
//                   : "md:pl-0 md:ml-auto md:w-[calc(50%-3rem)]"
//               }`}
//               aria-label={`${experience.role} at ${experience.company}`}
//               style={{ opacity: 1, transform: "none" }}
//             >
//               {/* Timeline connector with glowing effect */}
//               <div
//                 className={`absolute top-[60%] hidden sm:block -translate-y-1/2 ${
//                   isLeft ? "-right-[53px]" : "-left-[53px]"
//                 }`}
//                 aria-hidden="true"
//               >
//                 <div className="relative flex items-center">
//                   <div
//                     className={`h-[2px] w-8 md:w-[77px] transition-all relative bg-gradient-to-r dark:bg-gradient-to-r
//                       ${
//                         isLeft
//                           ? "dark:from-gray-900 from-transparent via-indigo-600 dark:via-indigo-600 dark:to-indigo-600 to-indigo-600 order-first left-1"
//                           : "dark:from-indigo-600 from-indigo-600 via-indigo-600 dark:via-indigo-600 dark:to-gray-900 to-transparent order-last right-1"
//                       }`}
//                     style={{ transform: "none" }}
//                   />
//                   <div className="relative">
//                     {/* Outer glow effect */}
//                     <div
//                       className="absolute -inset-3 rounded-full bg-indigo-600/20 animate-pulse"
//                       style={{ transform: "scale(0.8)" }}
//                     />

//                     {/* Middle glow ring */}
//                     <div
//                       className="absolute -inset-2 rounded-full bg-indigo-500/30 animate-pulse"
//                       style={{
//                         transform: "scale(0.6)",
//                         animationDuration: "2s",
//                         animationDelay: `${index * 0.2}s`,
//                       }}
//                     />

//                     {/* Core dot with glow */}
//                     <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 relative">
//                       {/* Inner glow effect */}
//                       <div
//                         className="absolute inset-0 rounded-full shadow-[0_0_5px_2px_rgba(99,102,241,0.8)] animate-pulse"
//                         style={{
//                           animationDuration: "1.5s",
//                           animationDelay: `${index * 0.3}s`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Date display */}
//               <div
//                 className={`flex items-center ${
//                   isLeft ? "md:flex-row-reverse" : ""
//                 } gap-4 mb-4`}
//               >
//                 <time
//                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
//                   dateTime={dateTime}
//                   style={{ opacity: 1, transform: "none" }}
//                 >
//                   <Calendar size={12} aria-hidden="true" />
//                   <span className="text-sm font-medium">{dateRange}</span>
//                 </time>
//               </div>

//               {/* Experience card */}
//               <div
//                 role="button"
//                 aria-controls={experience._id}
//                 tabIndex="0"
//                 className="relative bg-white dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-600
//                   shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
//                   hover:shadow-[6px_6px_0px_0px_rgba(67,56,202,1)]
//                   dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
//                   dark:hover:shadow-[6px_6px_0px_0px_rgba(55,65,81,1)]
//                   transition-all duration-300 select-none rounded-xl dark:bg-gray-800/90 p-3 sm:p-6 transform-gpu cursor-pointer"
//                 style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
//               >
//                 <div className="absolute -inset-1 m-2 rounded-lg z-0 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] [background-size:8px_8px] opacity-10 dark:opacity-10 pointer-events-none" />
//                 <div className="flex justify-between items-start gap-4">
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-3 mb-2">
//                       <h3
//                         className="sm:text-xl font-bold text-gray-900 dark:text-white truncate"
//                         itemProp="name"
//                       >
//                         {experience.role}
//                       </h3>
//                       <div
//                         className="inline-flex items-center gap-2 px-2 md:px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
//                         style={{ opacity: 1, transform: "none" }}
//                       >
//                         <Globe
//                           size={14}
//                           aria-hidden="true"
//                           className="md:hidden lg:block"
//                         />
//                         <span itemProp="employmentType">
//                           {experience.remote ? "Remote" : "On-site"}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
//                       <span
//                         className="flex items-center gap-1.5"
//                         itemProp="worksFor"
//                         itemScope
//                         itemType="http://schema.org/Organization"
//                       >
//                         <Building2 size={14} aria-hidden="true" />
//                         <span itemProp="name">{experience.company}</span>
//                       </span>
//                       <span
//                         className="flex items-center gap-1.5"
//                         itemProp="jobLocation"
//                         itemScope
//                         itemType="http://schema.org/Place"
//                       >
//                         <MapPin size={14} aria-hidden="true" />
//                         <span itemProp="name">{experience.location}</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;
import React, { useState } from "react";
import { Building2, MapPin, Globe, Calendar, ChevronDown, FileText } from "lucide-react"; // Added FileText for description
import { FiLoader } from "react-icons/fi";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from 'react-icons/si';

const categoryDescriptions = [
 //index 0 
 {
    description: "Worked on frontend development tasks including responsive design and component creation. Collaborated with senior developers to implement new features.",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  
];

const ExperienceTimeline = ({ experiencesData, loading }) => {
  const [openDescriptions, setOpenDescriptions] = useState({});

  const toggleDescription = (index) => {
    setOpenDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <FiLoader className="mr-2 animate-spin" size={20} />
        <span className="animate-pulse">Loading work experience data...</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500/0 via-indigo-600 to-indigo-500/0 hidden sm:block"
        aria-hidden="true"
      />
      <div className="relative">
        {experiencesData?.map((experience, index) => {
          const isLeft = index % 2 === 0;
          const endDateDisplay = experience.endDate ? experience.endDate : "Present";
          const dateRange = `${experience.startDate} - ${endDateDisplay}`;
          const dateTime = experience.endDate ? `${experience.startDate}-${experience.endDate}` : experience.startDate;

          const categoryData = categoryDescriptions[index];
          const isDescriptionOpen = !!openDescriptions[index];

          return (
            <article
              key={experience._id}
              className={`relative mb-12 ${
                isLeft
                  ? "md:pr-0 md:mr-auto md:w-[calc(50%-3rem)]"
                  : "md:pl-0 md:ml-auto md:w-[calc(50%-3rem)]"
              }`}
              aria-label={`${experience.role} at ${experience.company}`}
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className={`absolute top-[60%] hidden sm:block -translate-y-1/2 ${
                  isLeft ? "-right-[53px]" : "-left-[53px]"
                }`}
                aria-hidden="true"
              >
                <div className="relative flex items-center">
                  <div
                    className={`h-[2px] w-8 md:w-[77px] transition-all relative bg-gradient-to-r dark:bg-gradient-to-r
                      ${
                        isLeft
                          ? "dark:from-gray-900 from-transparent via-indigo-600 dark:via-indigo-600 dark:to-indigo-600 to-indigo-600 order-first left-1"
                          : "dark:from-indigo-600 from-indigo-600 via-indigo-600 dark:via-indigo-600 dark:to-gray-900 to-transparent order-last right-1"
                      }`}
                    style={{ transform: "none" }}
                  />
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-full bg-indigo-600/20 animate-pulse"
                      style={{ transform: "scale(0.8)" }}
                    />
                    <div
                      className="absolute -inset-2 rounded-full bg-indigo-500/30 animate-pulse"
                      style={{
                        transform: "scale(0.6)",
                        animationDuration: "2s",
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 relative">
                      <div
                        className="absolute inset-0 rounded-full shadow-[0_0_5px_2px_rgba(99,102,241,0.8)] animate-pulse"
                        style={{
                          animationDuration: "1.5s",
                          animationDelay: `${index * 0.3}s`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex items-center ${
                  isLeft ? "md:flex-row-reverse" : ""
                } gap-4 mb-4`}
              >
                <time
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  dateTime={dateTime}
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Calendar size={12} aria-hidden="true" />
                  <span className="text-sm font-medium">{dateRange}</span>
                </time>
              </div>

              <div
                className="relative bg-white dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-600
                           shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
                           hover:shadow-[6px_6px_0px_0px_rgba(67,56,202,1)]
                           dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
                           dark:hover:shadow-[6px_6px_0px_0px_rgba(55,65,81,1)]
                           transition-all duration-300 select-none rounded-xl dark:bg-gray-800/90 p-3 sm:p-6 transform-gpu"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              >
                <div className="absolute -inset-1 m-2 rounded-lg z-0 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] [background-size:8px_8px] opacity-10 dark:opacity-10 pointer-events-none" />
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="sm:text-xl font-bold text-gray-900 dark:text-white truncate"
                        itemProp="name"
                      >
                        {experience.role}
                      </h3>
                      <div
                        className="inline-flex items-center gap-2 px-2 md:px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <Globe
                          size={14}
                          aria-hidden="true"
                          className="md:hidden lg:block"
                        />
                        <span itemProp="employmentType">
                          {experience.remote ? "Remote" : "On-site"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span
                        className="flex items-center gap-1.5"
                        itemProp="worksFor"
                        itemScope
                        itemType="http://schema.org/Organization"
                      >
                        <Building2 size={14} aria-hidden="true" />
                        <span itemProp="name">{experience.company}</span>
                      </span>
                      <span
                        className="flex items-center gap-1.5"
                        itemProp="jobLocation"
                        itemScope
                        itemType="http://schema.org/Place"
                      >
                        <MapPin size={14} aria-hidden="true" />
                        <span itemProp="name">{experience.location}</span>
                      </span>
                    </div>

                    {isDescriptionOpen && categoryData && (
                      <div className="mt-4 space-y-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                        {categoryData.description && (
                          <div className="flex items-start gap-2">
                            <FileText
                              size={16}
                              className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <p
                              id={`description-${experience._id}`}
                              className="text-sm text-gray-700 dark:text-gray-300"
                            >
                              {categoryData.description}
                            </p>
                          </div>
                        )}

                        {index === 0 && categoryData.skills && Array.isArray(categoryData.skills) && categoryData.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1.5">
                              Skills
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {categoryData.skills.map((skill) => (
                                <span
                                  key={skill.name}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium"
                                >
                                  <skill.icon
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  />
                                  {skill.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {categoryData?.description && (
                    <button
                      onClick={() => toggleDescription(index)}
                      aria-expanded={isDescriptionOpen}
                      aria-controls={`description-${experience._id}`}
                      className="p-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex-shrink-0 self-start"
                      aria-label={isDescriptionOpen ? "Hide details" : "Show details"}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          isDescriptionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;