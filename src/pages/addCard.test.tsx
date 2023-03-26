import { render, screen } from '@testing-library/react';
import AddCard from './addCard';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('Add card component', () => {
  it('Includes roles', () => {
    render(<AddCard />);
    expect(screen.getAllByRole('checkbox')).toBeDefined();
    expect(screen.getAllByRole('option')).toBeDefined();
    expect(screen.getAllByRole('textbox')).toBeDefined();
  });
});
