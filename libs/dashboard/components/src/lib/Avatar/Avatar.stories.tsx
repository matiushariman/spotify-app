import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

const Story: ComponentMeta<typeof Avatar> = {
  component: Avatar,
  title: 'dashboard/components/Avatar',
};
export default Story;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://i.pravatar.cc/300',
  username: 'User',
};

export const Fallback = Template.bind({});
Fallback.args = {};
