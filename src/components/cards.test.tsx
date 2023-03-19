import { render, screen } from '@testing-library/react';
import { items } from '../data/games';
import Cards from './cards';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('Cards', () => {
  it('Renders cards container correctly', () => {
    render(<Cards />);
    expect(screen.getByText(`${items[0].name}`)).toBeDefined();
  });
  it('Cards container includes the same number of cards what items list has', () => {
    render(<Cards />);
    expect(screen.getAllByText(`Release:`).length).toBe(items.length);
  });
});
