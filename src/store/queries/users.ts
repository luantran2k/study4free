import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tokenUser = JSON.parse(localStorage.getItem('user') as string).token;

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['user', 'id'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://study4free-api.onrender.com/', prepareHeaders: (headers, { getState }) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDk2NDdhOTdkZWFmODY4MmRlYTdjZDIiLCJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjg3NjE5MTA3LCJleHAiOjE2ODc2MjI3MDd9.nZazJM5vtopDJ5Xb3rqPPdO_4HdVfZCO5TjALkLrViU';
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
        }),
        addNewCollection: builder.mutation({
            query: (data) => ({
                url: `collections`,
                method: 'POST',
                body: data
            })
        }),
        addNewVocabulary: builder.mutation({
            query: (data) => ({
                url: 'vocabularies',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
  useGetUserByIdQuery,
  useUpdateInforMutation,
  useAddNewCollectionMutation,
  useAddNewVocabularyMutation,
} = userApi;
