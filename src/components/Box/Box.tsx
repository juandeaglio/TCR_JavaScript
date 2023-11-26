import React from 'react';


const Box: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  return(
    <g role='box'>
      <rect x={0} y={0} width={100} height={100} fill='red' />
    </g>
  );
};

export default Box;