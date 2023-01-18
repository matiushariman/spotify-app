import { render, screen } from '@testing-library/react';

import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('should render username in full display', () => {
    render(<UserMenu username="username" />);

    expect(screen.getByText('username')).toBeDefined();
  });

  it('should render clipped username', () => {
    render(<UserMenu username="username is so looooooong" />);

    expect(screen.getByText('username is s...')).toBeDefined();
  });
});
