import { configureStore } from "@reduxjs/toolkit";

import { postsSlice } from "../api/post/apiSlice";
import { authSlice } from "../api/auth/apiSlice";

export const store = configureStore({
  reducer: {
    [postsSlice.reducerPath]: postsSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      postsSlice.middleware,
      authSlice.middleware,
    ]),
});
