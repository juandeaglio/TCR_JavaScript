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
        if (degree) {
            this.direction = direction * Math.PI / 180.0;
            this.direction = normalizeAngle(direction);
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
        directions.forEach(vector => {
            this.generateComponentsFrom(vector);
        });
        return new Vector(315.0 * Math.PI / 180, Math.sqrt(2));
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