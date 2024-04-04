import React, { useState, useEffect } from 'react';
import { unpause, pause } from '../../../src/systems/TestSimulation';
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './defaultTestSizes';

const MAX_WIDTH: number = TEST_WINDOW_WIDTH;
const MAX_HEIGHT: number = TEST_WINDOW_HEIGHT;

const TestAppPOC = () => {
    const [animationStyle, setAnimationStyle] = useState({});
    const [keyframes, setKeyframes] = useState<string>('');
    const [animationType, setAnimationType] = useState('');
    const [moveables, setMoveables] = useState<Array<SVGSVGElement>>([]);

    useEffect(() => {
        const moveablesCollection = document.getElementsByTagName('svg');
        setMoveables(Array.from(moveablesCollection));
    }, []);

    const handleUnpauseClick = () => {
        setAnimationStyle({
          animationName: animationType,
          animationTimingFunction: 'linear',
          animationDuration: '1s',
          animationDelay: '0s',
          animationIterationCount: 1,
          animationDirection: 'normal',
          animationFillMode: 'forwards',
          animationPlayState: 'running',
        });
    };
    
      const handlePauseClick = () => {
        setAnimationStyle({
          ...animationStyle,
          animationPlayState: 'paused',
        });
    };


    const handleGoClick = () => {
        const newKeyframes = moveables.map((element, i) => {
          const elementCoords = element.getBoundingClientRect();
          const x_initial = elementCoords.x;
          const y_initial = elementCoords.y;
          return `
                @keyframes move-${i} {
                    0% { transform: translate(${x_initial}px, ${y_initial}px); }
                    100% { transform: translate(${x_initial + 300}px, ${y_initial}px); }
                }
                @-webkit-keyframes move-${i} {
                    0% {-webkit-transform:translate(${x_initial}px, ${y_initial}px)}
                    100% {-webkit-transform:translate(${x_initial + 300}px, ${y_initial}px)}
                }`;
        });
        setKeyframes(newKeyframes.join(''));
        
        setAnimationStyle({
          ...animationStyle,
          animationPlayState: 'running',
        });
    };
    


    return(
    <div>
        <style>{keyframes}</style>
        <div style={{position: 'fixed'}}>
            <button role="button" id="unpause"onClick={handleUnpauseClick}>Unpause</button>
            <button role="button" id="pause" onClick={handlePauseClick}>Pause</button>
            <button role="button" id="go" onClick={handleGoClick}>Go</button>
        </div>
        <svg id="Box-1" width={100} height={100} className='moveable' style={{...animationStyle, animationName: `move-${0}`,}}>
            <rect width={100} height={100} fill='red'></rect>
        </svg>
    </div>)
}

export default TestAppPOC;