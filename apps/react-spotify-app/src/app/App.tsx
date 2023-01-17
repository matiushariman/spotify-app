import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '@react-spotify/auth-feature';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
