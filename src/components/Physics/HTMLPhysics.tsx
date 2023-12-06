import React from 'react';

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
        }
        else {
            this.direction = direction;
        }
        this.direction = normalizeAngle(this.direction);
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
        return this.generateVectorFromComponents(summedComponents);
    }
    generateVectorFromComponents(components: Components): Vector {
        let y = components.y;
        let x = components.x;
        const direction = Math.atan2(y, x);
        const speed = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        return new Vector(direction, speed);
    }
    generateComponentsFrom(vector: Vector): Components {
        return new Components(vector);
    }

    createMove(vector: Vector): React.CSSProperties {
        const direction: number = vector.direction;
        const speed: number = vector.speed;

        const move = {
            transform: `translate(${speed}px, 0px)`

        };
        return move;
    }

    // Add any other methods related to physics here
}

export {HTMLPhysics, Vector, Components, normalizeAngle};