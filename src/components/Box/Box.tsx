import React, {forwardRef} from 'react';

interface BoxProps {
  children?: React.ReactNode;
  [x: string | number | symbol]: unknown;
}

const Box: React.FC<BoxProps> = forwardRef((props, ref) => {
  return(
    <svg role='box' width={100} height={100} data-collision-count={0} {...props} ref={ref as React.MutableRefObject<null>}>
      <rect width={100} height={100} fill='red' style={{position: 'absolute'}}/>
      {props.children}
    </svg>
  );
});

export default Box;