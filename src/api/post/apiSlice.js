import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../services/endpoint";

export const postsSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_ENDPOINT }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => API_ENDPOINTS.POST,
      providesTags: ["Posts"],
    }),
    getPost: builder.query({
      query: (permalink) => `${API_ENDPOINTS.POST}${permalink}`,
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINTS.POST,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePosts: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINTS.POST}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePosts: builder.mutation({
      query: (id, body) => ({
        url: `${API_ENDPOINTS.POST}/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useDeletePostsMutation,
  useUpdatePostsMutation,
} = postsSlice;
