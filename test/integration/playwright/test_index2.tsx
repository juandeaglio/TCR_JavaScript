import React from 'react';
import { BoxWithPhysics } from '../../../src/components/Box/BoxWithPhysics'
import { HTMLPhysics } from '../../../src/components/Physics/HTMLPhysics'
import Direction from '../../../src/Direction';
import './testStyles.css'

const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = 1024;
const MAX_HEIGHT: number = 1024;

const TestApp2 = () => (
    <div>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} />
        </svg>
    </div>
);
export default TestApp2;