import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecentlyPlayed } from './RecentlyPlayed';

const Story: ComponentMeta<typeof RecentlyPlayed> = {
  component: RecentlyPlayed,
  title: 'RecentlyPlayed',
};
export default Story;

const Template: ComponentStory<typeof RecentlyPlayed> = (args) => (
  <RecentlyPlayed {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
