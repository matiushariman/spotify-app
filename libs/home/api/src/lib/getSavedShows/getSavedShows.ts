import { createApiClient } from '@react-spotify/shared-api-client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@react-spotify/shared-stores';

export const getSavedShows = async (accessToken: string) => {
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMySavedShows({
    limit: 5,
  });
};

export type GetSavedShowsResponse = Awaited<ReturnType<typeof getSavedShows>>;

export const getSavedShowsQuery = (accessToken: string) => ({
  queryKey: ['getSavedShows'],
  queryFn: async () => getSavedShows(accessToken),
});

export const getSavedShowsLoader = async (
  accessToken: string
): Promise<GetSavedShowsResponse> => {
  const queryClient = new QueryClient();
  const query = getSavedShowsQuery(accessToken);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export interface UseGetSavedShowsProps {
  initialData: GetSavedShowsResponse;
}

export const useGetSavedShows = ({ initialData }: UseGetSavedShowsProps) => {
  const accessToken = useSessionStore((state) => state.accessToken) as string;

  return useQuery({ ...getSavedShowsQuery(accessToken), initialData });
};
