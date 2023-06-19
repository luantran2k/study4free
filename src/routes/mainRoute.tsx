import { RouteObject } from 'react-router-dom';
import ExamsPage from '../pages/Exams';
import GrammarPage from '../pages/Grammar';
import HomePage from '../pages/Home';
import VocabulariesPage from '../pages/Vocabularies';
import RootLayout from '../pages/layouts/Root';
import UserProfilePage from '../pages/UserProfile';

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
      path: 'vocabularies',
      element: <VocabulariesPage />,
    },
    {
      path: 'grammar',
      element: <GrammarPage />,
    },
    {
      path: 'users/:id',
      element: <UserProfilePage />,
    },
  ],
};
