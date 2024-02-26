import React from 'react';

interface BoxProps {
  children?: React.ReactNode;
  [x: string | number | symbol]: unknown;
}

const Box: React.FC<BoxProps> = ({children, ...otherProps}) => {
  return(
    <g role='box' data-collision-count={0} {...otherProps}>
      <rect width={100} height={100} fill='red' style={{position: 'absolute'}}/>
      {children}
    </g>
  );
};

export default Box;