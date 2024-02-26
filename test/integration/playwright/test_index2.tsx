import React from 'react';
import { BoxWithPhysics } from '../../../src/components/Box/BoxWithPhysics'
import { HTMLPhysics } from '../../../src/components/Physics/HTMLPhysics'
import Direction from '../../../src/Direction';
import './testStyles.css'
import { TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';


const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = TEST_WINDOW_HEIGHT;
const MAX_HEIGHT: number = TEST_WINDOW_WIDTH;

const TestApp2 = () => (
    <div>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} />
            <BoxWithPhysics data-testid='Box-2' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} x={MAX_WIDTH/2 + 100} />
        </svg>
    </div>
);
export default TestApp2;