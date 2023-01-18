import { render } from '@testing-library/react';

import SideNavigation from './SideNavigation';

describe('SideNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
