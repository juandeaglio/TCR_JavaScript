import React, { useState, useEffect } from 'react';
import {createRoot} from 'react-dom/client'
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import {act} from 'react-dom/test-utils'
import { queryByTestId } from '@testing-library/react';
import Vector from '../Physics/Vector';
import Direction from '../../Direction';
import { BoxWithPhysics } from '../Box/BoxWithPhysics';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

interface Style {
    transform?: string;
}
  
export const physics = new HTMLPhysics();

export const usePhysicsStyle = (physics: HTMLPhysics, direction: number) => {
    const [style, setStyle] = useState<Style>({});
    const [move, setMoving] = useState<string>();
  
    useEffect(() => {
      const newStyle = physics.createMove(new Vector({direction: Direction.Right, speed: 10}));
      setStyle(newStyle);
      const movingDirection = 'move-' + parseFloat(Direction.Right.toFixed(3)).toString();
      setMoving(movingDirection);
    }, [physics, direction]);
  
    return [style, move];
};

describe('Entity controls tests', () => {
    const TestApp = () => {
        return (
            <svg >
                <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} />
            </svg>
        )
    }
    beforeEach(() => {
        jest.useFakeTimers();
    })

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    })

    test('Test move a Box to the right', () => {
        const box = <TestApp />;
        const container = document.createElement('div');

        const root = createRoot(container);
        act(() => root.render(box));
        jest.advanceTimersByTime(1000);

        const boxElement = queryByTestId(container, 'Box-1');
        expect(boxElement).toBeTruthy();

        expect(boxElement.classList.toString()).toContain('move-90');
    })
    
});