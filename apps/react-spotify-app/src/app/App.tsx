import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Callback } from '@react-spotify/auth-feature';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/callback',
    element: <Callback />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
