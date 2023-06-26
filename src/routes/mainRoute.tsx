import { RouteObject } from 'react-router-dom';

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
  Writing,
  DeleteAccount,
  RootLayout,
} from './imports';
// import NotFoundPage from '../pages/NotFound';
import Speaking from '../pages/Exams/Speaking';

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
          path: ':exam/:part',
          element: <DetailExam />,
        },
        // {
        //   path: ':exam/:part/:section',
        //   element: <Writing />,
        //   // element: <NotFoundPage/>
        // },
        {
          path: ':exam/:part/writing',
          element: <Writing />,
        },
        {
          path: ':exam/:part/speaking',
          element: <Speaking />,
        },
        // {
        //   path: 'writing/:id',
        //   element: <Writing />,
        // },
        // {
        //   path: 'speaking/:id',
        //   element: <Speaking />,
        // },
        // {
        //   path: 'listening/:id',
        //   element: <h1>Not Available</h1>,
        // },
        // {
        //   path: 'reading/:id',
        //   element: <h1>Not Available</h1>,
        // },
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
  ],
};
