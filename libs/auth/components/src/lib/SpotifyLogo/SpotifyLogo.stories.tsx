import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SpotifyLogo } from './SpotifyLogo';

const Story: ComponentMeta<typeof SpotifyLogo> = {
  component: SpotifyLogo,
  title: 'SpotifyLogo',
};
export default Story;

const Template: ComponentStory<typeof SpotifyLogo> = (args) => (
  <SpotifyLogo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
