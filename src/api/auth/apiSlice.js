import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../services/endpoint";

export const authSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_ENDPOINT }),
  endpoints: (builder) => ({
    //login check
    isLogin: builder.query({
      query: () => ({
        url: API_ENDPOINTS.LOGIN_CHECK,
        method: "GET",
        providesTags: ["Logs"],
      }),
    }),
    //login check
    loginChecker: builder.mutation({
      query: () => ({
        url: API_ENDPOINTS.LOGIN_CHECK,
        method: "GET",
        invalidatesTags: ["Logs"],
      }),
    }),

    //logout
    logout: builder.mutation({
      query: () => ({
        url: API_ENDPOINTS.LOGOUT,
        method: "POST",
        invalidatesTags: ["Logs"],
      }),
    }),
  }),
});

export const { useIsLoginQuery, useLogoutMutation, useLoginCheckerMutation } =
  authSlice;
