import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
  RouteObject,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import '../../styles.css';

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: children,
    },
  ];
  const router = createMemoryRouter(routes);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
