import React, { useState, useEffect } from 'react';

const CellComponent = ({i, j, data}) => {
  const [cell, setCell] = useState(data);

  console.log('DATA: ', data);

  const handleClick = () => {
    data.state === 0 
      ? setCell({ ...data, state: 1}) 
      : setCell({ ...data, state: 0})
  };

  useEffect(() => {
  }, [cell.state]);

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