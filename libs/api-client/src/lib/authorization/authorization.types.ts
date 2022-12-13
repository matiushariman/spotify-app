export interface AuthorizationConstructor {
  /**
   * The URI to redirect to after the user grants or denies permission.
   */
  readonly redirectUri?: string;
  /**
   * The client ID provided to you by Spotify when you register your application.
   */
  readonly clientId?: string;
}
