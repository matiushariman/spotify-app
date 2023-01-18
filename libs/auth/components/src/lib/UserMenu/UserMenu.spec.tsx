import { render } from '@testing-library/react';

import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserMenu />);
    expect(baseElement).toBeTruthy();
  });
});
