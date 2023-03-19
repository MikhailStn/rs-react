import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearchBar from './searchBar';

describe('Search Bar', () => {
  it('Contains input', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeDefined();
  });
  it('Input have a placeholder', () => {
    render(<SearchBar />);
    expect(
      screen.getByPlaceholderText('Game, studio or platform')
    ).toBeDefined();
  });
});
