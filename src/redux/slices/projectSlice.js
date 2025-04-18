import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  featuredProjects: [],
  status: "idle",
  error: null,
};

const projectSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    // Action to set projects
    setProjects: (state, action) => {
      state.projects = action.payload;
      state.featuredProjects = action.payload.filter(
        (project) => project.isPinned
      );
    },
    // Action to add a new project
    addProject: (state, action) => {
      state.projects.push(action.payload);
      if (action.payload.isPinned) {
        state.featuredProjects.push(action.payload);
      }
    },
    // Action to update an existing project
    updateProject: (state, action) => {
      const index = state.projects.findIndex(
        (project) => project._id === action.payload._id
      );
      if (index !== -1) {
        state.projects[index] = action.payload;
        state.featuredProjects = state.projects.filter(
          (project) => project.isPinned
        );
      }
    },
    // Action to delete a project
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
      state.featuredProjects = state.featuredProjects.filter(
        (project) => project._id !== action.payload
      );
    },
    // Action to toggle the pinned status of a project
    togglePinProject: (state, action) => {
      const projectId = action.payload;
      const project = state.projects.find(
        (project) => project.id === projectId
      );
      if (project) {
        project.isPinned = !project.isPinned;
        state.featuredProjects = state.projects.filter(
          (project) => project.isPinned
        );
      }
    },
  },
});

// Export the actions
export const {
  setProjects,
  addProject,
  updateProject,
  deleteProject,
  togglePinProject,
} = projectSlice.actions;

// Export the reducer
export default projectSlice.reducer;

// Define and export the selector
export const selectProjects = (state) => state.portfolio.projects;
