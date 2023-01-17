import { render } from '@testing-library/react';

import AuthFeature from './AuthFeature';

describe('AuthFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthFeature />);
    expect(baseElement).toBeTruthy();
  });
});
