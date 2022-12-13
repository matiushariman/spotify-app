import { Authorization } from '..';

describe('authorization', () => {
  describe('getAuthorizationUrl', () => {
    it('should return string that matches snapshot (default)', () => {
      const authorization = new Authorization({});

      expect(authorization.getAuthorizationUrl()).toMatchInlineSnapshot(
        `"https://accounts.spotify.com/authorize?response_type=token&scope=user-read-private user-read-email&client_id=&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fcallback%2F"`
      );
    });

    it('should return string that matches snapshot (custom)', () => {
      const authorization = new Authorization({
        redirectUri: 'https://spotify.matiushariman.com/',
        clientId: 'abc',
      });

      expect(authorization.getAuthorizationUrl()).toMatchInlineSnapshot(
        `"https://accounts.spotify.com/authorize?response_type=token&scope=user-read-private user-read-email&client_id=abc&redirect_uri=https%3A%2F%2Fspotify.matiushariman.com%2F"`
      );
    });
  });
});
