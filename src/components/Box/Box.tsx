import React from 'react';


const Box: React.FC<{ windowWidth: number, windowHeight: number }> = (props) => {
  const centerX = props.windowWidth / 2;
  const centerY = props.windowHeight / 2;

  return(
    <g role='box' x={centerX} y={centerY} data-collision-count={0}>
      <rect width={100} height={100} fill='red' />
    </g>
  );
};

export default Box;