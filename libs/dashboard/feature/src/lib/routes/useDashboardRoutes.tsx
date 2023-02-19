import { RouteObject } from 'react-router-dom';
import { getMeLoader } from '@react-spotify/dashboard-api';
import { useHomeRoutes } from '@react-spotify/home-feature';
import Dashboard from '../Dashboard/Dashboard';

export type UseDashboardRoutes = RouteObject[];

export function useDashboardRoutes(): UseDashboardRoutes {
  const homeRoutes = useHomeRoutes();

  return [
    {
      path: '/',
      element: <Dashboard />,
      loader: async () => getMeLoader(),
      children: [...homeRoutes],
    },
  ];
}

export default useDashboardRoutes;
