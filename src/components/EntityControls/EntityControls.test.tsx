import React from 'react';
import {createRoot} from 'react-dom/client'
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import {act} from 'react-dom/test-utils'
import { getByTestId, queryByTestId } from '@testing-library/react';
import Direction from '../../Direction';
import { BoxWithPhysics } from '../Box/BoxWithPhysics';
import '@testing-library/jest-dom'
import EntityControls from './EntityControls';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

const expectMoveable = (element: HTMLElement) =>
{
    expect(element.classList.toString()).toContain('moveable');
}

describe('Entity controls tests', () => {
    const physics = new HTMLPhysics();
    const TestApp = () => {
        return (
            <svg >
                <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} x={10} y={10} />
            </svg>
        )
    }
    beforeEach(() => {
        jest.useFakeTimers();
    })

    test('Decorate Box as moveable', () => {
        const box = <TestApp />;
        const container = document.createElement('div');

        const root = createRoot(container);
        act(() => root.render(box));
        jest.advanceTimersByTime(1000);

        const boxElement = queryByTestId(container, 'Box-1');
        expect(boxElement.classList.toString()).toContain('move-90');
        expectMoveable(boxElement);
    })

    test('Animate Box', () => {
        const box = <TestApp />;
        const container = document.createElement('div');

        const root = createRoot(container);
        act(() => root.render(box));
        const physics = new HTMLPhysics();
        const controller = new EntityControls(physics);
        const boxElement = document.querySelector('[data-testid=Box-1]')
        controller.move(boxElement, Direction.Right);
        jest.advanceTimersByTime(1000);
        
        const actualElement: HTMLElement = getByTestId(container, 'Box-1');
        expect(actualElement).toContain(`transform: translate(`)
    })

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    })
});