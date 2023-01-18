import { render } from '@testing-library/react';

import DashboardApi from './dashboard-api';

describe('DashboardApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardApi />);
    expect(baseElement).toBeTruthy();
  });
});
