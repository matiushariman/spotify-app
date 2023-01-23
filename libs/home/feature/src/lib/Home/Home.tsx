import { Greetings } from '@react-spotify/home-components';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import SavedShows from '../SavedShows/SavedShows';

export function Home() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      <Greetings />
      <div className="space-y-5">
        <RecentlyPlayed />
        <SavedShows />
      </div>
    </div>
  );
}

export default Home;
