import { RouteObject } from 'react-router-dom';
import {
  getRecentlyPlayedLoader,
  getSavedShowsLoader,
} from '@react-spotify/home-api';
import { lazy, Suspense } from 'react';

export type UseHomeRoutes = RouteObject[];

const Home = lazy(() => import('../Home/Home'));
export function useHomeRoutes(): UseHomeRoutes {
  return [
    {
      path: '',
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
      loader: async () => {
        const recentlyPlayed = await getRecentlyPlayedLoader();
        const savedShows = await getSavedShowsLoader();

        return {
          recentlyPlayed,
          savedShows,
        };
      },
    },
  ];
}

export default useHomeRoutes;
