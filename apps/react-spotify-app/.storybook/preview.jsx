import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

export const decorators = [
  mswDecorator,
  (Story) => (
    <div
      style={{ backgroundColor: 'black' }}
      className="h-screen bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-black text-white"
    >
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    </div>
  ),
];
