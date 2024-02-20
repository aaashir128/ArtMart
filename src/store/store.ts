import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user/user.slice";

export const userStore = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;
