import { Authorization } from '..';

describe('authorization', () => {
  const authorization = new Authorization({
    clientId: 'CLIENT_ID',
  });

  describe('getAuthorizationUrl', () => {
    it('should return string that matches snapshot', () => {
      expect(authorization.getAuthorizationUrl()).toMatchInlineSnapshot(
        `"https://accounts.spotify.com/authorize?response_type=token&scope=user-read-private user-read-email&client_id=CLIENT_ID&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fcallback%2F"`
      );
    });
  });
});
