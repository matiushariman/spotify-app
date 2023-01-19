import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AppBar } from './AppBar';

const Story: ComponentMeta<typeof AppBar> = {
  component: AppBar,
  title: 'AppBar',
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
