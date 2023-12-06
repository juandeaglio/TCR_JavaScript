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

    test ('Generate correct components from a vector', () => {
        const vector = new Vector(360.0, 1, 1);
        const components = physics.generateComponentsFrom(vector);
        expect(vector.direction).toBeCloseTo(0);
    });

    test('Move a box to the left and up', () => {
        let amalgamatedDirection;
        const vector1 = new Vector(360.0, 1, 1);
        const vector2 = new Vector(270.0, 1, 1);
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2]);

        expect(amalgamatedDirection.direction * 180 / Math.PI).toBeCloseTo(315.0);
        expect(amalgamatedDirection.speed).toBeCloseTo(Math.sqrt(2));
    });

    test('Move a box with three vectors', () => {
        let amalgamatedDirection;
        const vector1 = new Vector(360.0, 1, 1);
        const vector2 = new Vector(-90.0, 1, 1);
        const vector3 = new Vector(Direction.Down, vector2.speed * 0.05); // five percent downwards
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2, vector3]);

        // expect(amalgamatedDirection.direction).toBeCloseTo(-46.397181);
        // expect(amalgamatedDirection.speed).toBeCloseTo(Math.sqrt(1 + 0.9025));
    });
});