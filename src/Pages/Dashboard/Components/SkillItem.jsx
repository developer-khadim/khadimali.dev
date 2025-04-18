import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import ReusableBtn from "./ReusableBtn";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const SkillItem = ({ skill, openEditSkillModal, openDeleteModal }) => {
  const getIcon = (category) => {
    switch (category) {
      case "Frontend Development":
        return <FaReact className="w-8 h-8 text-blue-500" />;
      case "Backend Development":
        return <FaNodeJs className="w-8 h-8 text-green-500" />;
      case "Tools I Use":
        return <FaGitAlt className="w-8 h-8 text-gray-700" />;
      default:
        return null;
    }
  };

  // Map backend data to frontend structure
  const skillName =
    (skill.technologies && skill.technologies[0]) ||
    skill.description ||
    "Unnamed Skill";
  const skillCategory = skill.category || "Unknown Category";

  return (
    <div
      className="relative flex items-center text-sm dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:text-white
          shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
          hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
          dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
          dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
          hover:border-indigo-700 dark:hover:border-indigo-500
         ease-in-out select-noneflex justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full ">
          {skill.icon ? (
            <img
              src={skill.icon}
              alt={skillName}
              className="w-full h-full rounded-full object-contain"
            />
          ) : (
            getIcon(skillCategory)
          )}
        </div>
        <div>
          <p className="font-semibold text-primary dark:text-secondary">
            {skillName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {skillCategory}
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <ReusableBtn
          onClick={() => openEditSkillModal(skill)}
          icon={<FiEdit2 className="h-5 w-5" />}
          isMr={false}
          titleText="Edit"
        />

        <ReusableBtn
          onClick={() => openDeleteModal(skill._id)}
          icon={<FiTrash2 className="h-5 w-5" />}
          isMr={false}
          titleText="Delete"
        />
      </div>
    </div>
  );
};

export default SkillItem;
