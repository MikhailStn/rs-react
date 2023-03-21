import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('Contains navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('navigation').length).toBeDefined();
  });
  it('Navigation contains two links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(`Main`)).toBeDefined();
    expect(screen.getByText(`About Us`)).toBeDefined();
  });
});
