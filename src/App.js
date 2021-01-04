import React from 'react';

import './App.css';

const App = () => {
  const grid = new Array(25).fill(new Array(25).fill(0));

  return (
    <div className='app'>
      <h1>Game Of Life</h1>

      <table>
        <tbody>
          {grid.map((row, i) =>
            <tr key={`row-${i}`}>
              {row.map((el, j) => 
                <td key={j}></td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
