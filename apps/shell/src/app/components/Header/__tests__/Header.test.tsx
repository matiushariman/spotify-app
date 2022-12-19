import { render } from '../../../utils/testUtils';

import { Header } from '../Header';
import { screen } from '@testing-library/react';

jest.mock('./hooks/useGetProfile', () => ({
  useGetProfile: jest
    .fn()
    .mockReturnValue({ isLoading: false })
    .mockReturnValueOnce({
      isLoading: true,
    })
    .mockReturnValueOnce({
      isLoading: false,
    }),
  useSelectProfile: jest.fn().mockReturnValue({
    display_name: 'Matius',
    images: [{ url: 'https://api.spotify.com/' }],
  }),
}));
describe('components/Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render loading spinner when loading data', () => {
    expect(screen.getByRole('status')).toBeVisible();
  });

  it('should render user profile when not loading data', () => {
    expect(screen.getByLabelText(/user profile/i)).toBeVisible();
  });
});
