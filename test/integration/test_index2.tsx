import React from 'react';
import { BoxWithPhysics } from '../../../src/components/Box/BoxWithPhysics'
import { HTMLPhysics } from '../../../src/components/Physics/HTMLPhysics'
import Direction from '../../../src/Direction';
import './testStyles.css'
import { COLLISTION_TEST_GAP, DEFAULT_BOX_WIDTH, TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';


const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = TEST_WINDOW_HEIGHT;
const MAX_HEIGHT: number = TEST_WINDOW_WIDTH;
const translation = "translate(".concat((DEFAULT_BOX_WIDTH + COLLISTION_TEST_GAP).toFixed(1)).concat(", 0)");
const TestApp2 = () => (
    <div>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} />
            <BoxWithPhysics data-testid='Box-2' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Left} physics={physics} x={100} />
        </svg>
    </div>
);
export default TestApp2;