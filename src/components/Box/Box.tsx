import React from 'react';


const Box: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  return(
    <g role='box' x={centerX} y={centerY} >
      <rect width={100} height={100} fill='red' />
    </g>
  );
};

export default Box;