import { lazy, Suspense } from 'react';
import Login from '../Login/Login';

import type { RouteObject } from 'react-router-dom';

const Callback = lazy(() => import('../Callback/Callback'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/callback',
    element: (
      <Suspense>
        <Callback />
      </Suspense>
    ),
  },
];

export default routes;
