import React, { useState, useEffect } from "react";
import SkillModal from "../Components/SkillModal";
import SkillItem from "../Components/SkillItem";
import { FaPlus } from "react-icons/fa";
import ReusableBtn from "../Components/ReusableBtn";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertTriangle, FiX, FiLoader } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";
import { EXPERTISE_API_ENDPOINT } from "../../../constant/data";
import {
  ExpertiseContainerVariants,
  ExpertiseItemVariants,
} from "../../../AnimationVariants/variants.";

const Expertise = () => {
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [deleteSkillId, setDeleteSkillId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false); // New state for delete loading

  // Fetch skills from the backend on component mount
  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${EXPERTISE_API_ENDPOINT}/get-expertise`
        );
        if (Array.isArray(response.data)) {
          setSkills(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
          setSkills([]);
          setError("Invalid data format received from the server.");
        }
      } catch (err) {
        setError("Failed to fetch skills. Please try again later.");
        console.error("Fetch Skills Error:", err);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const openAddSkillModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(true);
  };

  const openEditSkillModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const openDeleteModal = (id) => {
    setDeleteSkillId(id);
  };

  const closeModals = () => {
    setIsModalOpen(false);
    setDeleteSkillId(null);
    setError(null);
  };

  const handleSaveSkill = async (skillData) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      // Normalize data structure for backend
      const backendData = {
        category: skillData.category,
        technologies: [skillData.name],
        icon: skillData.icon,
      };

      let response;
      if (skillData._id) {
        response = await axios.put(
          `${EXPERTISE_API_ENDPOINT}/update-expertise/${skillData._id}`,
          backendData,
          config
        );

        setSkills(
          skills.map((skill) =>
            skill._id === skillData._id
              ? {
                  ...response.data.data,
                  name: response.data.data.technologies[0] || "",
                }
              : skill
          )
        );
      } else {
        response = await axios.post(
          `${EXPERTISE_API_ENDPOINT}/add-expertise`,
          backendData,
          config
        );

        setSkills([
          ...skills,
          {
            ...response.data.data,
            name: response.data.data.technologies[0] || "",
          },
        ]);
      }

      toast.success(response.data.message);
      closeModals();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to save skill. Please try again.";
      setError(errorMessage);
      console.error("Save Skill Error:", err);
    }
  };

  const handleDeleteSkill = async () => {
    try {
      setDeleting(true); // Start loading
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      const res = await axios.delete(
        `${EXPERTISE_API_ENDPOINT}/delete-expertise/${deleteSkillId}`,
        config
      );
      toast.success(res.data.message);
      setSkills(skills.filter((skill) => skill._id !== deleteSkillId));
      closeModals();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to delete skill. Please try again.";
      setError(errorMessage);
      console.error("Delete Error:", err);
    } finally {
      setDeleting(false); // End loading
    }
  };

  return (
    <div className="select-none">
      {/* Header and button section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl md:text-3xl font-bold text-primary dark:text-secondary">
          Expertise Management
        </h1>

        <ReusableBtn
          type="button"
          onClick={openAddSkillModal}
          icon={<FaPlus className="h-4 w-4" />}
          text="Add Skill"
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Skills grid */}
      <motion.div
        variants={ExpertiseContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <FiLoader className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : Array.isArray(skills) && skills.length > 0 ? (
          skills.map((skill) => (
            <motion.div key={skill._id} variants={ExpertiseItemVariants}>
              <SkillItem
                skill={skill}
                openEditSkillModal={openEditSkillModal}
                openDeleteModal={openDeleteModal}
              />
            </motion.div>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-xl text-gray-600 dark:text-gray-400">
              No skills found. Add your first skill to get started!
            </h3>
          </div>
        )}
      </motion.div>

      {/* Modals */}
      <SkillModal
        isOpen={isModalOpen}
        onClose={closeModals}
        skill={selectedSkill}
        onSave={handleSaveSkill}
      />

      <AnimatePresence>
        {deleteSkillId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md"
            >
              <div className="flex items-start mb-4">
                <FiAlertTriangle className="text-red-500 w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Delete Skill
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Are you sure you want to delete this skill? This action
                    cannot be undone.
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <ReusableBtn
                  onClick={closeModals}
                  icon={<FiX className="h-4 w-4 text-red-500" />}
                  text="Cancel"
                  disabled={deleting}
                />

                <ReusableBtn
                  onClick={handleDeleteSkill}
                  icon={
                    deleting ? (
                      <FiLoader className="h-4 w-4 animate-spin" />
                    ) : null
                  }
                  text={deleting ? "Deleting..." : "Confirm Delete"}
                  disabled={deleting}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Expertise;
