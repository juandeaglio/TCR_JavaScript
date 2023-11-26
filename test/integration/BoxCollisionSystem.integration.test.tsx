import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../../src/components/Box/Box'
import '@testing-library/jest-dom';


const TestApp = () => {
    // creates an svg element that is size of screen with a box react functional component within
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return (
        <svg width={screenWidth} height={screenHeight}>
            <Box />
        </svg>
    );
};

test('A box exists in the center of the screen', () => {
    render(<TestApp />);
    const box = screen.getByRole('box');
    expect(box).toBeInTheDocument();

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    expect(box).toHaveAttribute('x', centerX.toString());
    expect(box).toHaveAttribute('y', centerY.toString());
});

export default TestApp;