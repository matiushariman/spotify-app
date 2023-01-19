import { createApiClient } from '@react-spotify/shared-api-client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@react-spotify/shared-stores';

export const getMe = async (accessToken: string) => {
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMe();
};

export type GetMeResponse = Awaited<ReturnType<typeof getMe>>;

export const getMeQuery = (accessToken: string) => ({
  queryKey: ['me'],
  queryFn: async () => getMe(accessToken),
});

export const getMeLoader = async (
  accessToken: string
): Promise<GetMeResponse> => {
  const queryClient = new QueryClient();
  const query = getMeQuery(accessToken);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export interface UseGetMeProps {
  initialData: GetMeResponse;
}

export const useGetMe = ({ initialData }: UseGetMeProps) => {
  const accessToken = useSessionStore((state) => state.accessToken) as string;

  return useQuery({ ...getMeQuery(accessToken), initialData });
};
