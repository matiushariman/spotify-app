import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { UserMenu } from './UserMenu';

const Story: ComponentMeta<typeof UserMenu> = {
  component: UserMenu,
  title: 'UserMenu',
};
export default Story;

const Template: ComponentStory<typeof UserMenu> = () => {
  const router = createMemoryRouter([
    {
      element: <UserMenu />,
      path: '/',
      loader: () => ({
        display_name: 'Username',
      }),
    },
  ]);

  return <RouterProvider router={router} />;
};

export const Default = Template.bind({});
Default.args = {
  username: 'username',
};
