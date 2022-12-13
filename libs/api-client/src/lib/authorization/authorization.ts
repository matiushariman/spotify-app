import type { AuthorizationConstructor } from './authorization.types';

export class Authorization {
  private readonly authorizationUrl: string;
  private readonly redirectUri: string;
  private readonly clientId: string;
  private readonly scope: string;

  constructor({
    redirectUri = 'http://localhost:4200/callback/',
    clientId = '',
  }: AuthorizationConstructor) {
    this.authorizationUrl = 'https://accounts.spotify.com/authorize';
    this.redirectUri = redirectUri;
    this.clientId = clientId;
    this.scope = 'user-read-private user-read-email';
  }

  getAuthorizationUrl() {
    return `${this.authorizationUrl}?response_type=token&scope=${
      this.scope
    }&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(
      this.redirectUri
    )}`;
  }
}
