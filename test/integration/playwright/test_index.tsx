import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BoxWithPhysics } from '../../../src/components/Box/BoxWithPhysics'
import { HTMLPhysics } from '../../../src/components/Physics/HTMLPhysics'
import Direction from '../../../src/Direction';
import './testStyles.css'
import TestApp2 from './test_index2'
import './default_test_sizes'
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';
import { unpause, pause } from '../../../src/systems/TestSimulation'; // Adjust the path as needed
import EntityControls from '../../../src/components/EntityControls/EntityControls';
import { findDOMNode } from 'react-dom';

const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = TEST_WINDOW_WIDTH;
const MAX_HEIGHT: number = TEST_WINDOW_HEIGHT;


const TestApp = () => {
    const moveables = document.getElementsByClassName("moveable");
    const entityControls: EntityControls = new EntityControls(physics);
    const elRef = useRef<Element>(null);

    useEffect(() =>
    {   
        entityControls.move(elRef.current as Element, Direction.Right);
    }, [])
    function handleUnpauseClick(){
        unpause(moveables);
    };
    
    function handlePauseClick(){
        pause(moveables);
    };

  

    return(
    <div>
        <button id="unpause"onClick={handleUnpauseClick}>Unpause</button>
        <button id="pause" onClick={handlePauseClick}> Pause </button>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics id="Box-1" data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} x={0} y={0} ref={elRef}> </BoxWithPhysics>
        </svg>
    </div>)
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <TestApp />
    },
    {
        path: "test_2/",
        element: <TestApp2 />
    }
])
const portalDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(portalDiv);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


export default {MAX_WIDTH, MAX_HEIGHT};