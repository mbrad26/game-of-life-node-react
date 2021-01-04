import { getByText } from "@testing-library/react";

import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Game Of Life Title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Game Of Life')).toBeInTheDocument();
  });
});