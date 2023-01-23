import { Greetings } from '@react-spotify/home-components';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';

export function Home() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      <Greetings />
      <RecentlyPlayed />
    </div>
  );
}

export default Home;
