import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FiSave,
  FiUser,
  FiMail,
  FiLink,
  FiGlobe,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiEdit,
  FiX,
  FiLoader,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";
import ReusableBtn from "../Components/ReusableBtn";
import { USER_API_ENDPOINT } from "../../../constant/data";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    ProfessionalTitle: "",
    aboutText: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    githubURL: "",
    linkedinURL: "",
    twitterURL: "",
    facebookURL: "",
    dribbbleURL: "",
    behanceURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await axios.get(`${USER_API_ENDPOINT}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (res.data.success && res.data.user) {
          setFormData(res.data.user);
          dispatch(setUser(res.data.user));
        } else {
          throw new Error("Failed to load user data");
        }
      } catch (error) {
        setError(error.message);
        toast.error(error.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    // Reset form to current user data when canceling edit
    if (isEditing && currentUser) {
      setFormData(currentUser);
    }
  };

  const handleSaveProfile = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const res = await axios.put(
        `${USER_API_ENDPOINT}/update-profile`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (!res.data.success || !res.data.user) {
        throw new Error("Failed to save profile");
      }

      // Update both local state and Redux store
      setFormData(res.data.user);
      dispatch(setUser(res.data.user));

      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
      toast.error(error.response?.data?.message || "Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <FiLoader className="h-12 w-12 animate-spin mx-auto text-blue-500" />
        <h3 className="text-xl text-gray-600 dark:text-gray-400 mt-4">
          Loading profile...
        </h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
          Profile Settings
        </h1>
        {!isEditing ? (
          <ReusableBtn
            type="button"
            onClick={toggleEditMode}
            icon={<FiEdit className="h-4 w-4" />}
            text="Edit"
          />
        ) : (
          <div className="flex items-center space-x-2">
            <ReusableBtn
              type="button"
              onClick={toggleEditMode}
              icon={<FiX className="h-4 w-4" />}
              text="Cancel"
              disabled={saving}
            />
            <ReusableBtn
              type="button"
              onClick={handleSaveProfile}
              icon={
                saving ? (
                  <FiLoader className="h-4 w-4 animate-spin" />
                ) : (
                  <FiSave className="h-4 w-4" />
                )
              }
              text={saving ? "Saving..." : "Save"}
              disabled={saving}
            />
          </div>
        )}
      </div>

      {/* Personal Information Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-primary dark:text-secondary">
            Personal Information
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update your personal and contact information.
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  disabled={!isEditing || saving}
                  className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                    !isEditing || saving
                      ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Professional Title Field */}
            <div>
              <label
                htmlFor="ProfessionalTitle"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Professional Title
              </label>
              <input
                type="text"
                name="ProfessionalTitle"
                id="ProfessionalTitle"
                value={formData.ProfessionalTitle || ""}
                onChange={handleChange}
                disabled={!isEditing || saving}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                  !isEditing || saving
                    ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                    : ""
                }`}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  disabled={true} // Email should typically not be editable
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 cursor-not-allowed dark:text-white sm:text-sm"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                disabled={!isEditing || saving}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                  !isEditing || saving
                    ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                    : ""
                }`}
              />
            </div>

            {/* Location Field */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiGlobe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  disabled={!isEditing || saving}
                  className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                    !isEditing || saving
                      ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Website Field */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Website
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLink className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="website"
                  id="website"
                  value={formData.website || ""}
                  onChange={handleChange}
                  disabled={!isEditing || saving}
                  className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                    !isEditing || saving
                      ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Bio Field */}
          <div className="mt-6">
            <label
              htmlFor="aboutText"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Bio
            </label>
            <textarea
              id="aboutText"
              name="aboutText"
              rows="4"
              value={formData.aboutText || ""}
              onChange={handleChange}
              disabled={!isEditing || saving}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                !isEditing || saving
                  ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-primary dark:text-secondary">
            Social Links
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Connect your social media accounts.
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* GitHub Field */}
            <div>
              <label
                htmlFor="githubURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                GitHub
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiGithub className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="githubURL"
                  id="githubURL"
                  value={formData.githubURL || ""}
                  onChange={handleChange}
                  disabled={!isEditing || saving}
                  className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                    !isEditing || saving
                      ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="https://github.com/username"
                />
              </div>
            </div>

            {/* LinkedIn Field */}
            <div>
              <label
                htmlFor="linkedinURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                LinkedIn
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLinkedin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="linkedinURL"
                  id="linkedinURL"
                  value={formData.linkedinURL || ""}
                  onChange={handleChange}
                  disabled={!isEditing || saving}
                  className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                    !isEditing || saving
                      ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            {/* Twitter Field */}
            <div>
              <label
                htmlFor="twitterURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Twitter
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiTwitter className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="twitterURL"
                  id="twitterURL"
                  value={formData.twitterURL || ""}
                  onChange={handleChange}
                  disabled={!isEditing || saving}
                  className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                    !isEditing || saving
                      ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="https://twitter.com/username"
                />
              </div>
            </div>

            {/* Facebook Field */}
            <div>
              <label
                htmlFor="facebookURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Facebook
              </label>
              <input
                type="url"
                name="facebookURL"
                id="facebookURL"
                value={formData.facebookURL || ""}
                onChange={handleChange}
                disabled={!isEditing || saving}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                  !isEditing || saving
                    ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                    : ""
                }`}
                placeholder="https://facebook.com/username"
              />
            </div>

            {/* Dribbble Field */}
            <div>
              <label
                htmlFor="dribbbleURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Dribbble
              </label>
              <input
                type="url"
                name="dribbbleURL"
                id="dribbbleURL"
                value={formData.dribbbleURL || ""}
                onChange={handleChange}
                disabled={!isEditing || saving}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                  !isEditing || saving
                    ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                    : ""
                }`}
                placeholder="https://dribbble.com/username"
              />
            </div>

            {/* Behance Field */}
            <div>
              <label
                htmlFor="behanceURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Behance
              </label>
              <input
                type="url"
                name="behanceURL"
                id="behanceURL"
                value={formData.behanceURL || ""}
                onChange={handleChange}
                disabled={!isEditing || saving}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm ${
                  !isEditing || saving
                    ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                    : ""
                }`}
                placeholder="https://behance.net/username"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
