import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://study4free-api.onrender.com',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { username: string; password: string }) => {
        return {
          url: '/auth/login',
          method: 'post',
          body,
        };
      },
    }),
    register: builder.mutation({
      query: (body: {
        username: string;
        password: string;
        email: string;
        gender: string;
      }) => {
        return {
          url: '/auth/register',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterMutation } = authApi;
