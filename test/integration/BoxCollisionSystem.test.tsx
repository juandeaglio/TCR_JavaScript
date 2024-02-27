import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Box from '../../src/components/Box/Box'
import '@testing-library/jest-dom';
import CollisionSystem from '../../src/components/CollisionSystem/CollisionSystem';
import {HTMLPhysics} from '../../src/components/Physics/HTMLPhysics';
import Vector from '../../src/components/Physics/Vector';
import Direction from '../../src/Direction';
import EntityControls from '../../src/components/EntityControls/EntityControls';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

type TestAppProps = {
    direction?: number,
    collisionSystem?: React.FC,
    screenWidth?: number,
    screenHeight?: number
}

const TestApp: React.FC<TestAppProps> = ({ direction, collisionSystem, screenWidth = MAX_WIDTH, screenHeight = MAX_HEIGHT }) => {
    const width = screenWidth || MAX_WIDTH;
    const height = screenHeight || MAX_HEIGHT;


    // Assuming Box expects an object with windowWidth and widthHeight
    const boxProps = {
        windowWidth: width,
        windowHeight: height,
    };

    return (
        <div>
            {CollisionSystem && <CollisionSystem />}
            <svg width={screenWidth} height={screenHeight}>
                <Box x={screenWidth/2} y={screenHeight/2} {...boxProps} />
            </svg>
        </div>
    );
};

test('A box exists in the center of the screen', () => {
    render(<TestApp direction={0} />);
    const box = screen.getByRole('box');
    expect(box).toBeInTheDocument();

    const centerX = MAX_WIDTH / 2;
    const centerY = MAX_HEIGHT / 2;

    expect(box).toHaveAttribute('x', centerX.toString());
    expect(box).toHaveAttribute('y', centerY.toString());
});

test('A box that does not move and doesnt collide', () => {
    render(<TestApp collisionSystem={CollisionSystem} />);
    const box = screen.getByRole('box');
    setTimeout(() => {}, 1000);
    const collisionCount = box.getAttribute('data-collision-count');
    expect(collisionCount).toBe('0');
});

test('A box that moves right for 1 second and then stops', () => {
    jest.useFakeTimers();
    render(<TestApp direction={Direction.Right} collisionSystem={CollisionSystem} />);
    const box = screen.getByRole('box');
    const physics = new HTMLPhysics();
    act(() => {

        jest.advanceTimersByTime(1000);
    })
});

export default TestApp;