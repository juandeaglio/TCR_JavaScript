import { HTMLPhysics } from "../Physics/HTMLPhysics";

class EntityControls {
    physics: HTMLPhysics;
    constructor(physics: HTMLPhysics) {
        this.physics = physics;
    }
    move = (direction: number, speed?: number) => {
        return this;
    };
    speed = (speed: number) => {
        return this;
    };
}
export default EntityControls;