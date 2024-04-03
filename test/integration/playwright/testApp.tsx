import React, { useEffect, useRef, useCallback } from 'react';
import { unpause, pause } from '../../../src/systems/TestSimulation';
import EntityControls from '../../../src/components/EntityControls/EntityControls';
import { BoxWithPhysics } from '../../../src/components/Box/BoxWithPhysics';
import Direction from '../../../src/Direction';
import { HTMLPhysics } from '../../../src/components/Physics/HTMLPhysics';
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './defaultTestSizes';

const MAX_WIDTH: number = TEST_WINDOW_WIDTH;
const MAX_HEIGHT: number = TEST_WINDOW_HEIGHT;

const TestApp = () => {
    
    const physics: HTMLPhysics = new HTMLPhysics();
    const moveables = document.getElementsByClassName("moveable");
    const entityControls: EntityControls = new EntityControls(physics);
    const elRef = useRef<Element>(null);
    let animation: Animation;
    useEffect(() =>
    {   
         animation = entityControls.move(elRef.current as Element, Direction.Right);
         animation.pause();
    }, [])
    function handleUnpauseClick(){
        unpause(elRef.current as Element);
        animation.play();
    };
    
    function handlePauseClick(){
        pause(elRef.current as Element);
        animation.pause();
    };


    return(
    <div>
        <div style={{position: 'fixed'}}>
            <button role="button" id="unpause"onClick={handleUnpauseClick}>Unpause</button>
            <button role="button" id="pause" onClick={handlePauseClick}>Pause</button>
        </div>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics id="Box-1" data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right}> </BoxWithPhysics>
        </svg>
    </div>)
}

export default TestApp;