import React from 'react';
import Box from './Box';
import Direction from '../../Direction';
import { usePhysicsStyle, physics } from '../EntityControls/EntityControls.test';

interface BoxWithPhysicsProps {
    direction: Direction;
    windowWidth: number;
    windowHeight: number;
}
export const BoxWithPhysics: React.FC<BoxWithPhysicsProps> = ({ direction, windowWidth, windowHeight, ...otherProps }) => {
    const styleAndClassname = usePhysicsStyle(physics, direction); // physics needs to be in scope
    const style = styleAndClassname[0];
    const move = styleAndClassname[1];

    return (
        <Box className={move} style={style} windowWidth={windowWidth} windowHeight={windowHeight} {...otherProps} />
    );
};
