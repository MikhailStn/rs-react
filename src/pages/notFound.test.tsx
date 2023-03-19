import { render, screen } from '@testing-library/react';
import PageNotFound from './notFound';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('404', () => {
  it('Have a container with error comment', () => {
    render(<PageNotFound />);
    expect(screen.getAllByText('Error: Page is not found').length).toBe(1);
  });
});
