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

    move(element: Element, direction: Direction): String {
        const initial_element_position: Pair = new Pair(parseInt(element.getAttribute('x')), parseInt(element.getAttribute('y')));
        const style: string = this.physicsEngine.createKeyframes(initial_element_position, new Vector({speed: 10, direction: direction}));
        
        element.animate(
            [
                {
                    transform: "translate(20px, 0px)"
                },
                {
                    transform: "translate(200px, 200px)"
                }
            ], {duration: 1000, iterations: 1, fill: "forwards", easing: "linear"});
        return style;
    }
}

export default EntityControls;