import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import App from './app/app';
import { handleApiError } from './app/utils/apiUtils';

import type { ErrorResponse } from '@spotify-app/api-client';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => handleApiError(err as ErrorResponse),
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
