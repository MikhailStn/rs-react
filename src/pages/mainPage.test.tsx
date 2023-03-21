import { render, screen } from '@testing-library/react';
import MainPage from './mainPage';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('Main Page', () => {
  it('Includes main container', () => {
    render(<MainPage />);
    expect(screen.getAllByRole('main').length).toBe(1);
  });
  it('Main container includes two sections', () => {
    render(<MainPage />);
    expect(screen.getByText('search')).toBeDefined();
    expect(screen.getAllByText('The Day Before').length).toBe(1);
  });
});
