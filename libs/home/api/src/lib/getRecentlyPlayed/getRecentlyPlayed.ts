import { createApiClient } from '@react-spotify/shared-api-client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@react-spotify/shared-stores';

export const getRecentlyPlayed = async (accessToken: string) => {
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMyRecentlyPlayedTracks({
    limit: 5,
  });
};

export type GetRecentlyPlayedResponse = Awaited<
  ReturnType<typeof getRecentlyPlayed>
>;

export const getRecentlyPlayedQuery = (accessToken: string) => ({
  queryKey: ['getRecentlyPlayed'],
  queryFn: async () => getRecentlyPlayed(accessToken),
});

export const getRecentlyPlayedLoader = async (
  accessToken: string
): Promise<GetRecentlyPlayedResponse> => {
  const queryClient = new QueryClient();
  const query = getRecentlyPlayedQuery(accessToken);

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
  const accessToken = useSessionStore((state) => state.accessToken) as string;

  return useQuery({ ...getRecentlyPlayedQuery(accessToken), initialData });
};
