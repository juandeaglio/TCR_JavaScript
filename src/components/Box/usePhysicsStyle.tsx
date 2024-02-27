import { useState, useEffect } from 'react';
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import Vector from '../Physics/Vector';
import Direction from '../../Direction';

interface Style {
    transform?: string;
}

export const decorateAsMoveable = (): string => {
    const [classNames, setClassNames] = useState<string>();

    useEffect(() => {
        let movingDirection = 'move-' + parseFloat(Direction.Right.toFixed(3)).toString();
        movingDirection += ' pause-animation'; // our shapes pause by default
        movingDirection += ' moveable'; // decorates HTML element with a moveable classname
        setClassNames(movingDirection);
    });

    return classNames;
};
