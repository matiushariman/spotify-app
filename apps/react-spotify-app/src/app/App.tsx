import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Callback, Dashboard } from '@react-spotify/auth-feature';
import { useSessionStore } from '@react-spotify/shared-stores';
import { useMemo } from 'react';

export function App() {
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          element: isAuthenticated ? <Dashboard /> : <Login />,
        },
        {
          path: '/callback',
          element: <Callback />,
        },
      ]),
    [isAuthenticated]
  );

  return <RouterProvider router={router} />;
}

export default App;
