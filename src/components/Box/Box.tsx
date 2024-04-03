import React from 'react';


const Box: React.FC = (props) => {
  return(
    <svg role='box' width={100} height={100} data-collision-count={0} {...props}>
      <rect width={100} height={100} fill='red' style={{position: 'absolute'}}/>
    </svg>
  );
};

export default Box;