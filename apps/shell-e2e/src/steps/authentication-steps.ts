import { Page, expect } from '@playwright/test';

import { SpotifyPage } from '../pages/spotify-page';

export class AuthenticationSteps {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLandingPage() {
    await this.page.goto('/');
  }

  async isSpotifyLoginPage() {
    const spotifyPage = new SpotifyPage(this.page);

    await expect(this.page).toHaveURL(new RegExp(`^${spotifyPage.url}`));
  }

  async loginAttempt(email?: string, password?: string) {
    const spotifyPage = new SpotifyPage(this.page);

    await spotifyPage.emailField.fill(email);
    await spotifyPage.passwordField.fill(password);
    await spotifyPage.loginBtn.click();
  }

  async isLoginSuccessful(url: string) {
    await expect(this.page).toHaveURL(new RegExp(`^${url}`));
  }
}
