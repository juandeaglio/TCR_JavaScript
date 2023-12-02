import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../../src/components/Box/Box'
import '@testing-library/jest-dom';
import { number } from 'prop-types';
import CollisionSystem from '../../src/components/CollisionSystem/CollisionSystem';


const max_width = 1024;
const max_height = 1024;

enum Direction {
    None = 0,
    Up = 1,
    Right = 2,
    Down = 3,
    Left = 4
}

function normalizeDirection(direction: number): number {
    direction = direction % 5;
    return Direction[Direction[direction] as keyof typeof Direction];
}

type TestAppProps = {
    direction: number,
    collisionSystem?: React.FC,
    screenWidth?: number,
    screenHeight?: number
}

const TestApp: React.FC<TestAppProps> = ({ direction, collisionSystem, screenWidth, screenHeight }) => {
    const width = screenWidth || max_width;
    const height = screenHeight || max_height;


    // Assuming Box expects an object with windowWidth and widthHeight
    const boxProps = {
        windowWidth: width,
        windowHeight: height,
    };

    return (
        <div>
            {CollisionSystem && <CollisionSystem />}
            <svg width={screenWidth} height={screenHeight}>

                {Box(boxProps)}
            </svg>
            
        </div>
    );
};

test('A box exists in the center of the screen', () => {
    render(<TestApp direction={0} />);
    const box = screen.getByRole('box');
    expect(box).toBeInTheDocument();

    const centerX = max_width / 2;
    const centerY = max_height / 2;

    expect(box).toHaveAttribute('x', centerX.toString());
    expect(box).toHaveAttribute('y', centerY.toString());
});

test('A box that does not move and doesnt collide', () => {
    // dependency injection of a box into TestApp, one with a move right velocity that reaches the right edge of the screen in 1 second
    render(<TestApp direction={Direction.Right} collisionSystem={CollisionSystem} />);
    const box = screen.getByRole('box');
    setTimeout(() => {}, 1000);
});

export default TestApp;