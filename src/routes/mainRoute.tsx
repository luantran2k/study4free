import { Navigate, RouteObject } from 'react-router-dom';

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
// import NotFoundPage from '../pages/NotFound';
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
          path: 'Writing/:skill',
          element: <Writing />,
        },
        {
          path: 'Speaking/:skill',
          element: <Speaking />,
        },
        {
          path: 'Reading/:skill',
          element: <Reading />,
        },
        {
          path: 'Listening/:skill',
          element: <Listening />,
        },
        // {
        //   path: 'Speaking/:skill',
        //   element: <DetailExam />,
        //   children: [
        //     {
        //       path: ':detail',
        //       element: <Speaking />,
        //     },
        //   ],
        // },

        // {
        //   path: ':exam/:part/:section',
        //   element: <Writing />,
        //   // element: <NotFoundPage/>
        // },
        {
          path: ':exam/:part/:section',
          // element: <Writing />,
          element: (
            <NotFoundPage
              title="404"
              subTitle="Upsie daisy"
              descript="the section you are looking for is not available"
            />
          ),
        },
        // {
        //   path: ':exam/:part/writing',
        //   element: <Writing />,
        // },
        // {
        //   path: ':exam/:part/speaking',
        //   element: <Speaking />,
        // },
        // {
        //   path: ':exam/:part/writing',
        //   element: <Writing />,
        // },
        // {
        //   path: ':exam/:part/speaking',
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
