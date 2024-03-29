import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Shared/ui-components/Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
};
