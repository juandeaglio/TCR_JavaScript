import { array } from 'prop-types';
import React, {CSSProperties} from 'react';

const normalizeAngle = (angle: number): number => {
    let normalizedAngle = angle % (Math.PI * 2);
    if (normalizedAngle < 0) {
        normalizedAngle += (Math.PI * 2);
    }
    return normalizedAngle;
}
class Vector {
    direction: number;
    speed: number;

    constructor(direction: number, speed: number, degree?: number) {
        if (degree == 1) {
            this.direction = direction * Math.PI / 180.0;
            this.direction = normalizeAngle(this.direction);
        }
        else {
            this.direction = direction;
        }
        this.speed = speed;
    }
}

class Components{
    x: number;
    y: number;
    constructor(vector: Vector){
        this.x = vector.speed * Math.cos(vector.direction);
        this.y = vector.speed * Math.sin(vector.direction);
    }
}

class HTMLPhysics {
    constructor() {
    }

    generateVectorFromVectors(directions: Array<Vector>): Vector {
        let summedComponents = new Components(new Vector(0, 0));
        directions.forEach(vector => {
            const generated: Components = this.generateComponentsFrom(vector);
            summedComponents.x += generated.x;
            summedComponents.y += generated.y;
        });
        return new Vector(315.0 * Math.PI / 180, Math.sqrt(2));
    }
    generateVectorFromComponents(x: number, y: number): Vector {
        return new Vector(0, 0);
    }
    generateComponentsFrom(vector: Vector): Components {
        return new Components(vector);
    }

    createMove(direction: number, speed: number): React.CSSProperties {
        const move = {
            transform: `translate(${speed}px, 0px)`

        };
        return move;
    }

    // Add any other methods related to physics here
}

export {HTMLPhysics, Vector, normalizeAngle};