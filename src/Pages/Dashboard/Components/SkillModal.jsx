import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FiUpload, FiX, FiSave, FiLoader } from "react-icons/fi";
import imageCompression from "browser-image-compression";
import ReusableBtn from "./ReusableBtn";

const SkillModal = ({ isOpen, onClose, skill, onSave }) => {
  const [skillData, setSkillData] = useState({
    name: "",
    category: "Frontend",
    icon: "",
  });
  const [preview, setPreview] = useState("");
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Initialize form when skill prop changes
  useEffect(() => {
    if (skill) {
      setSkillData({
        _id: skill._id,
        name: skill.technologies?.[0] || skill.name || "",
        category: skill.category || "Frontend",
        icon: skill.icon || "",
      });
      setPreview(skill.icon || "");
    } else {
      resetFields();
    }
  }, [skill]);

  const resetFields = () => {
    setSkillData({
      name: "",
      category: "Frontend",
      icon: "",
    });
    setPreview("");
    setError(null);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Clear previous errors
    setError(null);

    // Validate file type
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/webp",
    ];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a JPEG, PNG, SVG, or WebP image.");
      return;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      setError("Image size exceeds 2MB. Please choose a smaller file.");
      return;
    }

    try {
      setUploading(true);

      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 200,
        useWebWorker: true,
        fileType: file.type.includes("svg") ? "image/svg+xml" : "image/webp",
      };

      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setSkillData((prev) => ({ ...prev, icon: reader.result }));
        setUploading(false);
      };
      reader.readAsDataURL(compressedFile);
    } catch (err) {
      setError("Failed to process image. Please try another file.");
      console.error("Image processing error:", err);
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview("");
    setSkillData((prev) => ({ ...prev, icon: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate inputs
    if (!skillData.name.trim()) {
      setError("Skill name is required");
      return;
    }

    if (!skillData.category) {
      setError("Category is required");
      return;
    }

    try {
      setIsSubmitting(true);
      await onSave(skillData);
      if (!skill) resetFields(); // Only reset for new skills
    } catch (err) {
      console.error("Save error:", err);
      setError(err.message || "Failed to save skill");
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-2xl font-bold text-primary dark:text-secondary">
            {skill ? "Edit Skill" : "Add New Skill"}
          </h2>
          <ReusableBtn
            onClick={onClose}
            icon={<FiX className="h-5 w-5" />}
            isMr={false}
            className="text-black"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Skill Icon
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                (Optional)
              </span>
            </label>
            <div className="flex items-center gap-4">
              <div
                className={`relative flex items-center justify-center w-24 h-24 rounded-full cursor-pointer border-2 ${
                  preview
                    ? "border-solid border-transparent"
                    : "border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
                } transition-colors overflow-hidden`}
                onClick={() => !uploading && fileInputRef.current?.click()}
              >
                {preview ? (
                  <>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FiUpload className="text-white h-5 w-5" />
                    </div>
                  </>
                ) : uploading ? (
                  <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
                    <FiLoader className="h-6 w-6 animate-spin" />
                    <span className="text-xs mt-1">Uploading...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
                    <FiUpload className="h-6 w-6" />
                    <span className="text-xs mt-1">Upload Icon</span>
                  </div>
                )}
              </div>

              {preview && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                  disabled={isSubmitting}
                >
                  <FiX className="h-5 w-5" />
                  <span className="sr-only">Remove image</span>
                </button>
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
              accept="image/jpeg, image/png, image/svg+xml, image/webp"
              disabled={uploading || isSubmitting}
            />

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Recommended: Square image (200x200px), max 2MB
            </p>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Skill Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={skillData.name}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, Photoshop"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={skillData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-70 transition-all appearance-none"
              required
              disabled={isSubmitting}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Tools">Tools</option>
            </select>
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
              disabled={isSubmitting}
            />

            <ReusableBtn
              type="submit"
              icon={
                isSubmitting ? (
                  <FiLoader className="h-4 w-4 animate-spin" />
                ) : (
                  <FiSave className="h-4 w-4" />
                )
              }
              text={isSubmitting ? "Saving..." : "Save"}
              disabled={isSubmitting || uploading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

SkillModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  skill: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    icon: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
  onSave: PropTypes.func.isRequired,
};

SkillModal.defaultProps = {
  skill: null,
};

export default SkillModal;
