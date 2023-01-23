import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './Login';

const Story: ComponentMeta<typeof Login> = {
  component: Login,
  title: 'auth/feature/Login',
};
export default Story;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const Primary = Template.bind({});
Primary.args = {};
