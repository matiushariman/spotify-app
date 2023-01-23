import type {
  GetRecentlyPlayedResponse,
  GetSavedShowsResponse,
} from '@react-spotify/home-api';

export interface UseHomeRoutesLoaderData {
  recentlyPlayed: GetRecentlyPlayedResponse;
  savedShows: GetSavedShowsResponse;
}
