import {
  GradientBackground,
  Button,
} from '@react-spotify/shared-ui-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Callback() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const accessToken = hash.split('&')[0].split('=')[1];
      localStorage.setItem('accessToken', accessToken);
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <GradientBackground className="flex items-center justify-around p-4">
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
    </GradientBackground>
  );
}

export default Callback;
