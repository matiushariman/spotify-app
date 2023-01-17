import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SharedUiComponents } from './SharedUiComponents';

const Story: ComponentMeta<typeof SharedUiComponents> = {
  component: SharedUiComponents,
  title: 'SharedUiComponents',
};
export default Story;

const Template: ComponentStory<typeof SharedUiComponents> = (args) => (
  <SharedUiComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
