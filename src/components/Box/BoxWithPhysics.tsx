import React from 'react';
import Box from './Box';
import Direction from '../../Direction';
import { usePhysicsStyle } from './usePhysicsStyle';
import { HTMLPhysics } from '../Physics/HTMLPhysics';

interface BoxWithPhysicsProps {
    direction: Direction;
    windowWidth: number;
    windowHeight: number;
    physics: HTMLPhysics;
}


interface Style {
    transform?: string;
}

export const BoxWithPhysics: React.FC<BoxWithPhysicsProps> = ({ direction, windowWidth, windowHeight, physics, ...otherProps }) => {
    const styleAndMove: [Style, string] = usePhysicsStyle(physics, direction);

    return (
        <Box className={styleAndMove[1]} style={styleAndMove[0]} windowWidth={windowWidth} windowHeight={windowHeight} {...otherProps} />
    );
};
