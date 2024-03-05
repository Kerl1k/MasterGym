import { configureStore } from "@reduxjs/toolkit";
import { exerciseApi } from "../services/exerciseService";
import { userApi } from "../services/userService";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [exerciseApi.reducerPath]: exerciseApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(
      userApi.middleware,
      exerciseApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
