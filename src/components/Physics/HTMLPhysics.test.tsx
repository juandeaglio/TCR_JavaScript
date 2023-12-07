import React from 'react';
import {HTMLPhysics, Components} from './HTMLPhysics';
import Vector from './Vector';
import Direction from '../../Direction';

describe('HTMLPhysics tests', () => {
    let physics: HTMLPhysics;
    const vector1: Vector = new Vector(0.0, 1, 1);
    const vector2 = new Vector(-90.0, 1, 1);
    const vector3 = new Vector(Direction.Down, vector2.speed * 0.05, 1); // five percent downwards

    beforeEach(() => 
    {
        physics = new HTMLPhysics();
    });

    test('Move a box to the right', () => {
        const createdStyle = physics.createMove(new Vector(Direction.Right, 10, 1))
        const actualStyle: React.CSSProperties = {
            transform: 'translate(10px, 0px)'
        };
        expect(createdStyle).toEqual(actualStyle);
    });

    test('Move a box upwards', () => {
        const components: Components = physics.generateComponentsFrom(new Vector(Direction.Up, 10, 1));
        expect(components.x).toBeCloseTo(0);
        expect(components.y).toBeCloseTo(-10);
    });

    test('Move a box downwards', () => {
        const components: Components = physics.generateComponentsFrom(new Vector(Direction.Down, 10, 1));
        expect(components.x).toBeCloseTo(0);
        expect(components.y).toBeCloseTo(10);
    });

    test('Move a box downwards', () => {
        const components: Components = physics.generateComponentsFrom(new Vector(Direction.Left, 10, 1));
        expect(components.x).toBeCloseTo(-10);
        expect(components.y).toBeCloseTo(0);
    });


    test ('Generate correct components from a vector', () => {
        const components = physics.generateComponentsFrom(new Vector(Direction.Right, 10, 1));
        expect(components.y).toBeCloseTo(0);
        expect(components.x).toBeCloseTo(10);
    });

    test ('Generate correct components from a vector', () => {
        const components = physics.generateComponentsFrom(vector1);
        expect(vector1.direction).toBeCloseTo(0);
    });

    test('Generate vector from components', () => {
        const vector = physics.generateVectorFromComponents(new Components(new Vector(315.0, Math.sqrt(2), 1)));
        expect(vector.speed).toBeCloseTo(Math.sqrt(2));
        expect(vector.direction * 180 / Math.PI).toBeCloseTo(315.0);
    });

    test('Move a box to the left and up', () => {
        let amalgamatedDirection;
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2]);

        expect(amalgamatedDirection.direction * 180 / Math.PI).toBeCloseTo(315.0);
        expect(amalgamatedDirection.speed).toBeCloseTo(Math.sqrt(2));
    });

    test('Move a box with three vectors', () => {
        let amalgamatedDirection;
        amalgamatedDirection = physics.generateVectorFromVectors([vector1, vector2, vector3]);

        expect(amalgamatedDirection.speed).toBeCloseTo(Math.sqrt(Math.pow(-1,2) + Math.pow(0.95, 2)));
        expect(amalgamatedDirection.direction * 180 / Math.PI).toBeCloseTo(313.5311993);
    });
});