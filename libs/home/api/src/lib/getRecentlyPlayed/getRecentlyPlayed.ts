import { createApiClient } from '@react-spotify/shared-api-client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@react-spotify/shared-stores';

export const getRecentlyPlayed = async () => {
  const accessToken = useSessionStore.getState().accessToken as string;
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMyRecentlyPlayedTracks({
    limit: 5,
  });
};

export type GetRecentlyPlayedResponse = Awaited<
  ReturnType<typeof getRecentlyPlayed>
>;

export const getRecentlyPlayedQuery = () => ({
  queryKey: ['getRecentlyPlayed'],
  queryFn: async () => getRecentlyPlayed(),
});

export const getRecentlyPlayedLoader =
  async (): Promise<GetRecentlyPlayedResponse> => {
    const queryClient = new QueryClient();
    const query = getRecentlyPlayedQuery();

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export interface UseGetRecentlyPlayedProps {
  initialData: GetRecentlyPlayedResponse;
}

export const useGetRecentlyPlayed = ({
  initialData,
}: UseGetRecentlyPlayedProps) => {
  return useQuery({ ...getRecentlyPlayedQuery(), initialData });
};
