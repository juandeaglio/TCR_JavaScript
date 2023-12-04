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

    test('Move a box to the left and up', () => {
        let amalgamatedDirection;
        const vector1 = new Vector(360.0, 1);
        const vector2 = new Vector(270.0, 1);
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2]);

        expect(amalgamatedDirection.direction).toBeCloseTo(315.0);
        expect(amalgamatedDirection.speed).toBeCloseTo(Math.sqrt(2));

    });

    test('Move a box with three vectors', () => {
        let amalgamatedDirection;
        const vector1 = new Vector(360.0, 1);
        const vector2 = new Vector(270.0, 1);
        const vector3 = new Vector(vector2.direction, vector2.speed * 0.05);
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2]);
        
        //fivePercentLeft means, we veer downwards towards the left by 5%
        //in this instance, we've applied a -45 degree angle of direction (2d vector), by applied an up and left movement
        //in addition, we also want to go towards the 'left' direction by an additional 5%, ending up at something like -47.25 degree angle
        // let fivePercentLeft = amalgamatedDirection - Direction.Left;
        // fivePercentLeft -= fivePercentLeft * 0.05;

        //amalgamatedDirection = physics.generateVector(amalgamatedDirection)
        //const createdStyle = physics.createMove(amalgamatedDirection, 10)
    });
});