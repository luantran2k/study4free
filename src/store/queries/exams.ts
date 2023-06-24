import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SectionType } from '../../components/admin/Exams/Sections';
import IExam, { CreateExamFormData } from '../../interfaces/Exam';
import IPart from '../../interfaces/Part';
import BaseFilter from '../../interfaces/common/BaseFilter';
import { CreatePartFormData } from '../../schemas/part';
import IQuestion from '../../interfaces/Question';

export const examsApi = createApi({
  reducerPath: 'examsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_ACCESS_TOKEN;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Exams', 'Exam', 'Part', 'CountExam', 'CountPart'],
  endpoints: (builder) => ({
    getExams: builder.query<IExam[], BaseFilter>({
      query: ({ page, quantity, search }) => ({
        url: '/exams',
        params: {
          page,
          quantity,
          search,
        },
      }),
      providesTags: () => ['Exams'],
    }),
    countExams: builder.query<{ count: number }, BaseFilter>({
      query: ({ page, quantity, search }) => ({
        url: '/exams/count',
        params: {
          page,
          quantity,
          search,
        },
      }),
      providesTags: () => ['CountExam'],
    }),
    getExamById: builder.query<IExam, string>({
      query: (examId) => ({
        url: `/exams/${examId}`,
      }),
    }),
    createExam: builder.mutation<IExam, CreateExamFormData>({
      query: (createExamFormData) => ({
        url: '/exams',
        method: 'POST',
        body: createExamFormData,
      }),
      invalidatesTags: () => ['Exams', 'CountExam'],
    }),
    removeExam: builder.mutation({
      query: (examId) => ({
        url: `/exams/${examId}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Exams', 'CountExam'],
    }),
    getPartIdsBySectionId: builder.query<
      { id: string; parts: { id: string }[] },
      { section: SectionType; sectionId: string }
    >({
      query: ({ section, sectionId }) => ({
        url: `/sections/${section}/${sectionId}`,
      }),
      providesTags: () => ['CountPart'],
    }),
    getPartById: builder.query<IPart, { partId: string; section: string }>({
      query: ({ partId, section }) => ({
        url: `/parts/${section}/${partId}`,
      }),
      providesTags: () => ['Part'],
    }),
    createPart: builder.mutation<
      IPart,
      { section: SectionType; sectionId: string; data: CreatePartFormData }
    >({
      query: ({ section, sectionId, data }) => ({
        url: `/parts/${section}`,
        method: 'POST',
        body: { ...data, sectionId },
      }),
      invalidatesTags: () => ['CountPart'],
    }),
    removePart: builder.mutation<IPart, { partId: string; section: string }>({
      query: ({ partId, section }) => ({
        url: `/parts/${section}/${partId}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['CountPart'],
    }),
    createQuestion: builder.mutation<
      IQuestion,
      { section: SectionType; partId: string }
    >({
      query: ({ section, partId }) => ({
        url: `/questions/${section}/${partId}`,
        method: 'POST',
        body: { title: '' },
      }),
      invalidatesTags: () => ['Part'],
    }),
    getQuestionById: builder.query<
      IQuestion,
      { questionId: string; section: SectionType }
    >({
      query: ({ questionId, section }) => ({
        url: `/questions/${section}/${questionId}`,
      }),
    }),
    removeQuestion: builder.mutation<
      IQuestion,
      {
        questionId: string;
        section: SectionType;
      }
    >({
      query: ({ questionId, section }) => ({
        url: `/questions/${section}/${questionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Part'],
    }),
  }),
});

export const {
  useGetExamsQuery,
  useCountExamsQuery,
  useGetExamByIdQuery,
  useCreateExamMutation,
  useRemoveExamMutation,
  useGetPartIdsBySectionIdQuery,
  useCreatePartMutation,
  useGetPartByIdQuery,
  useRemovePartMutation,
  useGetQuestionByIdQuery,
  useCreateQuestionMutation,
  useRemoveQuestionMutation,
} = examsApi;
