import Direction from "../../Direction";
import Pair from "../../Pair";
import { HTMLPhysics } from "../Physics/HTMLPhysics";
import React from 'react';
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
        const style: string = this.physicsEngine.createStyle(initial_element_position, new Vector({speed: 10, direction: direction}));

        element.setAttribute('style', style);
        return style;
    }
}

/*const EntityControls: React.FC<{physics: HTMLPhysics}> = (physics) => {
    return(
        <div />
    )
}*/
export default EntityControls;