import MusicCard from '../MusicCard/MusicCard';

interface Track {
  songName: string;
  artistName: string;
  albumImg: string;
  albumName: string;
}

/* eslint-disable-next-line */
export interface RecentlyPlayedListProps {
  tracks: Track[];
}

export function RecentlyPlayedList({ tracks }: RecentlyPlayedListProps) {
  if (!tracks || tracks.length === 0) {
    return (
      <div>
        <p>No recently played track.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4" aria-label="recently played tracks">
      {tracks.map((track, i) => (
        <MusicCard
          key={i}
          imgSrc={track.albumImg}
          imgAlt={track.albumName}
          title={track.songName}
          description={track.artistName}
        />
      ))}
    </div>
  );
}

export default RecentlyPlayedList;
