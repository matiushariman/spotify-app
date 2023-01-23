import { Button, SpotifyLink } from '@react-spotify/shared-ui-components';

const getSpotifyAuthUrl = () => {
  const authorizationUrl = 'https://accounts.spotify.com/authorize';
  const scopes = [
    'user-read-private',
    'user-read-email',
    'user-read-recently-played',
    'user-library-read',
  ];
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

  return `${authorizationUrl}?response_type=token&scope=${encodeURIComponent(
    scopes.join(' ')
  )}&client_id=${clientId}&redirect_uri=${redirectUri}`;
};

export function LoginForm() {
  return (
    <div className="max-w-md space-y-6 p-4">
      <h1 className="text-center text-2xl">React Spotify</h1>
      <p className="text-justify text-sm text-gray-400">
        Disclaimer: This website is not affiliated with, endorsed, sponsored, or
        specifically approved by <SpotifyLink />. we use public data provided by
        Spotify to create my own unique content and services, but we are not
        responsible for any inaccuracies or errors in the data provided by{' '}
        <SpotifyLink />, nor do we have control over <SpotifyLink />
        's content or policies.
      </p>
      <p className="text-justify text-sm text-gray-400">
        To continue, please click on the log in button below:
      </p>
      <div className="text-center">
        <Button onClick={() => window.open(getSpotifyAuthUrl())}>Log In</Button>
      </div>
    </div>
  );
}

export default LoginForm;
