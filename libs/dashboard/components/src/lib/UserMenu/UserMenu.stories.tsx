import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserMenu } from './UserMenu';

const Story: ComponentMeta<typeof UserMenu> = {
  component: UserMenu,
  title: 'dashboard/components/UserMenu',
};
export default Story;

const Template: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: 'username',
  avatar: 'http://i.pravatar.cc',
};
