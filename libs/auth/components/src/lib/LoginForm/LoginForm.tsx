import { Button } from '@react-spotify/shared-ui-components';

export function LoginForm() {
  return (
    <div className="max-w-md space-y-6 p-4">
      <h1 className="text-center text-2xl">React Spotify</h1>
      <p className="text-justify text-sm text-gray-400">
        Disclaimer: This website is not affiliated with, endorsed, sponsored, or
        specifically approved by Spotify. Spotify is a registered trademark of
        Spotify AB. I use public data provided by Spotify to create my own
        unique content and services, but I am not responsible for any
        inaccuracies or errors in the data provided by Spotify, nor do I have
        control over Spotify's content or policies.
      </p>
      <p className="text-justify text-sm text-gray-400">
        To continue, please click on the log in button below:
      </p>
      <div className="text-center">
        <Button>Log In</Button>
      </div>
    </div>
  );
}

export default LoginForm;
