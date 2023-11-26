import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../../src/components/Box/Box'
import '@testing-library/jest-dom';



enum Direction {
    None = 0 % 5,
    Up = 1 % 5,
    Right = 2 % 5,
    Down = 3 % 5,
    Left = 4 % 5,
}

type TestAppProps = {
    direction: Direction;
};

const TestApp: React.FC<TestAppProps> = ({ direction }) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Assuming Box expects an object with windowWidth and widthHeight
    const boxProps = {
        windowWidth: screenWidth,
        widthHeight: screenHeight,
    };

    return (
        <svg width={screenWidth} height={screenHeight}>
            {Box(boxProps)}
        </svg>
    );
};

test('A box exists in the center of the screen', () => {
    render(<TestApp direction={0} />);
    const box = screen.getByRole('box');
    expect(box).toBeInTheDocument();

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    expect(box).toHaveAttribute('x', centerX.toString());
    expect(box).toHaveAttribute('y', centerY.toString());
});

test('A box moves from center to the right edge of the screen', () => {
    // dependency injection of a box into TestApp, one with a move right velocity that reaches the right edge of the screen in 1 second    
    render(<TestApp direction={'right'} />);
    const box = screen.getByRole('box');
    expect(box).toBeInTheDocument();

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    expect(box).toHaveAttribute('x', (centerX + 10).toString());
    expect(box).toHaveAttribute('y', centerY.toString());
});

export default TestApp;