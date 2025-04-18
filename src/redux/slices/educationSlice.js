import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  education: [],
};

// Create a slice
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    // Action to set the education
    setEducation: (state, action) => {
      state.education = action.payload;
      state.isAuthenticated = true;
    },
  },
});

// Export the actions
export const { setEducation } = educationSlice.actions;

// Export the reducer
export default educationSlice.reducer;
