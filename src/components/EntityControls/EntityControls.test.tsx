import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client'
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import { render } from '@testing-library/react';
import { getByTestId, queryByTestId } from '@testing-library/react';
import Direction from '../../Direction';
import { BoxWithPhysics } from '../Box/BoxWithPhysics';
import '@testing-library/jest-dom'
import EntityControls from './EntityControls';
import { getAllMoveables, getAllPaused, unpause, pause } from '../../systems/TestSimulation';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

const expectMoveable = (element: HTMLElement) =>
{
    expect(element.classList.toString()).toContain('moveable');
}

const createMockElement = (initialX = 0, initialY = 0) => {
    const mockElement: any = {
        getAttribute: jest.fn().mockImplementation((attribute) => 
        {
            if (attribute === 'x') {
                return initialX;
            } else if (attribute === 'y') {
                return initialY;
            }
            // Handle other attributes if needed
            return null;
        }),
        animate: jest.fn(),
      // Add any other properties or methods your code relies on
      // Example: setAttribute: jest.fn(),
    };
    return mockElement;
};
  
describe('Entity controls tests', () => {
    const physics = new HTMLPhysics();
    const controls: EntityControls = new EntityControls(physics);
    let element: HTMLElement;
    beforeEach(() => {
        jest.useFakeTimers();
        element = createMockElement(0, 0);   
    })

    test('Move an HTMLElement', () => {
        controls.move(element, Direction.Right)
        expect(element.animate).toHaveBeenCalled();
    })

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    })
});