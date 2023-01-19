import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <div style={{ padding: 20, backgroundColor: '#121212', color: '#fff' }}>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </div>
  ),
];
