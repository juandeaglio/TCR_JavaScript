import Vector from './Vector';
class Components{
    x: number;
    y: number;
    constructor(vector: Vector){
        let adjustedDirection = vector.direction - Math.PI / 2;
        this.x = vector.speed * Math.cos(adjustedDirection);
        this.y = vector.speed * Math.sin(adjustedDirection);
    }
}
export default Components;