import { setTokenFromUrlParams } from '../Callback.utils';

const mockSetToken = jest.fn();

jest.mock('@spotify-app/auth-utils', () => ({
  AuthUtils: jest.fn().mockImplementation(() => ({
    setToken: mockSetToken,
  })),
}));

describe('pages/Callback/Callback.utils', () => {
  describe('setTokenFromUrlParams', () => {
    it('should call setToken function', async () => {
      await setTokenFromUrlParams('#access_token=abcd&type=');

      expect(mockSetToken).toHaveBeenCalled();
    });
  });
});
