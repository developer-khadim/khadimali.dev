import { Contact } from "lucide-react";
import CFrom from "../Components/CFrom";

const ContactMe = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 px-0 sm:px-2 lg:px-24 xl:px-36 select-none">
      {/* Header Section */}
      <div className="text-center m b-8 sm:mb-12">
        <span
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full 
          border-2 border-indigo-600 text-indigo-600 dark:text-gray-200 
           shadow-[3px_3px_0px_0px_rgba(192,132,252,0.7)] 
           bg-gradient-to-r from-indigo-100/80 to-violet-100/80 
            dark:from-indigo-900/30 dark:to-violet-900/30 
              transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(192,132,252,0.9)]
           text-sm sm:text-base"
        >
          <Contact
            size={14}
            className="sm:size-18 text-indigo-600 dark:text-indigo-400"
          />
          Contact Information
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl py-2 sm:py-3 md:py-4 
          font-bold text-indigo-600 dark:text-white tracking-tight leading-tight"
        >
          Let's Connect
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 
          text-xs sm:text-sm md:text-base lg:text-lg 
          pt-1 sm:pt-2 md:pt-3 lg:pt-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
        >
          Ready to collaborate or discuss opportunities?{" "}
          <br className="block sm:hidden" /> I'm just a message away.
        </p>
      </div>
      <div className="mt-4">
        <CFrom />
      </div>
    </div>
  );
};

export default ContactMe;
