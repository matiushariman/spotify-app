import Login from '../Login/Login';

import type { RouteObject } from 'react-router-dom';
import Callback from '../Callback/Callback';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/callback',
    element: <Callback />,
  },
];

export default routes;
