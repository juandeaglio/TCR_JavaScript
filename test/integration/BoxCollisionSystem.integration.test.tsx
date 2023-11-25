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
        <Box/>
        </div>
    );
};

test('A box exists', () => {
    const container = render(<TestApp />);
    expect(container.getByRole('box')).toBeInTheDocument();
});

export default TestApp;