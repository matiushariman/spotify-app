import type { ErrorResponse } from '@spotify-app/api-client';
import { AuthUtils } from '@spotify-app/auth-utils';

export const handleApiError = (err: ErrorResponse) => {
  const {
    error: { status },
  } = err;

  if (status === 401) {
    window.alert(
      'Your session has expired! Click close to reauthenticate your session.'
    );
    const authUtils = new AuthUtils();
    authUtils.removeToken();

    window.location.replace('/');
  }
};
