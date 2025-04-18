import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Create a slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the user
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Action to clear the user (logout)
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export the actions
export const { setUser, logoutUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
