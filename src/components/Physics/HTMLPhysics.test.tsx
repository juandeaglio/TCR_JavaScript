import React from 'react';
import HTMLPhysics from './HTMLPhysics';
import Direction from '../../Direction';

describe('HTMLPhysics tests', () => {
    let physics: HTMLPhysics;
    beforeEach(() => 
    {
        physics = new HTMLPhysics();
    });

    test('Move a box to the right', () => {
        const createdStyle = physics.createMove(Direction.Right, 10)
        const actualStyle: React.CSSProperties = {
            transform: 'translate(10px, 0px)'
        };
        expect(createdStyle).toEqual(actualStyle);
    });

    test('Move a box to the left and up, but closer to left by 5%', () => {
        let amalgamatedDirection;
        
        const createdStyle = physics.createMove(amalgamatedDirection, 10)

    });
});