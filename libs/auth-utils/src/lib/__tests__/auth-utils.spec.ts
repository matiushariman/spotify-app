const mockSetter = jest.fn();
const mockRemove = jest.fn();

jest.mock('typescript-cookie', () => ({
  getCookie: jest.fn().mockReturnValue('token'),
  setCookie: mockSetter,
  removeCookie: mockRemove,
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

  it('should remove existing cookie if removeCookie() is called', () => {
    authUtils.removeToken();

    expect(mockRemove).toHaveBeenCalled();
  });
});
