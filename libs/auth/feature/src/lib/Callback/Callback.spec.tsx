import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Callback from './Callback';
import { expect } from 'vitest';

describe('Callback', () => {
  it('should render token not found if hash is not spotted', () => {
    render(
      <MemoryRouter initialEntries={['/some-route']}>
        <Callback />
      </MemoryRouter>
    );

    expect(screen.getByText('Token not found!')).toBeDefined();
  });

  it('should redirect user to root if hash is found', () => {
    render(
      <MemoryRouter initialEntries={['/callback#access_token=123']}>
        <Routes>
          <Route path="/callback" element={<Callback />} />
          <Route
            path="/"
            element={
              <div>
                <p>Root</p>
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Root')).toBeDefined();
  });
});
