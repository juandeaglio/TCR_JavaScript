import React from 'react';

const Box: React.FC<{'data-testid'?: string}> = (props) => {
  return(
    <div data-testid={props['data-testid']}>
      I am not a box.
    </div>
  );
};

export default Box;