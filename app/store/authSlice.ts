import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  jwt: string | null;
}

const initialState: AuthState = {
  user: null,
  jwt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ user: User; jwt: string }>) {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;

      // ✅ Only access localStorage in the browser
      if (typeof window !== "undefined") {
        localStorage.setItem("jwt", action.payload.jwt);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },
    logout(state) {
      state.user = null;
      state.jwt = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
      }
    },
    loadFromStorage(state) {
      const jwt = localStorage.getItem("jwt");
      const user = localStorage.getItem("user");
      if (jwt && user) {
        state.jwt = jwt;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { loginSuccess, logout, loadFromStorage } = authSlice.actions;
export default authSlice.reducer;
