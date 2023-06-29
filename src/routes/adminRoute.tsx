import { RouteObject } from 'react-router-dom';
import UsersAdminPage from '../pages/Admin/Users';
import { AdminPage, EditExam, ExamsAdminPage } from './imports';
import AdminDashboard from '../pages/Admin/Dashboard';

export const adminRoutes: RouteObject = {
  path: '/admin',
  element: <AdminPage />,
  children: [
    { index: true, element: <AdminDashboard /> },
    {
      path: 'users',
      element: <UsersAdminPage />,
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
