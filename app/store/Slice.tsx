import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // Store data in AsyncStorage
      AsyncStorage.setItem("user", JSON.stringify(action.payload.user));
      AsyncStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      // Remove data from AsyncStorage
      AsyncStorage.removeItem("user");
      AsyncStorage.removeItem("token");
    },
  },
});

export const { setUser, logout } = loginSlice.actions;
export default loginSlice.reducer;
