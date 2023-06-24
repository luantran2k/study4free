import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['user', 'id'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://study4free-api.onrender.com/', prepareHeaders: (headers, { getState }) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDk1ZGZlODNkOThiY2FhNmE3MGFkOWEiLCJ1c2VybmFtZSI6ImFkbWluMiIsImlhdCI6MTY4NzYwODI5NywiZXhwIjoxNjg3NjExODk3fQ.pszm97YLpCdcBSot9s4-ZKrl3DUW56-fyO3MG6VlmmU';
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
