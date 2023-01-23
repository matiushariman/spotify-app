import { Button } from '@react-spotify/shared-ui-components';
import { useSessionStore } from '@react-spotify/shared-stores';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Callback() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const setAccessToken = useSessionStore((state) => state.setAccessToken);

  useEffect(() => {
    if (hash) {
      const accessToken = hash.split('&')[0].split('=')[1];
      setAccessToken(accessToken);
      navigate('/');
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-around p-4">
      {!hash ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-center">Token not found!</h1>
            <p className="text-gray-400">
              Click the button below to go back to login page.
            </p>
          </div>
          <div className="text-center">
            <Button onClick={() => navigate('/', { replace: true })}>
              Back to Login
            </Button>
          </div>
        </div>
      ) : (
        <h1>Redirecting you back to the app...</h1>
      )}
    </div>
  );
}

export default Callback;
