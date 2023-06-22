import { RouteObject } from 'react-router-dom';
import ExamsPage from '../pages/Exams';
import GrammarPage from '../pages/Grammar';
import HomePage from '../pages/Home';
import VocabulariesPage from '../pages/Vocabularies';
import RootLayout from '../pages/layouts/Root';
import UserProfilePage from '../pages/UserProfile';
import AnalyzeResults from '../pages/UserProfile/AnalyzeResults';
import UserInformation from '../pages/UserProfile/UserInformation';
import Collection from '../pages/UserProfile/Collection';
import Reminder from '../pages/UserProfile/Reminder';
import SectionPage from '../pages/Grammar/SectionPage';
import VocabularyDetail from '../pages/Vocabularies/VocabularyDetail';
import { Writing } from '../pages/Exams/Writing';
import { Speaking } from '../pages/Exams/Speaking';

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
          path: 'writing/:id',
          element: <Writing />,
        },
        {
          path: 'speaking/:id',
          element: <Speaking />,
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
      ],
    },
  ],
};
