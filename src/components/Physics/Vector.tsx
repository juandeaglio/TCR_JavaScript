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
        if (options == null) {
            options = {direction: 0, speed: 0};
        }
        if (options.direction == null) {
            options.direction = 0;
        }
        if (options.speed == null) {
            options.speed = 0;
        }
        if (options.inDegrees == null) {
            options.inDegrees = false;
        }
        if (options.inDegrees == true) {
            this.direction = options.direction * Math.PI / 180.0;
        }
        else {
            this.direction = options.direction;
        }
        this.direction = normalizeAngle(this.direction);
        this.speed = options.speed;
    }
}
export default Vector;
export { VectorOptions };