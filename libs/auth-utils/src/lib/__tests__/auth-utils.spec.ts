const mockSetter = jest.fn();

jest.mock('typescript-cookie', () => ({
  Cookies: {
    get: jest.fn().mockReturnValue('token'),
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

  it('should return true if token exists', () => {
    expect(authUtils.checkToken()).toEqual(true);
  });
});
