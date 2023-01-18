import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UsernameTooltip } from './UsernameTooltip';

const Story: ComponentMeta<typeof UsernameTooltip> = {
  component: UsernameTooltip,
  title: 'UsernameTooltip',
};
export default Story;

const Template: ComponentStory<typeof UsernameTooltip> = (args) => (
  <UsernameTooltip {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  username: 'Username',
  children: <button>Hello</button>,
};
