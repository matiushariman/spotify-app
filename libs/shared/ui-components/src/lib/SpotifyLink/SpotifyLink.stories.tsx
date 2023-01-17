import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SpotifyLink } from './SpotifyLink';

const Story: ComponentMeta<typeof SpotifyLink> = {
  component: SpotifyLink,
  title: 'SpotifyLink',
};
export default Story;

const Template: ComponentStory<typeof SpotifyLink> = () => <SpotifyLink />;

export const Primary = Template.bind({});
Primary.args = {};
