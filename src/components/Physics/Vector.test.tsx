import {HTMLPhysics, Components} from './HTMLPhysics';
import Vector from './Vector';
import Direction from '../../Direction';

describe('HTMLPhysics tests', () => {
    let physics: HTMLPhysics;
    beforeEach(() => 
    {
        physics = new HTMLPhysics();
    });


    test('Move a box upwards', () => {
        const components: Components = physics.generateComponentsFrom(new Vector({direction: Direction.Up, speed: 10, inDegrees: true}));
        expect(components.x).toBeCloseTo(0);
        expect(components.y).toBeCloseTo(-10);
    });

    test('Move a box downwards', () => {
        const components: Components = physics.generateComponentsFrom(new Vector({direction: Direction.Down, speed: 10, inDegrees: true}));
        expect(components.x).toBeCloseTo(0);
        expect(components.y).toBeCloseTo(10);
    });

    test('Move a box left ', () => {
        const components: Components = physics.generateComponentsFrom(new Vector({direction: Direction.Left, speed: 10, inDegrees: true}));
        expect(components.x).toBeCloseTo(-10);
        expect(components.y).toBeCloseTo(0);
    });


    test ('Generate correct components from a vector', () => {
        const components = physics.generateComponentsFrom(new Vector({direction: Direction.Right, speed: 10, inDegrees: true}));
        expect(components.y).toBeCloseTo(0);
        expect(components.x).toBeCloseTo(10);
    });

    test('Generate vector from components', () => {
        const vector = physics.generateVectorFromComponents(new Components(new Vector({direction: 315.0, speed: Math.sqrt(2), inDegrees: true})));
        expect(vector.speed).toBeCloseTo(Math.sqrt(2));
        expect(vector.direction * 180 / Math.PI).toBeCloseTo(315.0);
    });
});