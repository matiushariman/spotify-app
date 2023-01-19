import {
  useGetRecentlyPlayed,
  GetRecentlyPlayedResponse,
} from '@react-spotify/home-api';
import { RecentlyPlayedList } from '@react-spotify/home-components';
import { useLoaderData } from 'react-router-dom';

const displayTrackName = (trackName: string) => {
  const MAX_TRACK_NAME_LENGTH = 15;

  if (trackName.length <= MAX_TRACK_NAME_LENGTH) {
    return trackName;
  }

  return `${trackName.slice(0, MAX_TRACK_NAME_LENGTH)}...`;
};

const displayArtistName = (artistName: string) => {
  const MAX_ARTIST_NAME_LENGTH = 23;

  if (artistName.length <= MAX_ARTIST_NAME_LENGTH) {
    return artistName;
  }

  return `${artistName.slice(0, MAX_ARTIST_NAME_LENGTH)}...`;
};

interface Item {
  track: {
    name: string;
    album: {
      name: string;
      images: Array<{ url: string }>;
    };
    artists: Array<{
      name: string;
    }>;
  };
}

export function RecentlyPlayed() {
  const initialData = useLoaderData() as GetRecentlyPlayedResponse;
  // need to convert cause original type does not include updated shape with album
  const { data } = useGetRecentlyPlayed({ initialData });

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-200">Recently Played</h2>
      <RecentlyPlayedList
        tracks={(data.items as unknown as Item[]).map((item) => ({
          songName: displayTrackName(item.track.name),
          albumImg: item.track.album.images[0].url,
          albumName: item.track.album.name,
          artistName: displayArtistName(item.track.artists[0].name),
        }))}
      />
    </section>
  );
}

// albumImg: item.track.album.images[0].url,
//   albumName: item.track.album.name,
export default RecentlyPlayed;
