import { FiX, FiSave, FiLoader } from "react-icons/fi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ReusableBtn from "./ReusableBtn";

const ProjectModal = ({
  isModalOpen,
  isEditMode,
  newProject,
  techInput,
  previewImage,
  handleSubmit,
  handleInputChange,
  handleTechKeyDown,
  removeTechnology,
  handleImageUpload,
  resetForm,
  setTechInput,
  fileInputRef,
  isSaving,
}) => {
  if (!isModalOpen) return null;

  // Define available categories (updated to only four categories)
  const categories = [
    { value: "", label: "Select a category" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "FullStack" },
    { value: "html-css-js", label: "HTML/CSS/JS" },
    { value: "other", label: "Other" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={resetForm}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 text-white">
          <h3 className="text-xl font-bold text-primary dark:text-secondary">
            {isEditMode ? "Edit Project" : "Add New Project"}
          </h3>
          <ReusableBtn
            onClick={resetForm}
            icon={<FiX className="h-5 w-5" />}
            isMr={false}
            className="text-black"
            disabled={isSaving}
          />
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Image
              </label>
              <div
                className="relative h-52 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                onClick={() => fileInputRef.current?.click()}
              >
                {previewImage &&
                previewImage !== "https://via.placeholder.com/300" ? (
                  <img
                    src={previewImage}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <AiOutlineCloudUpload className="w-12 h-12 mr-2" />
                    <span>Upload Project Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                  <span className="text-white text-sm px-3 py-1 bg-blue-500 rounded-full">
                    Change Image
                  </span>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={newProject.title}
                  onChange={handleInputChange}
                  className="px-4 py-2 block w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={newProject.category}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-2 block w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={newProject.description}
                  onChange={handleInputChange}
                  className="px-4 py-2 block w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your project"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Technologies
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={handleTechKeyDown}
                placeholder="Add technologies (press Enter)"
                className="px-4 py-2 flex-1 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {newProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(tech)}
                    className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="liveLink"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Live Demo URL
              </label>
              <input
                type="url"
                id="liveLink"
                name="liveLink"
                value={newProject.liveLink}
                onChange={handleInputChange}
                className="px-4 py-2 block w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label
                htmlFor="githubLink"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                GitHub URL
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                value={newProject.githubLink}
                onChange={handleInputChange}
                className="px-4 py-2 block w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://github.com/username/repo"
              />
            </div>
          </div>

          <div className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <input
              type="checkbox"
              id="isPinned"
              name="isPinned"
              checked={newProject.isPinned || false}
              onChange={handleInputChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="isPinned"
              className="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Show this project on the top
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            <ReusableBtn
              onClick={resetForm}
              icon={<FiSave className="h-4 w-4" />}
              text={"Cancel"}
              disabled={isSaving}
            />
            <ReusableBtn
              type="submit"
              icon={
                isSaving ? <FiLoader className="h-4 w-4 animate-spin" /> : null
              }
              text={isSaving ? "Saving..." : "Save Project"}
              disabled={isSaving}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
