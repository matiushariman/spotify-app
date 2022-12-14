import { App } from '../app';
import { render } from '../utils/testUtils';

const mockWindowReplace = jest.fn();

Object.defineProperty(window, 'location', {
  value: {
    replace: mockWindowReplace,
  },
});

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: jest
    .fn()
    .mockReturnValueOnce({
      pathname: {
        includes: () => false,
      },
    })
    .mockReturnValueOnce({
      pathname: {
        includes: () => true,
      },
    }),
}));

jest.mock('@spotify-app/auth-utils', () => ({
  AuthUtils: jest
    .fn()
    .mockReturnValueOnce({
      checkToken: () => false,
    })
    .mockReturnValueOnce({
      checkToken: () => true,
    }),
}));

describe('App', () => {
  it('should render App that matches snapshot when navigateToSpotify is false', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should call window.location.replace when navigateToSpotify is true', () => {
    render(<App />);

    expect(mockWindowReplace).toHaveBeenCalled();
  });
});
