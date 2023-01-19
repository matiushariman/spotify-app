import { RouteObject } from 'react-router-dom';
import { getRecentlyPlayedLoader } from '@react-spotify/home-api';
import { useSessionStore } from '@react-spotify/shared-stores';
import Home from '../Home/Home';

export type UseHomeRoutes = RouteObject[];

export function useHomeRoutes(): UseHomeRoutes {
  const accessToken = useSessionStore((state) => state.accessToken);

  if (!accessToken) {
    return [];
  }

  return [
    {
      path: '',
      element: <Home />,
      loader: async () => getRecentlyPlayedLoader(accessToken),
    },
  ];
}

export default useHomeRoutes;
