import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../services/endpoint";

export const authSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_ENDPOINT }),
  endpoints: (builder) => ({
    //login
    loginApp: builder.query({
      query: () => ({
        url: API_ENDPOINTS.GOOGLE_LOGIN,
        method: "GET",
      }),
    }),
    //login check
    isLogin: builder.query({
      query: () => ({
        url: API_ENDPOINTS.LOGIN_CHECK,
        method: "GET",
      }),
    }),
    //logout
    logout: builder.query({
      query: () => ({
        url: API_ENDPOINTS.LOGOUT,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginAppQuery, useIsLoginQuery, useLogoutQuery } = authSlice;
