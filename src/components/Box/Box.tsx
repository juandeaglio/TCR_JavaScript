import React from 'react';


const Box: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return(
    <div role='box'>
      I am a box.
    </div>
  );
};

export default Box;