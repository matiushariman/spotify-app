import { render, screen } from '@testing-library/react';

import SavedShowsList from './SavedShowsList';

describe('SavedShowsList', () => {
  it('should render no saved shows if shows is empty', () => {
    render(<SavedShowsList shows={[]} />);

    expect(screen.getByText('No saved shows.')).toBeDefined();
  });

  it('should render saved shows if shows is not empty', () => {
    render(
      <SavedShowsList
        shows={[
          {
            showName: 'show',
            publisher: 'publisher',
            showImg: 'https://i.pravatar.cc',
          },
        ]}
      />
    );

    expect(screen.getByLabelText('your saved shows')).toBeDefined();
  });
});
