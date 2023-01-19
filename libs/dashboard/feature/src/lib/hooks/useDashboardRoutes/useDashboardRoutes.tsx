import { RouteObject } from 'react-router-dom';
import { getMeLoader } from '@react-spotify/dashboard-api';
import { useSessionStore } from '@react-spotify/shared-stores';
import { RecentlyPlayed } from '@react-spotify/home-feature';
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
      loader: async () => {
        return getMeLoader(accessToken);
      },
      children: [
        {
          path: '',
          element: (
            <div className="container mx-auto p-6">
              <RecentlyPlayed />
            </div>
          ),
        },
      ],
    },
  ];
}

export default useDashboardRoutes;
