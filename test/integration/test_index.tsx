import React from 'react';
import { BoxWithPhysics } from '../../src/components/Box/BoxWithPhysics';
import { HTMLPhysics } from '../../src/components/Physics/HTMLPhysics';
import Direction from '../../src/Direction';
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';
import { unpause, pause } from '../../src/systems/TestSimulation'; // Adjust the path as needed



const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = TEST_WINDOW_WIDTH;
const MAX_HEIGHT: number = TEST_WINDOW_HEIGHT;

const TestApp = () => (
    <div>
        <button id="unpause"></button>
        <button id="pause"></button>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} x={0} y={0} />
        </svg>
    </div>
);

export default TestApp;