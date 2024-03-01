import React from 'react';
import Vector from './Vector';
import Components from './Components';
import Pair from '../../Pair';


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

    createKeyframes(initial: Pair, vector: Vector): Array<Object> {
        const absolute_components = new Components(vector);
        let relative_components = absolute_components;
        relative_components.x += initial.x
        relative_components.y += initial.y
        const style: Array<Object> = [
            {
                transform: `translate(${initial.x}px, ${initial.y}px)`,
            },
            {
                transform: `translate(${relative_components.x}px, ${relative_components.y}px)`,
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