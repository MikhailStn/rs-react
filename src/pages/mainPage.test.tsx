import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  });
  it('request can be sent', () => {
    render(<MainPage />);
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=281c4097e2196ad0dc6db1c72812ab66&tags=all&extras=url_l&format=json&nojsoncallback=1`
    ).then(() => {
      expect(screen.getByText('name')).toBeDefined();
    });
  });
  it('contains cards after submiting', async () => {
    render(<MainPage />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelector('.search-bar__button') as HTMLButtonElement
      );
    });
    expect(document.querySelector('.card__poster')).toBeDefined();
  });
});
