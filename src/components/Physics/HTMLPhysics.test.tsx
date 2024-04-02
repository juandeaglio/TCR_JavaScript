import {HTMLPhysics} from './HTMLPhysics';
import Vector from './Vector';
import Direction from '../../Direction';
import Pair from '../../Pair'

describe('HTMLPhysics tests', () => {
    let physics: HTMLPhysics;
    const vector1: Vector = new Vector({direction: 0.0, speed: 1, inDegrees: true});
    const vector2 = new Vector({direction: -90.0, speed: 1, inDegrees: true});
    const vector3 = new Vector({direction: Direction.Down, speed: 0.05, inDegrees: true}); // five percent downwards

    beforeEach(() => 
    {
        physics = new HTMLPhysics();
    });

    test('Move a box to the right', () => {
        const initialPosition: Pair = new Pair(0, 0);
        const keyframes = physics.createKeyframes(initialPosition, new Vector({direction: Direction.Right, speed: 10, inDegrees: true}));
        const expectedKeyframes: Array<Object> = [
            {
                transform: "translate(0px, 0px)"
            },
            {
                transform: "translate(10px, 0px)"
            }
        ];
        expect(keyframes).toEqual(expectedKeyframes);
    });

    test('Frictionless physics', () => {
        const friction = physics.createFriction(NaN, NaN, 1000);
        const expectedFriction: Object =  {duration: 1000, iterations: 1, fill: "forwards", easing: "linear"};
        expect(expectedFriction).toEqual(friction);
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

    
    test('Move an offset box to the right', () => {
        const vector: Vector = new Vector({direction: Direction.Right, speed: 10, inDegrees: true})
        const initialPosition: Pair = new Pair(100, 100);
        const createdStyle: Array<Keyframe> = physics.createKeyframes(initialPosition, vector);
        const actualStyle: Array<Keyframe> = [
            {
                transform: "translate(100px, 100px)",
            },
            {
                transform: "translate(110px, 100px)",
            }
        ];
        expect(createdStyle).toEqual(actualStyle);
    });

});