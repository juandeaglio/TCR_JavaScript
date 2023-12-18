import { useState, useEffect } from 'react';
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import Vector from '../Physics/Vector';
import Direction from '../../Direction';

interface Style {
    transform?: string;
}

export const usePhysicsStyle = (physics: HTMLPhysics, direction: number) => {
    const [style, setStyle] = useState<Style>({});
    const [move, setMoving] = useState<string>();

    useEffect(() => {
        const newStyle = physics.createMove(new Vector({ direction: Direction.Right, speed: 10 }));
        setStyle(newStyle);
        const movingDirection = 'move-' + parseFloat(Direction.Right.toFixed(3)).toString();
        setMoving(movingDirection);
    }, [physics, direction]);

    return [style, move];
};
