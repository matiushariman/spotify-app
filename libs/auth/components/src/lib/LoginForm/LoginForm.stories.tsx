import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';

const Story: ComponentMeta<typeof LoginForm> = {
  component: LoginForm,
  title: 'LoginForm',
};
export default Story;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
