import React, { useState } from 'react';

const CellComponent = ({i, j, data}) => {
  const [cell, setCell] = useState(data);

  const handleClick = () => {
    data.state = data.state === 0 ? 1 : 0;
    setCell({ ...data });
  };

  return (
    <>
      <td 
        data-testid={`${i}-${j}`}
        style={{'background': cell.state === 1 ? 'black' : 'white'}}
        onClick={() => handleClick(data)}
      >
      </td>
    </>
  );
};

export default CellComponent;