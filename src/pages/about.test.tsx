import { render, screen } from '@testing-library/react';
import AboutUs from './about';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('About Us', () => {
  it('Have a container with name of page', () => {
    render(<AboutUs />);
    expect(screen.getAllByText('About Us').length).toBe(1);
  });
});
