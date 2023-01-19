import { render } from '@testing-library/react';

import RecentlyPlayed from './RecentlyPlayed';

describe('RecentlyPlayed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecentlyPlayed />);
    expect(baseElement).toBeTruthy();
  });
});
