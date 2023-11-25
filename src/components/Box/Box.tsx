import React, { useState } from 'react';

const generateId = () => `box-${Date.now()}-${Math.random()}`;

const Box: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const [testId] = useState(generateId());
  return(
    <div className='box' {...props} data-testid={testId} role='box'>
      I am a box.
    </div>
  );
};

export default Box;