import { RouteObject } from 'react-router-dom';
import ExamsAdminPage from '../pages/Admin/Exams';
import EditExam from '../pages/Admin/Exams/EditExam';
import AdminLayout from '../pages/layouts/Admin';

export const adminRoutes: RouteObject = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    { index: true, element: <h1>Dashboard</h1> },
    {
      path: 'users',
      element: <h1>Users</h1>,
    },
    {
      path: 'exams',
      element: <ExamsAdminPage />,
      children: [{ path: ':id', element: <h1>Exam id</h1> }],
    },
    { path: 'exams/new', element: <EditExam /> },

    { path: 'vocabularies', element: <h1>Vocabularies</h1> },
  ],
};
