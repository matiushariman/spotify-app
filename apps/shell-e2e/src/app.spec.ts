import { test } from '@playwright/test';

import { AuthenticationSteps } from './steps/authentication-steps';

test.describe('app', () => {
  test('User should be able to login', async ({ page }) => {
    const authenticationSteps = new AuthenticationSteps(page);

    await test.step('User lands on landing page', async () =>
      authenticationSteps.navigateToLandingPage());

    await test.step('If the user is not authenticated, navigate user to Spotify landing page', () =>
      authenticationSteps.isSpotifyLoginPage());

    await test.step('User attempts to login', () =>
      authenticationSteps.loginAttempt(
        process.env['E2E_LOGIN_EMAIL'],
        process.env['E2E_LOGIN_PASSWORD']
      ));

    await test.step('Verify that login operation is successful', () =>
      authenticationSteps.isLoginSuccessful(
        process.env.E2E_BASE_URL || 'http://localhost:4200/'
      ));
  });
});
