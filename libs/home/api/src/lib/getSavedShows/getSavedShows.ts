import { createApiClient } from '@react-spotify/shared-api-client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@react-spotify/shared-stores';

export const getSavedShows = async () => {
  const accessToken = useSessionStore.getState().accessToken as string;
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMySavedShows({
    limit: 5,
  });
};

export type GetSavedShowsResponse = Awaited<ReturnType<typeof getSavedShows>>;

export const getSavedShowsQuery = () => ({
  queryKey: ['getSavedShows'],
  queryFn: async () => getSavedShows(),
});

export const getSavedShowsLoader = async (): Promise<GetSavedShowsResponse> => {
  const queryClient = new QueryClient();
  const query = getSavedShowsQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export interface UseGetSavedShowsProps {
  initialData: GetSavedShowsResponse;
}

export const useGetSavedShows = ({ initialData }: UseGetSavedShowsProps) => {
  return useQuery({ ...getSavedShowsQuery(), initialData });
};
