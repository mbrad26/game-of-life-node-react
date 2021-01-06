import { render, screen } from '@testing-library/react';
import App from './App';
import Cell from './utils/cell';
import GameOfLife from './utils/game';

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
  });

  describe('when cell state is 1', () => {
    it('renders with a black background ', () => {
      const grid = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ];

      const game = new GameOfLife(grid, Cell);

      game.grid.forEach((row, i) => row.forEach((cell, j) => {
        // console.log('CELL: ', game.grid)

        expect(screen.getByTestId(`${i}-${j}`)).toHaveStyle(
          `background: ${cell.state === 1 ? 'black': 'white'}`);
      }));
    });
  });
});