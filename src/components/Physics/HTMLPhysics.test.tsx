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
        amalgamatedDirection = physics.generateVector([Direction.Left, Direction.Up]);
        expect(amalgamatedDirection).toBeCloseTo(-45.0);
        //fivePercent of left means, we veer downwards towards the left by 5%
        //in this instance, we've applied a -45 degree angle of direction (2d vector), by applied an up and left movement
        //in addition, we also want to go towards the 'left' direction by an additional 5%, ending up at something like -47.25 degree angle
        //const fivePercentLeft = 
        //amalgamatedDirection = physics.generateVector(amalgamatedDirection)
        //const createdStyle = physics.createMove(amalgamatedDirection, 10)

    });
});