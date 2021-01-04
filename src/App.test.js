import { getByText } from "@testing-library/react";

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders Game Of Life title', () => {
    expect(screen.getByText('Game Of Life')).toBeInTheDocument();
  });

  it('renders a table', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders a table with 25 x 25 cells', () => {
    expect(screen.getAllByRole('row').length).toEqual(25);
    expect(screen.getAllByRole('cell').length).toEqual(625);
  })
});