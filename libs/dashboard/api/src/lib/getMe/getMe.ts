import { createApiClient } from '@react-spotify/shared-api-client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@react-spotify/shared-stores';

export const getMe = async () => {
  const accessToken = useSessionStore.getState().accessToken as string;
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMe();
};

export type GetMeResponse = Awaited<ReturnType<typeof getMe>>;

export const getMeQuery = () => ({
  queryKey: ['me'],
  queryFn: async () => getMe(),
});

export const getMeLoader = async (): Promise<GetMeResponse> => {
  const queryClient = new QueryClient();
  const query = getMeQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export interface UseGetMeProps {
  initialData: GetMeResponse;
}

export const useGetMe = ({ initialData }: UseGetMeProps) => {
  return useQuery({ ...getMeQuery(), initialData });
};
