import { statsCardData } from "../constant/data";

const MiniCard = () => {
  return (
    <section className="w-full selecton-none grid grid-cols-2 gap-2 sm:gap-4 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-2 lg:gap-8 xl:gap-10">
      {statsCardData?.map((data, index) => {
        return (
          <div
            key={index}
            className="relative group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg
              border-2 border-indigo-600 dark:border-gray-700
              shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
              hover:shadow-[6px_6px_0px_0px_rgba(67,56,202,1)]
              dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
              dark:hover:shadow-[6px_6px_0px_0px_rgba(55,65,81,1)]
              transform transition-all duration-300 ease-out
              hover:-translate-y-2 hover:bg-indigo-50 dark:hover:bg-gray-750"
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 rounded-lg z-0
              bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]
              [background-size:8px_8px] opacity-10 dark:opacity-15
              pointer-events-none transition-opacity duration-300
              group-hover:opacity-20"
            />

            {/* Card Content */}
            <div className="relative z-10 flex items-center gap-3">
              <div
                className="relative p-2.5 sm:p-3 rounded-lg
                  bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600
                  shadow-[2px_2px_0px_0px_rgba(67,56,202,0.5)]
                  group-hover:shadow-[3px_3px_6px_0px_rgba(67,56,202,0.8)]
                  group-hover:rotate-6 group-hover:scale-110
                  group-hover:bg-gradient-to-br
                  transition-all duration-300 ease-in-out"
              >
                {data.icon}
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400
                  transition-colors duration-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
                >
                  {data.value}
                  {data.title !== "Years of Experience" && "+"}
                </span>
                <span
                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-400
                  transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                >
                  {data.title}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MiniCard;
