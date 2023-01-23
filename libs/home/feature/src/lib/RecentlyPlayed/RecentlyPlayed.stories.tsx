import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecentlyPlayed } from './RecentlyPlayed';

const Story: ComponentMeta<typeof RecentlyPlayed> = {
  component: RecentlyPlayed,
  title: 'home/feature/RecentlyPlayed',
};
export default Story;

const Template: ComponentStory<typeof RecentlyPlayed> = () => (
  <RecentlyPlayed />
);

export const Primary = Template.bind({});
Primary.args = {};
