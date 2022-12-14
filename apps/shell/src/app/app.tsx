import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthUtils } from '@spotify-app/auth-utils';
import { Authorization } from '@spotify-app/api-client';

import { Callback } from './pages/Callback';

const Home = lazy(() => import('home/Module'));

const authUtils = new AuthUtils();
const authorization = new Authorization({
  clientId: process.env['NX_SPOTIFY_CLIENT_ID'],
});

export function App() {
  const { pathname } = useLocation();
  const navigateToSpotify =
    !authUtils.checkToken() && !pathname.includes('callback');

  useEffect(() => {
    if (navigateToSpotify) {
      window.location.replace(authorization.getAuthorizationUrl());
    }
  }, [navigateToSpotify]);

  if (navigateToSpotify) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
