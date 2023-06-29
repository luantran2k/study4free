import { RouteObject } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import LoadingAnimate from '../components/common/LoadingAnimate';
import NotFoundPage from '../pages/NotFound';
import {
  AnalyzeResults,
  Collection,
  DeleteAccount,
  DetailExam,
  ExamsPage,
  GrammarPage,
  HomePage,
  Payment,
  Reminder,
  RootLayout,
  SectionPage,
  UserInformation,
  UserProfilePage,
  VocabulariesPage,
  VocabularyDetail,
} from './imports';

const ExamPart = lazy(() => import('../components/exam/ExamPart'));
const ExamSection = lazy(
  () => import('../pages/Exams/ExamSection/ExamSection')
);
const MiniGame = lazy(() => import('../pages/Game'));
const ResultPage = lazy(() => import('../pages/Exams/Result'));

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
    },
    {
      path: 'exams/:examId/:section',
      element: <DetailExam />,
    },
    {
      path: 'exams/:examId/:section/:sectionId',
      element: (
        <Suspense fallback={<LoadingAnimate />}>
          <ExamSection />
        </Suspense>
      ),
      children: [
        {
          path: ':partId',
          element: (
            <Suspense fallback={<LoadingAnimate />}>
              <ExamPart />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: 'results/:resultId',
      element: (
        <Suspense fallback={<LoadingAnimate />}>
          <ResultPage />
        </Suspense>
      ),
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
          children: [
            {
              path: 'minigame',
              element: (
                <Suspense fallback={<LoadingAnimate />}>
                  <MiniGame />
                </Suspense>
              ),
            },
          ],
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
