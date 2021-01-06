import React, { useState , useEffect } from 'react';

import './App.css';
import Cell from './utils/cell';
import GameOfLife from './utils/game';
import CellComponent from './cellComponent';

const grid = new Array(25).fill(new Array(25).fill(0));
const game = new GameOfLife(grid, Cell);
const gameGrid = game.grid;

const App = () => {
  console.log('APP');
  const [state, setState] = useState(gameGrid);

  console.log('GAME_GRID: ', gameGrid);

  // const handleClick = (i, j) => {
  //   grid[i][j].state = grid[i][j].state === 0 ? 1: 0;
  // };

  
  useEffect(() => {
    // game.newState();
    // if(gameGrid) {
      setState(gameGrid);
    // }

  }, []);

  return (
    <div className='app'>
      <h1>Game Of Life</h1>
      
      <table>
        <tbody>
          {state && state.map((row, i) =>
            <tr key={`row-${i}`}>
              {row.map((cell, j) => {
                console.log('TABLE_CELL: ', cell);
                return <CellComponent key={j} i={i} j={j} data={cell} />
              }
                // <td 
                //   data-testid={`${i}-${j}`}
                //   key={j}
                //   style={{'background': cell.state === 1 ? 'black' : 'white'}}
                //   // onClick={() => handleClick(i, j)}
                // >
                // </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
