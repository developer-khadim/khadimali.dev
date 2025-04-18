import React, { useState, useEffect, useRef } from "react";
import { FiX, FiSave, FiLoader } from "react-icons/fi";
import ReusableBtn from "./ReusableBtn";

const ExperienceModal = ({
  error,
  isOpen,
  onClose,
  experience,
  onSave,
  isSaving,
}) => {
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    location: "",
    remote: false,
    startDate: "",
    endDate: "",
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (experience) {
      setExperienceData({
        _id: experience._id,
        role: experience.role,
        company: experience.company,
        location: experience.location,
        remote: experience.remote,
        startDate: experience.startDate,
        endDate: experience.endDate,
      });
    } else {
      resetFields();
    }
  }, [experience]);

  const resetFields = () => {
    setExperienceData({
      role: "",
      company: "",
      location: "",
      remote: false,
      startDate: "",
      endDate: "",
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await onSave(experienceData);
    if (!experience) resetFields();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary dark:text-secondary">
            {experience ? "Edit Experience" : "Add Experience"}
          </h2>

          <ReusableBtn
            type="button"
            onClick={onClose}
            icon={<FiX className="h-4 w-4" />}
            isMr={false}
            disabled={isSaving}
          />
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Role *
            </label>
            <input
              type="text"
              name="role"
              value={experienceData.role}
              onChange={handleChange}
              placeholder="Enter role"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-70"
              required
              disabled={isSaving}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={experienceData.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-70"
              disabled={isSaving}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={experienceData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-70"
              disabled={isSaving}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remote"
              id="job"
              checked={experienceData.remote}
              onChange={handleChange}
              className="text-blue-500 disabled:opacity-70"
              disabled={isSaving}
            />
            <label
              htmlFor="job"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Is this remote job?
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Starting Date
            </label>
            <input
              type="text"
              name="startDate"
              value={experienceData.startDate}
              onChange={handleChange}
              placeholder="Starting date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-70"
              disabled={isSaving}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              End Date (if currently working then leave)
            </label>
            <input
              type="text"
              name="endDate"
              value={experienceData.endDate}
              onChange={handleChange}
              placeholder="Leaving date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-70"
              disabled={isSaving}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-600">
            <ReusableBtn
              type="button"
              onClick={() => {
                onClose();
                resetFields();
              }}
              icon={<FiX className="h-4 w-4" />}
              text="Cancel"
              disabled={isSaving}
            />

            <ReusableBtn
              type="submit"
              icon={
                isSaving ? (
                  <FiLoader className="h-4 w-4 animate-spin" />
                ) : (
                  <FiSave className="h-4 w-4" />
                )
              }
              text={isSaving ? "Saving..." : "Save"}
              disabled={isSaving}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceModal;
