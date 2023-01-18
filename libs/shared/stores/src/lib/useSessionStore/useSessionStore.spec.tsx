import { act, renderHook } from '@testing-library/react';

import useSessionStore from './useSessionStore';

describe('useSessionStore', () => {
  it('should be initialized with default value', () => {
    const { result } = renderHook(() => useSessionStore());

    expect(result.current.accessToken).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should allow user to set access token', () => {
    const { result } = renderHook(() => useSessionStore());

    act(() => {
      result.current.setAccessToken('foo');
    });

    expect(result.current.accessToken).toBe('foo');
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should allow user to remove access token', () => {
    const { result } = renderHook(() => useSessionStore());

    act(() => {
      result.current.setAccessToken('foo');
    });

    expect(result.current.accessToken).toBe('foo');
    expect(result.current.isAuthenticated).toBe(true);

    act(() => {
      result.current.removeAccessToken();
    });

    expect(result.current.accessToken).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });
});
