import axios, { AxiosInstance, AxiosResponse } from 'axios';

import type { GetCurrentUserProfileResponse } from './users.types';
import type { ApiConstructor } from '../types';

export class UsersApi {
  private readonly http: AxiosInstance;

  constructor({ token }: ApiConstructor) {
    this.http = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      headers: {
        'Content-Type': 'application /json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getCurrentUserProfile(): Promise<
    AxiosResponse<GetCurrentUserProfileResponse>
  > {
    return this.http
      .get<GetCurrentUserProfileResponse>('/me')
      .catch((err) => err);
  }
}
