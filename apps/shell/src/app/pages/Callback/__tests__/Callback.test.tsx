import { Callback } from '../Callback';
import { render, waitFor } from '../../../utils/testUtils';

const mockUseNavigate = jest.fn();

jest.mock('./Callback.utils', () => ({
  setTokenFromUrlParams: async () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate,
  useLocation: jest
    .fn()
    .mockReturnValueOnce({
      hash: null,
    })
    .mockReturnValueOnce({
      hash: '#access_token=abcd&',
    }),
}));

describe('pages/Callback', () => {
  it('should render Callback that matches snapshot if hash is empty', () => {
    const { baseElement } = render(<Callback />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should call navigate after finish setting token', async () => {
    render(<Callback />);

    await waitFor(() => expect(mockUseNavigate).toHaveBeenCalled());
  });
});
