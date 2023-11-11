import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../../src/components/Box/Box'
import CollisionSystem from '../../src/systems/CollisionSystem';
import '@testing-library/jest-dom';


const TestApp = () => {
    return (
        <div>
        <p>Test environment for Box component</p>
        {/* Render Box component with necessary props or context */}
        <Box data-testid="box-1"/>
        </div>
    );
};

test('A box collides with edge of the screen.', () => {
    render(<TestApp />);
    const boxElement = screen.getByTestId('box-1');
});