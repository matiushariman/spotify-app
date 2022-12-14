export interface GetCurrentUserProfileResponse {
  /**
   * The country of the users, as set in the users's account profile. An ISO 3166-1 alpha-2 country code.
   * This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly country?: string;
  /**
   * The name displayed on the users's profile. null if not available.
   */
  readonly display_name: string | null;
  /**
   * The users's explicit content settings.
   * This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly explicit_content?: {
    /**
     * When true, indicates that explicit content should not be played.
     */
    filter_enabled: boolean;
    /**
     * When true, indicates that the explicit content setting is locked and can't be changed by the users.
     */
    filter_locked: boolean;
  };
  /**
   * Known external URLs for this users.
   */
  readonly external_urls: {
    /**
     * The Spotify URL for the object.
     */
    spotify: string;
  };
  /**
   * Information about the followers of the users.
   */
  readonly followers: {
    /**
     * This will always be set to null, as the Web API does not support it at the moment.
     */
    href: string | null;
    /**
     * The total number of followers.
     */
    total: number;
  };
  /**
   * A link to the Web API endpoint for this users.
   */
  readonly href: string;
  /**
   * The Spotify users ID for the users.
   */
  readonly id: string;
  /**
   * The users's profile image.
   */
  readonly images: {
    /**
     * The source URL of the image.
     */
    readonly url: string;
    /**
     * The image height in pixels.
     */
    readonly height: number;
    /**
     * The image width in pixels.
     */
    readonly width: number;
  }[];
  /**
   * The users's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".)
   * This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly product: string;
  /**
   * The object type: "users"
   */
  readonly type: 'user';
  /**
   * The Spotify URI for the users.
   */
  readonly uri: string;
}
