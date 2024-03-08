import Direction from "../../Direction";
import Pair from "../../Pair";
import { HTMLPhysics } from "../Physics/HTMLPhysics";
import Vector from "../Physics/Vector";


class EntityControls
{
    physicsEngine: HTMLPhysics;
    constructor(physics: HTMLPhysics)
    {
        this.physicsEngine = physics;
    }

    move(element: Element, direction: Direction): Animation {
        const initial_element_position: Pair = new Pair(parseInt(element.getAttribute('x')), parseInt(element.getAttribute('y')));
        const keyframes: Array<Keyframe> = this.physicsEngine.createKeyframes(initial_element_position, new Vector({speed: 10, direction: direction}));
        
        const animation = element.animate(keyframes, this.physicsEngine.createFriction(NaN, NaN, 10));
        return animation;
    }
}

export default EntityControls;