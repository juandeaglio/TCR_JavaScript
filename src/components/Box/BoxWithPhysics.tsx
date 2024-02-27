import React from 'react';
import Box from './Box';
import Direction from '../../Direction';
import { decorateAsMoveable } from './usePhysicsStyle';
import { HTMLPhysics } from '../Physics/HTMLPhysics';

interface BoxWithPhysicsProps {
    direction: Direction;
    windowWidth: number;
    windowHeight: number;
    physics: HTMLPhysics;
    [x: string | number | symbol]: unknown;
}


interface Style {
    transform?: string;
}

// Higher order component that decorates box with calculated physics styles.
export const BoxWithPhysics: React.FC<BoxWithPhysicsProps> = ({ direction, windowWidth, windowHeight, physics, ...otherProps }) => {
    const classNames: string = decorateAsMoveable();

    return (
        <Box className={classNames} windowWidth={windowWidth} windowHeight={windowHeight} {...otherProps} />
    );
};
