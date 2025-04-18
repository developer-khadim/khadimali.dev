import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import ReusableBtn from "../Components/ReusableBtn";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertTriangle, FiX, FiLoader } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";
import ExperienceModal from "../Components/ExperienceModal";
import ExperienceItem from "../Components/ExperienceItem";
import { EXPERIENCE_API_ENDPOINT } from "../../../constant/data";
import {
  experienceContainerVariants,
  experienceItemVariants,
} from "../../../AnimationVariants/variants.";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [deleteExperienceId, setDeleteExperienceId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // For save operations
  const [deleting, setDeleting] = useState(false); // For delete operations

  // Fetch experiences from the backend on component mount
  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${EXPERIENCE_API_ENDPOINT}/get-experience`
        );
        if (Array.isArray(response.data.experiences)) {
          setExperiences(response.data.experiences);
        } else {
          console.error("Response data is not an array:", response.data);
          setExperiences([]);
          setError("Invalid data format received from the server.");
        }
      } catch (err) {
        setError("Failed to fetch experiences. Please try again later.");
        console.error("Fetch Experiences Error:", err);
        setExperiences([]);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  const openAddExperienceModal = () => {
    setSelectedExperience(null);
    setIsModalOpen(true);
  };

  const openEditExperienceModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const openDeleteModal = (id) => {
    setDeleteExperienceId(id);
  };

  const closeModals = () => {
    setIsModalOpen(false);
    setDeleteExperienceId(null);
    setError(null);
  };

  const handleSaveExperience = async (experienceData) => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      const normalizedExperience = {
        role: experienceData.role,
        company: experienceData.company,
        location: experienceData.location,
        remote: experienceData.remote,
        startDate: experienceData.startDate,
        endDate: experienceData.endDate,
      };

      let response;
      if (experienceData._id) {
        response = await axios.put(
          `${EXPERIENCE_API_ENDPOINT}/update/${experienceData._id}`,
          normalizedExperience,
          config
        );

        setExperiences(
          experiences.map((experience) =>
            experience._id === experienceData._id
              ? response.data.experience
              : experience
          )
        );
        toast.success("Experience updated successfully");
      } else {
        response = await axios.post(
          `${EXPERIENCE_API_ENDPOINT}/add`,
          normalizedExperience,
          config
        );

        setExperiences([...experiences, response.data.experience]);
        toast.success("Experience added successfully");
      }

      closeModals();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to save experience. Please try again.";
      setError(errorMessage);
      console.error("Save Error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteExperience = async () => {
    try {
      setDeleting(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      const res = await axios.delete(
        `${EXPERIENCE_API_ENDPOINT}/delete/${deleteExperienceId}`,
        config
      );
      toast.success(res.data.message);
      setExperiences(
        experiences.filter(
          (experience) => experience._id !== deleteExperienceId
        )
      );
      closeModals();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to delete experience. Please try again.";
      setError(errorMessage);
      console.error("Delete Error:", err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="select-none">
      {/* Header and button section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
            Experience Management
          </h1>
        </div>

        <ReusableBtn
          type="button"
          onClick={openAddExperienceModal}
          icon={<FaPlus className="h-4 w-4" />}
          text="Add Experience"
          disabled={loading}
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Experiences grid */}
      <motion.div
        variants={experienceContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <FiLoader className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map((experience) => (
            <motion.div key={experience._id} variants={experienceItemVariants}>
              <ExperienceItem
                experience={experience}
                openEditExperienceModal={openEditExperienceModal}
                openDeleteModal={openDeleteModal}
              />
            </motion.div>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-xl text-gray-600 dark:text-gray-400">
              No experiences found. Add your first experience to get started!
            </h3>
          </div>
        )}
      </motion.div>

      {/* Modals */}
      <ExperienceModal
        isOpen={isModalOpen}
        error={error}
        onClose={closeModals}
        experience={selectedExperience}
        onSave={handleSaveExperience}
        isSaving={saving}
      />

      <AnimatePresence>
        {deleteExperienceId && (
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
                    Delete Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Are you sure you want to delete this experience? This action
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
                  onClick={handleDeleteExperience}
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

export default Experience;
