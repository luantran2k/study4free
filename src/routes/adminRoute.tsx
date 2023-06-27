import { RouteObject } from 'react-router-dom';
import UsersAdminPage from '../pages/Admin/Users';
import { AdminPage, EditExam, ExamsAdminPage } from './imports';

export const adminRoutes: RouteObject = {
  path: '/admin',
  element: <AdminPage />,
  children: [
    { index: true, element: <h1>Dashboard</h1> },
    {
      path: 'users',
      element: <UsersAdminPage />,
    },
    {
      path: 'exams',
      element: <ExamsAdminPage />,
      children: [{ path: ':id', element: <h1>Exam id</h1> }],
    },
    {
      path: 'exams/edit/:id',
      element: <EditExam />,
    },

    { path: 'vocabularies', element: <h1>Vocabularies</h1> },
  ],
};
