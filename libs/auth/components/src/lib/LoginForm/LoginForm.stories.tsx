import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';

const Story: ComponentMeta<typeof LoginForm> = {
  component: LoginForm,
  title: 'auth/components/LoginForm',
};
export default Story;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Primary = Template.bind({});
Primary.args = {};
