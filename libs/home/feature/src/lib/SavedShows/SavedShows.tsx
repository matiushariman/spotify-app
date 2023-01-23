import { useGetSavedShows } from '@react-spotify/home-api';
import { SavedShowsList } from '@react-spotify/home-components';
import { useLoaderData } from 'react-router-dom';

import type { UseHomeRoutesLoaderData } from '../routes/useHomeRoutes.types';

const displayShowName = (showName: string) => {
  const MAX_SHOW_NAME = 20;

  if (showName.length <= MAX_SHOW_NAME) {
    return showName;
  }

  return `${showName.slice(0, MAX_SHOW_NAME)}...`;
};

export function SavedShows() {
  const { savedShows } = useLoaderData() as UseHomeRoutesLoaderData;
  const { data } = useGetSavedShows({ initialData: savedShows });

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-200">Your Shows</h2>
      <SavedShowsList
        shows={data.items.map((show) => ({
          showImg: show.show.images[0].url,
          showName: displayShowName(show.show.name),
          publisher: show.show.publisher,
        }))}
      />
    </section>
  );
}

// albumImg: item.track.album.images[0].url,
//   albumName: item.track.album.name,
export default SavedShows;
