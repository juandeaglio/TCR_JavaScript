import React from 'react';


const Box: React.FC<{ windowWidth: number, widthHeight: number }> = (props) => {
  const centerX = props.windowWidth / 2;
  const centerY = props.widthHeight / 2;

  return(
    <g role='box' x={centerX} y={centerY}>
      <rect width={100} height={100} fill='red' />
    </g>
  );
};

export default Box;