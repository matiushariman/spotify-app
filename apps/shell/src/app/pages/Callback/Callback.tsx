import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { setTokenFromUrlParams } from './Callback.utils';

export const Callback = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      setTokenFromUrlParams(hash).then(() => {
        navigate('/');
      });
    }
  }, [hash]);

  return <p>Redirecting you back to the app..</p>;
};
