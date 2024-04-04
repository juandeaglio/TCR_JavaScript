import React, { useState, useEffect } from 'react';
import { unpause, pause } from '../../../src/systems/TestSimulation';
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './defaultTestSizes';

const MAX_WIDTH: number = TEST_WINDOW_WIDTH;
const MAX_HEIGHT: number = TEST_WINDOW_HEIGHT;

const TestAppPOC = () => {
    const [style, modifyStyle] = useState<Object>();
    const [keyFrames, setKeyFrames] = useState<string>('');
    const [animationType, setAnimationName] = useState<string>();
    const moveables: HTMLCollectionOf<SVGSVGElement> = document.getElementsByTagName('svg');
    const [styleSelectors, setStyleSelectors] = useState<{ [key: string]: number }>({});


    function handleUnpauseClick(){
        modifyStyle({
            animationName: "Moving",
            animationTimingFunction: "linear",
            animationDuration: "1s",
            animationDelay: "0.0s",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationFillMode: "forwards",
            animationPlayState: "paused",
        });
    };
    
    function handlePauseClick(){
        modifyStyle({
            animationName: "Moving",
            animationTimingFunction: "linear",
            animationDuration: "1s",
            animationDelay: "0.0s",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationFillMode: "forwards",
            animationPlayState: "running",
        });
    };

    useEffect(() => {
        const newStyleSelectors: Record<string, number> = {};
        Array.from(moveables).forEach((element, i) => {
            var style: HTMLStyleElement = document.createElement("style");
            style.id = element.id + '-animation';
            newStyleSelectors[element.id] = 0;
            style.innerHTML = keyFrames;
            document.head.appendChild(style);
        });
        setStyleSelectors(newStyleSelectors);
        setAnimationName("Moving");
    }, []);
    function handleGoClick(){
        if (animationType) {
            Array.from(moveables).forEach((element, i) => {
                const elementCoords = element.getBoundingClientRect();
                const x_initial = elementCoords.x;
                const y_initial = elementCoords.y;
                const keyframes = [
                    `@-webkit-keyframes ${animationType} {
                        0% {-webkit-transform:translate(${x_initial}px, ${y_initial}px)}
                        100% {-webkit-transform:translate(${x_initial + 300}px, ${y_initial}px)}
                    }`,
                    `@keyframes ${animationType} {
                        0% {transform:translate(${x_initial}px, ${y_initial}px)}
                        100% {transform:translate(${x_initial + 300}px, ${y_initial}px)}
                    }`];
                const style: HTMLElement | null = document.getElementById(element.id+'-animation')
                if (style){
                    style.innerHTML = keyframes[0] + keyframes[1]
                }
            });
        }
        modifyStyle({
            animationName: "Moving",
            animationTimingFunction: "linear",
            animationDuration: "1s",
            animationDelay: "0.0s",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationFillMode: "forwards",
            animationPlayState: "running",
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