import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MusicCard } from './MusicCard';

const Story: ComponentMeta<typeof MusicCard> = {
  component: MusicCard,
  title: 'MusicCard',
};
export default Story;

const Template: ComponentStory<typeof MusicCard> = (args) => (
  <MusicCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Some Music',
  description: 'Hello world',
  imgSrc: 'https://i.pravatar.cc',
  imgAlt: 'Some alt',
};
