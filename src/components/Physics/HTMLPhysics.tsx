import React from 'react';
import Vector from './Vector';
import Components from './Components';
class HTMLPhysics {
    generateVectorFromVectors(directions: Array<Vector>): Vector {
        let summedComponents = new Components(new Vector(0, 0));
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

        return new Vector(direction, speed);
    }
    generateComponentsFrom(vector: Vector): Components {
        return new Components(vector);
    }

    createMove(vector: Vector): React.CSSProperties {
        const components = new Components(vector);

        const move = {
            transform: `translate(${components.x}px, ${components.y}px)`

        };
        return move;
    }
}

export {HTMLPhysics, Components};