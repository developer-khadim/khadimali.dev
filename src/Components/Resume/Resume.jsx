import React from "react";
import Header from "./Components/Header";
import ProfessionalSummary from "./Components/ProfessionalSummary";
import Education from "./Components/Education";
import Certifications from "./Components/Certifications";
import TechnicalExpertise from "./Components/TechnicalExpertise";
import ActionButtons from "./Components/AcationButtons";
import Languages from "./Components/Languages";
import Project from "./Components/ProjectExperience";

const Resume = () => {
  return (
    <>
    <div className="w-full min-h-screen mx-auto my-1 sm:my-4 bg-white dark:bg-gray-800 overflow-x-hidden" >
      {" "}
      <ActionButtons />
      <div className="p-2 xs:p-3 sm:p-4 md:p-6 max-w-[49rem] mx-auto text-gray-800 shadow-2xl border border-gray-200 rounded-2xl">
        <Header />

        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          {/* Left Column */} 
          <div className="w-full lg:w-2/3 space-y-3 sm:space-y-4">
            <ProfessionalSummary />
            <Education />
            <Project />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 text-xs sm:text-sm space-y-3 sm:space-y-4">
            <TechnicalExpertise />
            <Certifications />
            <Languages />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Resume;
