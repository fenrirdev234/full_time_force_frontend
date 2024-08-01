import { createSlide } from "@reduxjs/toolkit";

export const usersSlide = createSlide({
  name: "users",
  initialState: [],
  reducers: {},
});

export default usersSlide.reducers;

/* export const postsSlide = createSlide({
  name: "users",
  initialState: [],
  reducers: {},
});

export default postsSlide.reducers; */
