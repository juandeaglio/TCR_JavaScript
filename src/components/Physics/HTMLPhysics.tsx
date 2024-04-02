import React from 'react';
import Vector from './Vector';
import Components from './Components';
import Pair from '../../Pair';
import { transform } from '@babel/core';


class HTMLPhysics {
    generateVectorFromVectors(directions: Array<Vector>): Vector {
        let summedComponents = new Components(new Vector());
        directions.forEach(vector => {
            const generated: Components = this.generateComponentsFrom(vector);
            summedComponents.x += generated.x;
            summedComponents.y += generated.y;
        });
        return this.generateVectorFromComponents(summedComponents);
    }
    generateVectorFromComponents(components: Components): Vector {
        let y = components.y;
        let x = components.x;
        let direction = Math.atan2(y, x);
        direction = direction + Math.PI / 2;
        const speed = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        return new Vector({direction: direction, speed: speed});
    }
    generateComponentsFrom(vector: Vector): Components {
        return new Components(vector);
    }

    createKeyframes(initial: Pair, vector: Vector): Array<Keyframe> {
        const absolute_components = new Components(vector);
        let relative_components = absolute_components;
        relative_components.x += initial.x
        relative_components.y += initial.y
        const initial_translate = `translate(${initial.x}px, ${initial.y}px)`;
        const final_translate = `translate(${relative_components.x}px, ${relative_components.y}px)`;
        const style: Array<Keyframe> = [ // Could be handy to re-factor this 'style' const from Array into some object which flags the types of keyframes instead of simply having raw values.
            {
                transform: initial_translate,
                '-webkit-transform': initial_translate,
            },
            {
                transform: final_translate,
                '-webkit-transform': final_translate,
            }
        ];
        return style;
    }

    createFriction(speed?: number, distance?: number, time?: number): Object {
        const animation_time = time || (distance/speed);
        return {duration: animation_time, iterations: 1, fill: "forwards", easing: "linear"};
    }
}

export {HTMLPhysics, Components};