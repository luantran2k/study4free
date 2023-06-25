import { Navigate, RouteObject } from 'react-router-dom';
import { adminRoutes } from './adminRoute';
import { mainRoute } from './mainRoute';
import { Authentication } from './imports';

export const routes: RouteObject[] = [
  mainRoute,
  adminRoutes,
  {
    path: '/login',
    element: <Authentication />,
  },
  {
    path: '*',
    element: <Navigate to="login" />,
  },
];
