import { render, screen } from '../../../../utils/testUtils';
import { UserProfileChip } from '../UserProfileChip';

jest.mock('../hooks/useGetProfile', () => ({
  useSelectProfile: jest
    .fn()
    .mockReturnValue({
      display_name: 'Matius',
      images: [
        {
          url: 'https://localhost:8080',
        },
      ],
    })
    .mockReturnValueOnce({
      display_name: 'Matius',
      images: [
        {
          url: 'https://localhost:8080',
        },
      ],
    })
    .mockReturnValueOnce({
      display_name: 'Matius',
      images: [],
    }),
}));

describe('components/Header/UserProfileChip', () => {
  beforeEach(() => {
    render(<UserProfileChip />);
  });

  it('should render user avatar when user image is available', () => {
    expect(screen.getByAltText(/user avatar/i)).toBeTruthy();
  });

  it('should render default avatar when user image is not available', () => {
    expect(screen.getByAltText(/Freepik/i)).toBeTruthy();
  });
});
