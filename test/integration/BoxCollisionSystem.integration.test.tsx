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

test('A box exists', () => {
    render(<TestApp />);
    const box = screen.getByRole('box');
    expect(box).toBeInTheDocument();
});

export default TestApp;