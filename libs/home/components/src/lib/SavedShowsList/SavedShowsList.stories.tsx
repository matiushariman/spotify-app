import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SavedShowsList } from './SavedShowsList';

const Story: ComponentMeta<typeof SavedShowsList> = {
  component: SavedShowsList,
  title: 'home/components/SavedShowsList',
};
export default Story;

const Template: ComponentStory<typeof SavedShowsList> = (args) => (
  <SavedShowsList {...args} />
);

export const NoShow = Template.bind({});
NoShow.args = {};

export const WithShows = Template.bind({});
WithShows.args = {
  shows: [
    {
      showImg: 'https://i.pravatar.cc',
      showName: 'show_1',
      publisher: 'publisher 1',
    },
    {
      showImg: 'https://i.pravatar.cc',
      showName: 'show_2',
      publisher: 'publisher 2',
    },
  ],
};
