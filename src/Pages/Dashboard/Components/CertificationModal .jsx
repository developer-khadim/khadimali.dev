import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FiX, FiSave, FiLoader } from "react-icons/fi";
import ReusableBtn from "./ReusableBtn";

const CertificationModal = ({
  isOpen,
  onClose,
  certification,
  onSave,
  isLoading,
}) => {
  const [certificationData, setCertificationData] = useState({
    institution: "",
    title: "",
    startDate: "",
    endDate: "",
    viewCredentials: "",
  });

  useEffect(() => {
    if (certification) {
      setCertificationData(certification);
    } else {
      setCertificationData({
        institution: "",
        title: "",
        startDate: "",
        endDate: "",
        viewCredentials: "",
      });
    }
  }, [certification]);

  const handleChange = (e) => {
    setCertificationData({
      ...certificationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(certificationData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary dark:text-secondary">
            {certification ? "Edit Certification" : "Add Certification"}
          </h2>
          <ReusableBtn
            onClick={onClose}
            icon={<FiX className="h-5 w-5" />}
            isMr={false}
            disabled={isLoading}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Institution *
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all"
              type="text"
              placeholder="Institution Name"
              name="institution"
              value={certificationData.institution}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Certification Title *
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all"
              type="text"
              placeholder="Certification Title"
              name="title"
              value={certificationData.title}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date *
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all"
                type="text"
                name="startDate"
                value={certificationData.startDate}
                placeholder="MM/YYYY"
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date (if applicable)
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all"
                type="text"
                name="endDate"
                value={certificationData.endDate}
                placeholder="MM/YYYY"
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Credential URL
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all"
              type="url"
              name="viewCredentials"
              value={certificationData.viewCredentials}
              placeholder="https://example.com/certificate"
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-600">
            <ReusableBtn
              type="button"
              onClick={onClose}
              icon={<FiX className="h-4 w-4" />}
              text="Cancel"
              disabled={isLoading}
            />
            <ReusableBtn
              type="submit"
              icon={
                isLoading ? (
                  <FiLoader className="h-4 w-4 animate-spin" />
                ) : (
                  <FiSave className="h-4 w-4" />
                )
              }
              text={isLoading ? "Saving..." : "Save"}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

CertificationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  certification: PropTypes.shape({
    _id: PropTypes.string,
    institution: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    viewCredentials: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

CertificationModal.defaultProps = {
  certification: null,
};

export default CertificationModal;
