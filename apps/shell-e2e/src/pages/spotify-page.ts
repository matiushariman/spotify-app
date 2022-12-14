import type { Locator, Page } from '@playwright/test';

export class SpotifyPage {
  readonly url: string;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.url = 'https://accounts.spotify.com/';
    this.emailField = page.getByTestId('login-username');
    this.passwordField = page.getByTestId('login-password');
    this.loginBtn = page.getByTestId('login-button');
  }
}
