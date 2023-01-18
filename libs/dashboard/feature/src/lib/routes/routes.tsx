import Dashboard from '../Dashboard/Dashboard';

import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
];

export default routes;
