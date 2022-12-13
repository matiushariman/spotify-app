const mockSetter = jest.fn();

jest.mock('typescript-cookie', () => ({
  Cookies: {
    get: jest.fn().mockReturnValue('efghijkl'),
    set: mockSetter,
  },
}));

import { AuthUtils } from '../auth-utils';

describe('authUtils', () => {
  const authUtils = new AuthUtils();

  it('should return decrypted token that matches snapshot', () => {
    expect(authUtils.getToken('abcdefg')).toMatchInlineSnapshot(`""`);
  });

  it('should work', () => {
    authUtils.setToken({ token: 'abcd', privateKey: 'def' });

    expect(mockSetter).toHaveBeenCalled();
  });
});
