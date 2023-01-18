import { RouteObject } from 'react-router-dom';
import { getMe } from '@react-spotify/dashboard-api';
import { useSessionStore } from '@react-spotify/shared-stores';
import Dashboard from '../../Dashboard/Dashboard';

export type UseDashboardRoutes = RouteObject[];

export function useDashboardRoutes(): UseDashboardRoutes {
  const accessToken = useSessionStore((state) => state.accessToken);

  if (!accessToken) {
    return [];
  }

  return [
    {
      path: '/',
      element: <Dashboard />,
      loader: () => {
        return getMe({ accessToken });
      },
    },
  ];
}

export default useDashboardRoutes;
