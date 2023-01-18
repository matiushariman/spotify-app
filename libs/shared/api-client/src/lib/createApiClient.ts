import SpotifyWebApi from 'spotify-web-api-js';

export const createApiClient = ({ accessToken }: { accessToken: string }) => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);
  return spotifyApi;
};
