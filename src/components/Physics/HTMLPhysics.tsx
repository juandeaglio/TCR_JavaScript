import React, {CSSProperties} from 'react';

class HTMLPhysics {
    constructor() {
    }

    generateVector(directions: Array<number>): number {
        return -45.0
    }

    createMove(direction: number, speed: number): React.CSSProperties {
        const move = {
            transform: `translate(${speed}px, 0px)`

        };
        return move;
    }

    // Add any other methods related to physics here
}

export default HTMLPhysics;