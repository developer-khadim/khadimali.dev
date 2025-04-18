import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiLoader,
} from "react-icons/fi";
import ProjectModal from "../Components/ProjectModal";
import {
  selectProjects,
  setProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../../../redux/slices/projectSlice";
import toast from "react-hot-toast";
import ReusableBtn from "../Components/ReusableBtn";
import { Link } from "react-router-dom";
import { PROJECTS_API_ENDPOINT } from "../../../constant/data";
import DeleteConfirmationModal from "../Components/DeleteConfirmationModal";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [previewImage, setPreviewImage] = useState(
    "https://via.placeholder.com/300"
  );
  const fileInputRef = useRef(null);
  const [techInput, setTechInput] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [newProject, setNewProject] = useState({
    _id: null,
    title: "",
    description: "",
    image: "https://via.placeholder.com/300",
    technologies: [],
    liveLink: "",
    githubLink: "",
    isPinned: false,
    category: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${PROJECTS_API_ENDPOINT}/get-all`);
      dispatch(setProjects(response.data));
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024 || !file.type.startsWith("image/")) {
        toast.error(
          file.size > 2 * 1024 * 1024
            ? "Image size should be less than 2MB"
            : "Please upload an image file"
        );
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setNewProject({ ...newProject, image: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProject({
      ...newProject,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTechKeyDown = (e) => {
    if (e.key === "Enter" && techInput.trim()) {
      e.preventDefault();
      const techs = techInput
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech);
      setNewProject((prevProject) => ({
        ...prevProject,
        technologies: [
          ...prevProject.technologies,
          ...techs.filter((tech) => !prevProject.technologies.includes(tech)),
        ],
      }));
      setTechInput("");
    }
  };

  const removeTechnology = (tech) => {
    setNewProject({
      ...newProject,
      technologies: newProject.technologies.filter((t) => t !== tech),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newProject.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!newProject.category) {
      toast.error("Category is required");
      return;
    }

    setSaving(true);
    try {
      let updatedTechnologies = [...newProject.technologies];
      if (techInput.trim()) {
        const techs = techInput
          .split(",")
          .map((tech) => tech.trim())
          .filter((tech) => tech);
        updatedTechnologies = [
          ...updatedTechnologies,
          ...techs.filter((tech) => !updatedTechnologies.includes(tech)),
        ];
      }

      const formData = new FormData();
      formData.append("title", newProject.title);
      formData.append("description", newProject.description);
      formData.append("technologies", JSON.stringify(updatedTechnologies));
      formData.append("liveDemoUrl", newProject.liveLink);
      formData.append("githubUrl", newProject.githubLink);
      formData.append("isPinned", newProject.isPinned);
      formData.append("category", newProject.category);
      if (newProject.image instanceof File) {
        formData.append("image", newProject.image);
      }

      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      if (isEditMode) {
        const response = await axios.put(
          `${PROJECTS_API_ENDPOINT}/update-project/${newProject._id}`,
          formData,
          config
        );
        dispatch(updateProject(response.data.project));
        toast.success("Project updated successfully");
      } else {
        const response = await axios.post(
          `${PROJECTS_API_ENDPOINT}/add-project`,
          formData,
          config
        );
        dispatch(addProject(response.data.project));
        toast.success("Project added successfully");
      }
      resetForm();
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error(error.response?.data?.message || "Error submitting project");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (project) => {
    setNewProject({
      ...project,
      liveLink: project.liveDemoUrl || "",
      githubLink: project.githubUrl || "",
      isPinned: project.isPinned || false,
      category: project.category || "",
    });
    setPreviewImage(project.imageUrl);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = (project) => {
    setProjectToDelete(project);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;

    setDeleting(true);
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };

      const res = await axios.delete(
        `${PROJECTS_API_ENDPOINT}/delete-project/${projectToDelete._id}`,
        config
      );
      dispatch(deleteProject(projectToDelete._id));
      toast.success(res.data.message);
      setIsDeleteModalOpen(false);
      setProjectToDelete(null);
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error(error.response?.data?.message || "Error deleting project");
    } finally {
      setDeleting(false);
    }
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProjectToDelete(null);
  };

  const resetForm = () => {
    setNewProject({
      _id: null,
      title: "",
      description: "",
      image: "https://via.placeholder.com/300",
      technologies: [],
      liveLink: "",
      githubLink: "",
      isPinned: false,
      category: "",
    });
    setPreviewImage("https://via.placeholder.com/300");
    setIsModalOpen(false);
    setIsEditMode(false);
    setTechInput("");
  };

  const handleButtonClick = () => {
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  // Function to format category display
  const formatCategory = (category) => {
    if (!category) return "N/A";
    switch (category) {
      case "frontend":
        return "Frontend";
      case "fullstack":
        return "FullStack";
      case "html-css-js":
        return "HTML/CSS/JS";
      case "other":
        return "Other";
      default:
        return category;
    }
  };

  return (
    <div className="space-y-6 select-none">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
          Projects
        </h1>
        <ReusableBtn
          onClick={handleButtonClick}
          icon={<FiPlus />}
          text="Add Project"
          disabled={loading}
        />
      </div>

      {loading ? (
        <div className="text-center py-16">
          <FiLoader className="h-12 w-12 animate-spin mx-auto text-blue-500" />
          <h3 className="text-xl text-gray-600 dark:text-gray-400 mt-4">
            Loading projects...
          </h3>
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            {projects?.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl text-gray-600 dark:text-gray-400 mt-4">
                  No projects found
                </h3>
              </div>
            ) : (
              <>
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    All Projects
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Project
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Technologies
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {projects?.map((project) => (
                        <tr
                          key={project._id}
                          className="
                           relative text-sm border border-indigo-600 dark:text-white
              shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
              hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
              dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
              dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
              hover:border-indigo-700 dark:hover:border-indigo-500
              ease-in-out select-none transition-colors duration-200 
                          hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-10 h-10 rounded-md mr-3 object-cover"
                              />
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {project.title}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-900 dark:text-white">
                              {formatCategory(project.category)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-3">
                              <ReusableBtn
                                as={Link}
                                to={project.liveDemoUrl}
                                icon={<FiExternalLink className="h-5 w-5" />}
                                titleText="View Site"
                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200 hover:underline"
                                target="_blank"
                                disabled={!project.liveDemoUrl}
                                isMr={false}
                              />
                              <ReusableBtn
                                onClick={() => handleEdit(project)}
                                icon={<FiEdit2 className="h-5 w-5" />}
                                isMr={false}
                                titleText="Edit"
                              />
                              <ReusableBtn
                                onClick={() => handleDelete(project)}
                                icon={<FiTrash2 className="h-5 w-5" />}
                                isMr={false}
                                titleText="Delete"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>

          {isModalOpen && (
            <ProjectModal
              isModalOpen={isModalOpen}
              isEditMode={isEditMode}
              newProject={newProject}
              techInput={techInput}
              previewImage={previewImage}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              handleTechKeyDown={handleTechKeyDown}
              removeTechnology={removeTechnology}
              handleImageUpload={handleImageUpload}
              resetForm={resetForm}
              setTechInput={setTechInput}
              fileInputRef={fileInputRef}
              isSaving={saving}
            />
          )}

          <DeleteConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
            onConfirm={confirmDelete}
            projectTitle={projectToDelete?.title}
            isDeleting={deleting}
          />
        </>
      )}
    </div>
  );
};

export default Projects;
