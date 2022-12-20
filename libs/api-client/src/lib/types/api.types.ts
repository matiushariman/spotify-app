export interface ApiConstructor {
  /**
   * authorization token
   */
  readonly token: string;
}

const ErrorStatusCodeEnums = {
  /**
   * Bad Request - The request could not be understood by the server due to malformed syntax. The message body will contain more information
   */
  400: 400,
  /**
   * Unauthorized - The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials
   */
  401: 401,
  /**
   * Forbidden - The server understood the request, but is refusing to fulfill it
   */
  403: 403,
  /**
   * Not Found - The requested resource could not be found. This error can be due to a temporary or permanent condition
   */
  404: 404,
  /**
   * Too Many Requests - Rate limiting has been applied
   */
  429: 429,
  /**
   * Internal Server Error
   */
  500: 500,
  /**
   * Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server
   */
  502: 502,
  /**
   * Service Unavailable - The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again
   */
  503: 503,
} as const;

export interface ErrorResponse {
  error: {
    status: keyof typeof ErrorStatusCodeEnums;
    message: string;
  };
}
