import { Navigate, RouteObject } from 'react-router-dom';
import { adminRoutes } from './adminRoute';
import { mainRoute } from './mainRoute';
import { Authentication } from './imports';
import NotFoundPage from '../pages/NotFound';



export const routes: RouteObject[] = [
  mainRoute,
  adminRoutes,
  {
    path: '/login',
    element: <Authentication />,
  },
  { path: '/404', element: <NotFoundPage title="404" subTitle="Upsie daisy" descript='the page you are looking for is not available' /> },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];
