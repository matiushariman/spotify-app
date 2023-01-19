import { RouteObject } from 'react-router-dom';
import { getMeLoader } from '@react-spotify/dashboard-api';
import { useSessionStore } from '@react-spotify/shared-stores';
import { useHomeRoutes } from '@react-spotify/home-feature';
import Dashboard from '../Dashboard/Dashboard';

export type UseDashboardRoutes = RouteObject[];

export function useDashboardRoutes(): UseDashboardRoutes {
  const accessToken = useSessionStore((state) => state.accessToken);
  const homeRoutes = useHomeRoutes();

  if (!accessToken) {
    return [];
  }

  return [
    {
      path: '/',
      element: <Dashboard />,
      loader: async () => {
        return getMeLoader(accessToken);
      },
      children: [...homeRoutes],
    },
  ];
}

export default useDashboardRoutes;
