import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthUtils } from '@spotify-app/auth-utils';
import { Authorization } from '@spotify-app/api-client';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Callback } from './pages/Callback';

const Home = lazy(() => import('home/Module'));

const authUtils = new AuthUtils();
const authorization = new Authorization({
  clientId: process.env['NX_SPOTIFY_CLIENT_ID'],
  redirectUri: process.env['NX_SPOTIFY_REDIRECT_URI'],
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
    <div className="min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[0] to-[#121212] flex">
      <Navigation />
      <div className="ml-[232px] w-full">
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
