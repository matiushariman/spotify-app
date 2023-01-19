import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Greetings } from './Greetings';

const Story: ComponentMeta<typeof Greetings> = {
  component: Greetings,
  title: 'Greetings',
};
export default Story;

const Template: ComponentStory<typeof Greetings> = () => <Greetings />;

export const Primary = Template.bind({});
Primary.args = {};
