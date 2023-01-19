import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecentlyPlayedList } from './RecentlyPlayedList';

const Story: ComponentMeta<typeof RecentlyPlayedList> = {
  component: RecentlyPlayedList,
  title: 'RecentlyPlayedList',
};
export default Story;

const Template: ComponentStory<typeof RecentlyPlayedList> = (args) => (
  <RecentlyPlayedList {...args} />
);

export const NoTrack = Template.bind({});
NoTrack.args = {};

export const WithTracks = Template.bind({});
WithTracks.args = {
  tracks: [
    {
      artistName: 'Artist',
      albumImg: 'https://i.pravatar.cc',
      albumName: 'Album',
      songName: 'Song',
    },
    {
      artistName: 'Artist 2',
      albumImg: 'https://i.pravatar.cc',
      albumName: 'Album 2',
      songName: 'Song 2',
    },
  ],
};
