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
});