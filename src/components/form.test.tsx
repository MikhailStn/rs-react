import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from './form';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('Add card component', () => {
  it('button submit the new card', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelector('.form__button') as HTMLButtonElement
      );
    });
    expect(document.querySelector('.cards__container')).toBeDefined();
  });

  it('gender can be change', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelector('.form__radio-label') as HTMLLabelElement
      );
    });
    expect(screen.getAllByText(`Male`)).toBeDefined();
  });

  it('photo can be upload', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.change(
        document.querySelector('.form__submit-photo') as HTMLInputElement
      );
    });
    expect(
      screen.getAllByText(
        (document.querySelector('.form__submit-photo') as HTMLInputElement)
          .value
      )
    ).toBeDefined();
  });

  it('contains select and change values', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.change(
        document.querySelector('.form__select') as HTMLSelectElement
      );
    });
    expect(screen.getAllByText(`First person shooter`)).toBeDefined();
  });

  it('contains current platform', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelector('.form__checkbox') as HTMLInputElement
      );
    });
    expect(screen.getAllByText(`Windows`)).toBeDefined();
  });

  it('contains current platform', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.form__checkbox')[1] as HTMLInputElement
      );
    });
    expect(screen.getAllByText(`PlayStation 5`)).toBeDefined();
  });

  it('contains current platform', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.form__checkbox')[2] as HTMLInputElement
      );
    });
    expect(screen.getAllByText(`PlayStation 4`)).toBeDefined();
  });

  it('contains current platform', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.form__checkbox')[3] as HTMLInputElement
      );
    });
    expect(screen.getAllByText(`Xbox One`)).toBeDefined();
  });

  it('contains current platform', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.form__checkbox')[4] as HTMLInputElement
      );
    });
    expect(screen.getAllByText(`Nintendo Switch`)).toBeDefined();
  });

  it('contains current platform', async () => {
    render(<Form />);
    await waitFor(() => {
      fireEvent.click(
        document.querySelectorAll('.form__checkbox')[5] as HTMLInputElement
      );
    });
    expect(screen.getAllByText(`Xbox Series X/S`)).toBeDefined();
  });
});
