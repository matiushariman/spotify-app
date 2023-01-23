import MusicCard from '../MusicCard/MusicCard';

interface Show {
  showName: string;
  publisher: string;
  showImg: string;
}

export interface SavedShowsListProps {
  shows: Show[];
}

export function SavedShowsList({ shows }: SavedShowsListProps) {
  if (!shows || shows.length === 0) {
    return (
      <div>
        <p>No saved shows.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4" aria-label="your saved shows">
      {shows.map((show, i) => (
        <MusicCard
          key={i}
          imgSrc={show.showImg}
          imgAlt={show.showName}
          title={show.showName}
          description={show.publisher}
        />
      ))}
    </div>
  );
}

export default SavedShowsList;
