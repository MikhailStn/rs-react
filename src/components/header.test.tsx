import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  it('Shows main page', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.navigation__link')[0] as HTMLLinkElement
      );
    });
    expect(screen.getByText(`Main Page`)).toBeDefined();
  });
  it('Shows main page', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.navigation__link')[1] as HTMLLinkElement
      );
    });
    expect(screen.getAllByText(`About Us`)).toBeDefined();
  });
  it('Shows main page', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.navigation__link')[2] as HTMLLinkElement
      );
    });
    expect(screen.getAllByText(`Add Card`)).toBeDefined();
  });
});
