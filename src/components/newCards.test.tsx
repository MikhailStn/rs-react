import React from 'react';
import { render } from '@testing-library/react';
import NewCards from './newCards';
import { describe, expect, it } from 'vitest';

describe('Header', () => {
  it('Shows main page', async () => {
    render(<NewCards />);
    expect(document.querySelector('card__poster')).toBeDefined();
  });
});
