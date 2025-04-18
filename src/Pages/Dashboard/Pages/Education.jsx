import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiLoader,
} from "react-icons/fi";
import EducationModal from "../Components/EducationModal";
import educationImage from "../Imgs/education.svg";
import certificationImage from "../Imgs/certification.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ReusableBtn from "../Components/ReusableBtn";
import {
  COURSE_API_ENDPOINT,
  EDUCATION_API_ENDPOINT,
} from "../../../constant/data";
import CertificationModal from "../Components/CertificationModal ";

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [educationModalOpen, setEducationModalOpen] = useState(false);
  const [certificationModalOpen, setCertificationModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [educationLoading, setEducationLoading] = useState(false);
  const [educationDeleteLoading, setEducationDeleteLoading] = useState(null);
  const [certificationLoading, setCertificationLoading] = useState(false);
  const [certificationDeleteLoading, setCertificationDeleteLoading] =
    useState(null);

  const openEducationModal = (education = null) => {
    setSelectedEducation(education);
    setEducationModalOpen(true);
  };

  const closeEducationModal = () => {
    setEducationModalOpen(false);
    setSelectedEducation(null);
  };

  const openCertificationModal = (certification = null) => {
    setSelectedCertification(certification);
    setCertificationModalOpen(true);
  };

  const closeCertificationModal = () => {
    setCertificationModalOpen(false);
    setSelectedCertification(null);
  };

  const handleSaveEducation = async (educationData) => {
    setEducationLoading(true);
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      if (educationData._id) {
        const res = await axios.post(
          `${EDUCATION_API_ENDPOINT}/update/${educationData._id}`,
          educationData,
          config
        );
        setEducations(
          educations.map((edu) =>
            edu._id === res.data.updatedEducation._id
              ? res.data.updatedEducation
              : edu
          )
        );
        toast.success(res.data.message);
      } else {
        const res = await axios.post(
          `${EDUCATION_API_ENDPOINT}/add`,
          educationData,
          config
        );
        setEducations([...educations, res.data.degree]);
        toast.success(res.data.message);
      }
      closeEducationModal();
    } catch (error) {
      console.error(
        "Error saving education:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || "Failed to save education");
    } finally {
      setEducationLoading(false);
    }
  };

  const handleDeleteEducation = async (id) => {
    setEducationDeleteLoading(id);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${EDUCATION_API_ENDPOINT}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setEducations(educations.filter((edu) => edu._id !== id));
      toast.success(res.data.message);
    } catch (error) {
      console.error(
        "Error deleting education:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setEducationDeleteLoading(null);
    }
  };

  const handleSaveCertification = async (certificationData) => {
    setCertificationLoading(true);
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      if (certificationData._id) {
        const res = await axios.post(
          `${COURSE_API_ENDPOINT}/update/${certificationData._id}`,
          certificationData,
          config
        );
        setCertifications(
          certifications.map((cert) =>
            cert._id === res.data.updatedCourse._id
              ? res.data.updatedCourse
              : cert
          )
        );
        toast.success(res.data.message);
      } else {
        const res = await axios.post(
          `${COURSE_API_ENDPOINT}/add`,
          certificationData,
          config
        );
        setCertifications([...certifications, res.data.course]);
        toast.success(res.data.message);
      }
      closeCertificationModal();
    } catch (error) {
      console.error(
        "Error saving certification:",
        error.response?.data?.message || error.message
      );
      toast.error(
        error.response?.data?.message || "Failed to save certification"
      );
    } finally {
      setCertificationLoading(false);
    }
  };

  const handleDeleteCertification = async (id) => {
    setCertificationDeleteLoading(id);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${COURSE_API_ENDPOINT}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setCertifications(certifications.filter((cert) => cert._id !== id));
      toast.success(res.data.message);
    } catch (error) {
      console.error(
        "Error deleting certification:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setCertificationDeleteLoading(null);
    }
  };

  useEffect(() => {
    const fetchUserEducation = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${EDUCATION_API_ENDPOINT}/get-degrees`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setEducations(res.data.degrees);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchUserCertificates = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${COURSE_API_ENDPOINT}/get-courses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setCertifications(res.data.courses);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchUserEducation(), fetchUserCertificates()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Education Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
            Education
          </h1>
          <ReusableBtn
            onClick={() => openEducationModal()}
            icon={<FiPlus />}
            text="Add Education"
            disabled={loading}
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <FiLoader className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : educations?.length === 0 ? (
          <div className="flex justify-center items-center">
            <img src={educationImage} alt="No Education" className="max-w-xs" />
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {educations?.map((education) => (
                <li key={education._id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {education.institution}
                        </h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {education.startDate} -{" "}
                          {education.endDate || "Present"}
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-primary dark:text-secondary">
                        {education.degree}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-2">
                      <ReusableBtn
                        onClick={() => openEducationModal(education)}
                        icon={<FiEdit2 className="h-5 w-5" />}
                        isMr={false}
                        titleText="Edit Education Details"
                        disabled={educationDeleteLoading === education._id}
                      />
                      <ReusableBtn
                        onClick={() => handleDeleteEducation(education._id)}
                        icon={
                          educationDeleteLoading === education._id ? (
                            <FiLoader className="h-5 w-5 animate-spin" />
                          ) : (
                            <FiTrash2 className="h-5 w-5" />
                          )
                        }
                        isMr={false}
                        titleText="Delete"
                        disabled={educationDeleteLoading === education._id}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Certifications Section */}
      <div className="select-none">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
            Certifications
          </h2>
          <ReusableBtn
            onClick={() => openCertificationModal()}
            icon={<FiPlus />}
            text="Add Certification"
            disabled={loading}
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <FiLoader className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : certifications?.length === 0 ? (
          <div className="flex justify-center items-center">
            <img
              src={certificationImage}
              alt="No Certification"
              className="max-w-xs"
            />
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {certifications?.map((certification) => (
                <li
                  key={certification._id}
                  className="p-4 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {certification.institution}
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {certification.startDate}
                        {certification.endDate && ` - ${certification.endDate}`}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-primary dark:text-secondary">
                      {certification.title}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-2">
                    <ReusableBtn
                      onClick={() => openCertificationModal(certification)}
                      icon={<FiEdit2 className="h-5 w-5" />}
                      isMr={false}
                      titleText="Edit Certificate Details"
                      disabled={
                        certificationDeleteLoading === certification._id
                      }
                    />
                    <ReusableBtn
                      onClick={() =>
                        handleDeleteCertification(certification._id)
                      }
                      icon={
                        certificationDeleteLoading === certification._id ? (
                          <FiLoader className="h-5 w-5 animate-spin" />
                        ) : (
                          <FiTrash2 className="h-5 w-5" />
                        )
                      }
                      isMr={false}
                      titleText="Delete Certificate"
                      disabled={
                        certificationDeleteLoading === certification._id
                      }
                    />
                    <ReusableBtn
                      as={Link}
                      to={certification?.viewCredentials}
                      icon={<FiExternalLink className="h-5 w-5" />}
                      titleText="View Credentials"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200 hover:underline"
                      target="_blank"
                      disabled={
                        !certification?.viewCredentials ||
                        certificationDeleteLoading === certification._id
                      }
                      isMr={false}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <EducationModal
        isOpen={educationModalOpen}
        onClose={closeEducationModal}
        education={selectedEducation}
        onSave={handleSaveEducation}
        isLoading={educationLoading}
      />

      <CertificationModal
        isOpen={certificationModalOpen}
        onClose={closeCertificationModal}
        certification={selectedCertification}
        onSave={handleSaveCertification}
        isLoading={certificationLoading}
      />
    </div>
  );
};

export default Education;
