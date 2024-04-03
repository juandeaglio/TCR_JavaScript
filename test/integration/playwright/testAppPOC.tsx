import React, { useState, useEffect } from 'react';
import { unpause, pause } from '../../../src/systems/TestSimulation';
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './defaultTestSizes';

const MAX_WIDTH: number = TEST_WINDOW_WIDTH;
const MAX_HEIGHT: number = TEST_WINDOW_HEIGHT;

const TestAppPOC = () => {
    const [style, modifyStyle] = useState<Object>();
    const [animationType, setAnimationName] = useState<string>();
    const moveables: HTMLCollectionOf<SVGSVGElement> = document.getElementsByTagName('svg');
    const styles = {};


    function handleUnpauseClick(){
        unpause(document.getElementsByClassName('moveable'));
    };
    
    function handlePauseClick(){
        pause(document.getElementsByClassName('moveable'));
    };

    useEffect(() => {
        if (animationType) {
            Array.from(moveables).forEach((element, i) => {
            
                const style: HTMLStyleElement = document.createElement("style");
                const elementCoords = element.getBoundingClientRect();
                const x_initial = elementCoords.x;
                const y_initial = elementCoords.y;
                const keyframes = 
                `@-webkit-keyframes ${animationType} {
                    0% {-webkit-transform:translate(${x_initial}px, ${y_initial}px)}
                    100% {-webkit-transform:translate(${x_initial + 300}px, ${y_initial}px)}
                }`;
                style.sheet?.insertRule(keyframes, 0);
                style.id = element.id;
                style.textContent = keyframes;
                styles[element.id] = document.head.appendChild(style);
            });
        }
    }, [animationType]);
    function handleGoClick(){
        setAnimationName("Moving");

        modifyStyle({
            animationName: "Moving",
            animationTimingFunction: "ease-in-out",
            animationDuration: "1s",
            animationDelay: "0.0s",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationFillMode: "forwards"
        });
    };


    return(
    <div>
        <div style={{position: 'fixed'}}>
            <button role="button" id="unpause"onClick={handleUnpauseClick}>Unpause</button>
            <button role="button" id="pause" onClick={handlePauseClick}>Pause</button>
            <button role="button" id="go" onClick={handleGoClick}>Go</button>
        </div>
        <svg id="Box-1" width={100} height={100} className='moveable' style={style}>
            <rect width={100} height={100} fill='red'></rect>
        </svg>
    </div>)
}

export default TestAppPOC;