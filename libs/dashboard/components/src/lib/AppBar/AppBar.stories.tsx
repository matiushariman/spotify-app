import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { rest } from 'msw';
import { AppBar } from './AppBar';

const Story: ComponentMeta<typeof AppBar> = {
  component: AppBar,
  title: 'AppBar',
  parameters: {
    msw: {
      handlers: [
        rest.get('https://api.spotify.com/v1/me', (req, res, ctx) => {
          return res(
            ctx.json({
              display_name: 'Username',
            })
          );
        }),
      ],
    },
  },
};
export default Story;

const Template: ComponentStory<typeof AppBar> = () => {
  const router = createMemoryRouter([
    {
      element: <AppBar />,
      path: '/',
      loader: () => ({
        display_name: 'Username',
      }),
    },
  ]);

  return <RouterProvider router={router} />;
};

export const Primary = Template.bind({});
Primary.args = {};
