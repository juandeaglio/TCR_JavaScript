import React from 'react';
import {createRoot} from 'react-dom/client'
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import {act} from 'react-dom/test-utils'
import Box from '../Box/Box';
import { queryByTestId } from '@testing-library/react';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;


describe('Entity controls tests', () => {
    const physics = new HTMLPhysics();
    const TestApp = () => {
        return (
            <svg >
                <Box data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} />
            </svg>
        )
    }
    
    test('Test move a Box to the right', () => {
        const MAX_WIDTH = 1024;
        const MAX_HEIGHT = 1024;

        const box = <TestApp />;
        const container = document.createElement('div');

        const root = createRoot(container);
        act(() => root.render(box));

        expect(queryByTestId(container, 'Box-1')).toBeTruthy();
    })
    
});