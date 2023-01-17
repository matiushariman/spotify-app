import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './Login';

const Story: ComponentMeta<typeof Login> = {
  component: Login,
  title: 'Login',
};
export default Story;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
