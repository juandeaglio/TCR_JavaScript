import React from 'react';
import {createRoot} from 'react-dom/client'
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import {act} from 'react-dom/test-utils'
import { queryByTestId } from '@testing-library/react';
import Direction from '../../Direction';
import { BoxWithPhysics } from '../Box/BoxWithPhysics';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

describe('Entity controls tests', () => {
    const physics = new HTMLPhysics();
    const TestApp = () => {
        return (
            <svg >
                <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} />
            </svg>
        )
    }
    beforeEach(() => {
        jest.useFakeTimers();
    })

    test('Test move a Box to the right', () => {
        const box = <TestApp />;
        const container = document.createElement('div');

        const root = createRoot(container);
        act(() => root.render(box));
        jest.advanceTimersByTime(1000);

        const boxElement = queryByTestId(container, 'Box-1');
        expect(boxElement.classList.toString()).toContain('move-90');
    })

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    })
});