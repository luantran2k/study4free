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
    {
      path: 'exams/edit/:id',
      element: <EditExam />,
      children: [
        {
          path: ':section',
          element: <h1>Section</h1>,
          children: [
            {
              path: ':partId',
              element: <h1>Part</h1>,
              children: [
                {
                  path: ':questionId',
                  element: <h1>Part</h1>,
                },
              ],
            },
          ],
        },
      ],
    },

    { path: 'vocabularies', element: <h1>Vocabularies</h1> },
  ],
};
