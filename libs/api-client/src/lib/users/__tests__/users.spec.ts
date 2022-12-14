import { UsersApi } from '../users';

import type { GetCurrentUserProfileResponse } from '../users.types';

const mockUserProfile: GetCurrentUserProfileResponse = {
  type: 'user',
  display_name: null,
  uri: 'uri',
  id: '1',
  explicit_content: {
    filter_enabled: true,
    filter_locked: true,
  },
  external_urls: {
    spotify: 'spotify_url',
  },
  href: 'http://',
  images: [
    {
      url: 'image_url',
      width: 48,
      height: 48,
    },
  ],
  product: 'FREE',
  followers: {
    href: null,
    total: 0,
  },
};

describe('UsersApi', () => {
  describe('getCurrentUserProfile', () => {
    const usersApi = new UsersApi({ token: 'abcdefgh' });
    jest
      .spyOn(usersApi, 'getCurrentUserProfile')
      .mockImplementation(async () => ({
        data: mockUserProfile,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      }));

    it('should return response that matches snapshot', async () => {
      const response = await usersApi.getCurrentUserProfile();

      expect(response.data).toEqual(mockUserProfile);
    });
  });
});
