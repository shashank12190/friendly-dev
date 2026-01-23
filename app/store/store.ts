import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // adjust the path if needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// TypeScript types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
