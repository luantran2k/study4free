import { RouteObject } from 'react-router-dom';

import NotFoundPage from '../pages/NotFound';
import {
  AnalyzeResults,
  Collection,
  DetailExam,
  ExamsPage,
  GrammarPage,
  HomePage,
  Payment,
  Reminder,
  SectionPage,
  UserInformation,
  UserProfilePage,
  VocabulariesPage,
  VocabularyDetail,
  DeleteAccount,
  RootLayout,
} from './imports';

import ExamPart from '../pages/Exams/ExamPart/ExamPart';

export const mainRoute: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'exams',
      element: <ExamsPage />,
      children: [
        {
          path: ':type/:skill',
          element: <DetailExam />,
        },
        {
          path: ':type/:skill/:part',
          element: <ExamPart />,
        }
      ],
    },
    {
      path: 'vocabularies',
      element: <VocabulariesPage />,
      children: [
        {
          path: ':id',
          element: <VocabularyDetail />,
        },
      ],
    },
    {
      path: 'grammar',
      element: <GrammarPage />,
      children: [
        {
          path: ':section',
          element: <SectionPage />,
        },
      ],
    },
    {
      path: 'users',
      element: <UserProfilePage />,
      children: [
        {
          path: 'analyzeResults',
          element: <AnalyzeResults />,
        },
        {
          path: 'userInformation',
          element: <UserInformation />,
        },
        {
          path: 'collection',
          element: <Collection />,
        },
        {
          path: 'reminder',
          element: <Reminder />,
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'delete',
          element: <DeleteAccount />,
        },
      ],
    },
    {
      path: '*',
      element: (
        <NotFoundPage
          title="404"
          subTitle="Upsie daisy"
          descript="the section you are looking for is not available"
        />
      ),
    },
  ],
};
