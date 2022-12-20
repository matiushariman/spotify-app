import { useGetProfile } from '..';

import { renderHook, wrapper, waitFor } from '../../../../../utils/testUtils';

jest.mock('./fetchProfile', () => ({
  fetchProfile: jest.fn().mockReturnValue({}),
}));

describe('components/Header/hooks/useGetProfile', () => {
  it('should return games response', async () => {
    const { result } = renderHook(() => useGetProfile(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({});
  });
});
