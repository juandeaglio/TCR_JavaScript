import React from 'react';

interface BoxProps {
  windowWidth: number;
  windowHeight: number;
  children?: React.ReactNode;
  [key: string]: any;
}

const Box: React.FC<BoxProps> = ({windowWidth, windowHeight, children, ...otherProps}) => {
  const centerX = windowWidth / 2;
  const centerY = windowHeight / 2;

  return(
    <g role='box' x={centerX} y={centerY} data-collision-count={0} {...otherProps}>
      <rect width={100} height={100} fill='red' />
      {children}
    </g>
  );
};

export default Box;