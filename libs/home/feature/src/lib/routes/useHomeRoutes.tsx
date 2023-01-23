import { RouteObject } from 'react-router-dom';
import {
  getRecentlyPlayedLoader,
  getSavedShowsLoader,
} from '@react-spotify/home-api';
import { useSessionStore } from '@react-spotify/shared-stores';
import { lazy, Suspense } from 'react';

export type UseHomeRoutes = RouteObject[];

const Home = lazy(() => import('../Home/Home'));
export function useHomeRoutes(): UseHomeRoutes {
  const accessToken = useSessionStore((state) => state.accessToken);

  if (!accessToken) {
    return [];
  }

  return [
    {
      path: '',
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
      loader: async () => {
        const recentlyPlayed = await getRecentlyPlayedLoader(accessToken);
        const savedShows = await getSavedShowsLoader(accessToken);

        return {
          recentlyPlayed,
          savedShows,
        };
      },
    },
  ];
}

export default useHomeRoutes;
