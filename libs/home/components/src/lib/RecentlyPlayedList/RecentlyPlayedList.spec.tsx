import { render, screen } from '@testing-library/react';

import RecentlyPlayedList from './RecentlyPlayedList';

describe('RecentlyPlayedList', () => {
  it('should render no recently played if tracks is empty', () => {
    render(<RecentlyPlayedList tracks={[]} />);

    expect(screen.getByText('No recently played track.')).toBeDefined();
  });

  it('should render recently played if tracks is not empty', () => {
    render(
      <RecentlyPlayedList
        tracks={[
          {
            songName: 'song',
            albumName: 'album',
            albumImg: 'https://i.pravatar.cc',
            artistName: 'artist',
          },
        ]}
      />
    );

    expect(screen.getByLabelText('recently played tracks')).toBeDefined();
  });
});
