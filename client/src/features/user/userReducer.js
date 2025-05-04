import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{id:null, username:null, email:null},
  isLoggedIn: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    userLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
