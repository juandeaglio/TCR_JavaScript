import React from 'react';
import Box from './Box';
import { decorateAsMoveable } from './usePhysicsStyle';

// Higher order component that decorates box with calculated physics styles.
export const BoxWithPhysics: React.FC<any> = (props) => {
    const classNames: string = decorateAsMoveable();

    return (
        <Box className={classNames} {...props} />
    );
};
