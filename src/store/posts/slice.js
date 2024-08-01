import { createSlide } from "@reduxjs/toolkit";

export const postsSlide = createSlide({
  name: "posts",
  initialState: [],
  reducers: {
    deletePostsById: (state, action) => {},
    createPost: (state, action) => {},
    modifyPostById: (state, action) => {},
  },
});

export default postsSlide.reducers;
