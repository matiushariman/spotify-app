import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { GradientBackground } from './GradientBackground';

const Story: ComponentMeta<typeof GradientBackground> = {
  component: GradientBackground,
  title: 'GradientBackground',
};
export default Story;

const Template: ComponentStory<typeof GradientBackground> = (args) => (
  <GradientBackground {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
