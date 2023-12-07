import normalizeAngle  from './AngleMathematics';

type VectorOptions = {
    direction?: number;
    speed?: number;
    inDegrees?: boolean;
};

class Vector {
    direction: number;
    speed: number;

    constructor(options: VectorOptions = {}) {
        const { 
            direction = 0, 
            speed = 0, 
            inDegrees = false 
        } = options;

        // Apply conversion to radians if necessary
        this.direction = inDegrees ? direction * Math.PI / 180.0 : direction;
        this.direction = normalizeAngle(this.direction);
        this.speed = speed;
    }
}
export default Vector;
export { VectorOptions };