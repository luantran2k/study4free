import { Navigate, RouteObject } from 'react-router-dom';
import { adminRoutes } from './adminRoute';
import { mainRoute } from './mainRoute';

export const routes: RouteObject[] = [
  mainRoute,
  adminRoutes,
  {
    path: '*',
    element: <Navigate to="login" />,
  },
];
