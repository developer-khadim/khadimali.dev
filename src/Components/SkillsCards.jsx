import React, { useState, useEffect } from "react";
import { Code, Server } from "lucide-react";
import { PiCompassToolDuotone } from "react-icons/pi";
import useGetData from "../hooks/useGetData";
import { FiLoader } from "react-icons/fi";
import { EXPERTISE_API_ENDPOINT } from "../constant/data";
import MiniCard from "./MiniCard"

// Define the descriptions based on index
const categoryDescriptions = [
  // description for frontend
  "Building modern, responsive web applications with React ecosystem. Proficient in creating interactive and user-friendly interfaces.", // Index 0

  // description for backend
  "Developing server-side applications and RESTful APIs. Gaining experience in handling databases, implementing basic authentication and authorization mechanisms, and optimizing server performance. Focusing on fundamental error handling, middleware integration, and security protocols to design efficient and reliable backend architectures.", // Index 1

  // description for tools
  "Utilizing a robust set of tools for development, system management, version control, and seamless Browse experiences.", // Index 2
];

const categoryIcons = [
  <Code className="text-white" />, //index 0
  <Server className="text-white" />, //index 1
  <PiCompassToolDuotone className="text-white" />, //index 2
];

const SkillsCards = () => {
  const { data, loading } = useGetData(
    `${EXPERTISE_API_ENDPOINT}/get-expertise`
  );

  // Group data by category
  const groupedData = data?.reduce((acc, item) => {
    const existingCategory = acc.find(
      (group) => group.category === item.category
    );
    if (existingCategory) {
      existingCategory.items.push(item);
    } else {
      acc.push({
        category: item.category,
        icon: item.icon, // Using the first icon for the category
        items: [item],
      });
    }
    return acc;
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <FiLoader className="mr-2 animate-spin" size={20} />
        <span className="animate-pulse">Loading Skills...</span>
      </div>
    );

  if (!groupedData || groupedData.length === 0)
    return <div className="text-center py-10">No skills data available</div>;

  return (
    <section className="w-full container mx-auto px-3 mt-6 sm:mt-10 md:mt-14 lg:mt-14 xl:mt-14 2xl:mt-14 sm:px-6 xl:px-8 2xl:px-7">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {groupedData?.map((category, index) => {
          // Get the description for the current index
          const description = categoryDescriptions[index];
          const icon = categoryIcons[index];

          return (
            <div
              key={index}
              role="article"
              aria-labelledby={`expertise-${index}-title`}
              className="relative p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-indigo-600
              shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
              hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
              dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
              dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
              scale-100 hover:scale-105 hover:border-indigo-700
              dark:hover:border-indigo-500
              transition-all duration-300 ease-in-out select-none h-full"
            >
              <div className="absolute -inset-1 m-2 rounded-lg z-0 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] [background-size:8px_8px] opacity-10 dark:opacity-10 pointer-events-none" />
              <div className="flex items-start gap-4">
                <div
                  className="relative p-2.5 sm:p-3.5 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600
    shadow-[2px_2px_0px_0px_rgba(67,56,202,0.5)]
    hover:shadow-[3px_3px_6px_0px_rgba(67,56,202,0.7)]
    hover:rotate-3
    transition-all duration-300 ease-in-out"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    id={`expertise-${index}-title`}
                    className="text-xl font-bold text-indigo-900 dark:text-indigo-200"
                  >
                    {category.category}
                  </h3>

                  {/* --- DESCRIPTION START --- */}
                  {description && ( // Only render if a description exists for this index
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {description}
                    </p>
                  )}
                  {/* --- DESCRIPTION END --- */}

                  <div
                    className="mt-3" // Adjusted margin top if description exists
                    aria-label={`${category.category} skills`}
                    id={`skills-${index}`}
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="group relative flex items-center gap-2 px-1.5 py-1 rounded-lg
                            border border-indigo-600/30 dark:border-indigo-600/30
                            bg-white dark:bg-slate-900/90
                            hover:bg-indigo-50 dark:hover:bg-indigo-900/50
                            hover:border-indigo-500 dark:hover:border-indigo-400
                            hover:scale-125 hover:shadow-lg hover:z-10
                            hover:-translate-y-1 hover:rotate-2
                            transition-all duration-300 ease-in-out cursor-pointer select-none"
                          >
                            <div className="relative z-10">
                              <img
                                src={item.icon}
                                alt={item.technologies[0]} // Assuming first technology is the main one
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                            <span
                              className="relative z-10 text-[11px] sm:text-[12px] font-medium text-indigo-800 dark:text-gray-100
                              group-hover:text-indigo-700 dark:group-hover:text-indigo-300
                              group-hover:font-bold
                              font-roboto"
                            >
                              {/* Displaying only the first technology name for simplicity */}
                              {item.technologies[0]}
                            </span>
                            <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MiniCard/>
    </section>
  );
};

export default SkillsCards;
