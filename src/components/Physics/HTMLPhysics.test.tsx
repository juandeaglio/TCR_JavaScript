import React from 'react';
import {HTMLPhysics, Vector} from './HTMLPhysics';
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
        amalgamatedDirection = physics.generateVectorFromVectors([new Vector(315.0, Math.sqrt(2)), new Vector(270.0, 1)])
        expect(amalgamatedDirection.direction).toBeCloseTo(315.0);
        expect(amalgamatedDirection.speed).toBeCloseTo(Math.sqrt(2));
        //fivePercent of left means, we veer downwards towards the left by 5%
        //in this instance, we've applied a -45 degree angle of direction (2d vector), by applied an up and left movement
        //in addition, we also want to go towards the 'left' direction by an additional 5%, ending up at something like -47.25 degree angle
        // let fivePercentLeft = amalgamatedDirection - Direction.Left;
        // fivePercentLeft -= fivePercentLeft * 0.05;

        //amalgamatedDirection = physics.generateVector(amalgamatedDirection)
        //const createdStyle = physics.createMove(amalgamatedDirection, 10)

    });
});