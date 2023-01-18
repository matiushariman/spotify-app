import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserMenu } from './UserMenu';

const Story: ComponentMeta<typeof UserMenu> = {
  component: UserMenu,
  title: 'UserMenu',
};
export default Story;

const Template: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
