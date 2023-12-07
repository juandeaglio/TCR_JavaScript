import normalizeAngle  from './AngleMathematics';
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
export default Vector;