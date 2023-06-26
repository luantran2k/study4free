import { RootState } from '..';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User', 'Collection', 'Vocab'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://study4free-api.onrender.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserById: builder.query<any, string>({
      query: (id) => `users/${id}`,
      providesTags: () => ['User'],
    }),
    updateInfor: builder.mutation({
      query: (data) => ({
        url: `users/${data.id}`,
        method: 'PATCH',
        body: data.newdata,
      }),
      invalidatesTags: () => ['User'],
    }),
    getAllCollecton: builder.query({
      query: () => 'collections?page=0&quantity=100',
      providesTags: () => ['Collection'],
    }),
    getCollectionById: builder.query({
      query: (id) => `collections/${id}`,
      providesTags: () => ['Collection', 'Vocab'],
    }),
    addNewCollection: builder.mutation({
      query: (data) => ({
        url: `collections`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: () => ['Collection'],
    }),
    addNewVocabulary: builder.mutation({
      query: (data) => ({
        url: 'vocabularies',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: () => ['Collection', 'Vocab', 'User'],
    }),
    addNewTodo: builder.mutation({
      query: (data) => ({
        url: 'todos',
        method: 'POST',
        body: data
      }),
      invalidatesTags: () => ['User']
    }),
    deleteToDo: builder.mutation({
      query: (id) => ({
          url: `todos/${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: () => ['User']
    })
  }),
});

export const {
  useGetUserByIdQuery,
  useUpdateInforMutation,
  useGetAllCollectonQuery,
  useGetCollectionByIdQuery,
  useAddNewCollectionMutation,
  useAddNewVocabularyMutation,
  useAddNewTodoMutation,
  useDeleteToDoMutation,
} = userApi;
