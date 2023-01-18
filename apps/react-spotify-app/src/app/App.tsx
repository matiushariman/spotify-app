import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes as authRoutes } from '@react-spotify/auth-feature';
import { useDashboardRoutes } from '@react-spotify/dashboard-feature';
import { useSessionStore } from '@react-spotify/shared-stores';
import { useMemo } from 'react';

export function App() {
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const dashboardRoutes = useDashboardRoutes();

  const router = useMemo(
    () =>
      createBrowserRouter([
        ...(isAuthenticated ? dashboardRoutes : authRoutes),
      ]),
    [isAuthenticated]
  );

  return <RouterProvider router={router} />;
}

export default App;
