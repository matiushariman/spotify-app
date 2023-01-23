import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideNavigation } from './SideNavigation';

const Story: ComponentMeta<typeof SideNavigation> = {
  component: SideNavigation,
  title: 'dashboard/components/SideNavigation',
};
export default Story;

const Template: ComponentStory<typeof SideNavigation> = (args) => (
  <SideNavigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
