import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import LoadingAnimate from '../components/common/LoadingAnimate';
import { AdminPage, EditExam, ExamsAdminPage } from './imports';
const UsersAdminPage = lazy(() => import('../pages/Admin/Users'));
const AdminDashboard = lazy(() => import('../pages/Admin/Dashboard'));

export const adminRoutes: RouteObject = {
  path: '/admin',
  element: <AdminPage />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<LoadingAnimate />}>
          <AdminDashboard />
        </Suspense>
      ),
    },
    {
      path: 'users',
      element: (
        <Suspense fallback={<LoadingAnimate />}>
          <UsersAdminPage />
        </Suspense>
      ),
    },
    {
      path: 'exams',
      element: <ExamsAdminPage />,
    },
    {
      path: 'exams/edit/:id',
      element: <EditExam />,
    },

    { path: 'vocabularies', element: <h1>Vocabularies</h1> },
  ],
};
