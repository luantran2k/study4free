import { RouteObject } from 'react-router-dom';
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
      element: <h1>Exams</h1>,
    },
    { path: 'vocabularies', element: <h1>Vocabularies</h1> },
  ],
};
