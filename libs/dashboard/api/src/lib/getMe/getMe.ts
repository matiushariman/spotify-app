import { createApiClient } from '@react-spotify/shared-api-client';

export const getMe = async ({ accessToken }: { accessToken: string }) => {
  const SpotifyClient = createApiClient({ accessToken });

  return SpotifyClient.getMe();
};
