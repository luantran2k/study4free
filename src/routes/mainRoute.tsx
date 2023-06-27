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
  Writing,
  DeleteAccount,
  RootLayout,
} from './imports';

import Speaking from '../pages/Exams/Speaking';
import Reading from '../pages/Exams/Reading';
import Listening from '../pages/Exams/Listening';

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
          path: 'writing/:skill',
          element: <Writing />,
        },
        {
          path: 'speaking/:skill',
          element: <Speaking />,
        },
        {
          path: 'reading/:skill',
          element: <Reading />,
        },
        {
          path: 'listening/:skill',
          element: <Listening />,
        },
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
