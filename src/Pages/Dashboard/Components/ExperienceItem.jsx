import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaWifi,
  FaCalendarAlt,
  FaCalendarCheck,
} from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import ReusableBtn from "./ReusableBtn";

const ExperienceItem = ({
  experience,
  openEditExperienceModal,
  openDeleteModal,
}) => {
  return (
    <div
      className="relative flex flex-col text-sm dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:text-white
          shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
          hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
          dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
          dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
          hover:border-indigo-700 dark:hover:border-indigo-500
         ease-in-out select-none p-4 hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <FaBriefcase className="text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="font-semibold text-primary dark:text-secondary">
              {experience.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center">
              <FaBuilding className="mr-1 text-gray-500 dark:text-gray-300" />
              {experience.company}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <ReusableBtn
            onClick={() => openEditExperienceModal(experience)}
            icon={<FiEdit2 className="h-5 w-5" />}
            isMr={false}
            titleText="Edit"
          />
          <ReusableBtn
            onClick={() => openDeleteModal(experience._id)}
            icon={<FiTrash2 className="h-5 w-5" />}
            isMr={false}
            titleText="Delete"
          />
        </div>
      </div>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-gray-500 dark:text-gray-300" />
          <span>
            <strong>Location:</strong> {experience.location}
          </span>
        </p>
        <p className="flex items-center">
          <FaWifi className="mr-2 text-gray-500 dark:text-gray-300" />
          <span>
            <strong>Remote:</strong> {experience.remote ? "Yes" : "No"}
          </span>
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="mr-2 text-gray-500 dark:text-gray-300" />
          <span>
            <strong>Start Date:</strong> {experience.startDate}
          </span>
        </p>
        <p className="flex items-center">
          <FaCalendarCheck className="mr-2 text-gray-500 dark:text-gray-300" />
          <span>
            <strong>End Date:</strong> {experience.endDate}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
