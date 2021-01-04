import { getByText } from "@testing-library/react";

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Game Of Life title', () => {
    render(<App />);

    expect(screen.getByText('Game Of Life')).toBeInTheDocument();
  });

  it('renders a table', () => {
    render(<App />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});