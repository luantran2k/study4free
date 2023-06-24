import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['user', 'id'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://study4free-api.onrender.com/', prepareHeaders: (headers, { getState }) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDk1ZDM1N2U2NjI2MWMzZDZjZmE2OGUiLCJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTY4NzU5NzgxMCwiZXhwIjoxNjg3NjAxNDEwfQ.ENv8PAclH5PjP9_QAB8A5mgszRkJT9HD2qwDDelP-cQ';
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },}),
    
    endpoints: (builder) => ({
        getUserById: builder.query<any, string>({
            query: (id) => `users/${id}`,
            providesTags: () => ['user']
        }),
        updateInfor: builder.mutation({
            query: (data) => ({
                url: `users/${data.id}`,
                method: 'PATCH',
                body: data.newdata,
            }),
            invalidatesTags: () => ['user']
        })
    })
})

export const { useGetUserByIdQuery, useUpdateInforMutation } = userApi
