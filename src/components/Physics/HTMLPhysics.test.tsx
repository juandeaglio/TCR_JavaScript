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
        const vector2 = new Vector(-90.0, 1);
        const vector3 = new Vector(Direction.Down, vector2.speed * 0.05); // five percent downwards
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2]);

        // The calculation should go like this:
        // V1 = new Vector(360.0, 1);
        // V2 = new Vector(-90.0, 1);
        // V3 = new Vector(180.0, 1 * 0.05); // five percent downwards
        //
        // Ax = V1.speed * cos(Theta-A) = 1 * cos(360.0) = 1
        // Ay = V1.speed * sin(Theta-A) = 1 * sin(360.0) = 0
        // Bx = V2.speed * cos(Theta-B) = 1 * cos(-90.0) = 0
        // By = V2.speed * sin(Theta-B) = 1 * sin(-90.0) = -1
        // Cx = V3.speed * cos(Theta-C) = 0.05 * cos(180.0) = -0.05
        // Cy = V3.speed * sin(Theta-C) = 0.05 * sin(180.0) = 0

        // Dx = Ax + Bx + Cx = 1 + 0 - 0.05 = 0.95
        // Dy = Ay + By + Cy = 0 + (-1) + 0 = -1

        // Magnitude = sqrt(Dx^2 + Dy^2) = sqrt((0.95)^2 + (-1)^2) = sqrt(0.9025 + 1) = sqrt(1.9025) = 1.37931142241
        // Theta = arctan(Dy / Dx) = arctan(-1 / 0.95) = arctan(-1.05263157895) = -46.4688007 degrees = 0.759762755 radians
        // amalgamatedDirection = new Vector(-46.4688007, 1.37931142241);
    });
});