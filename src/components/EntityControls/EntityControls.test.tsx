import React, { useState, useEffect } from 'react';
import {createRoot} from 'react-dom/client'
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import {act} from 'react-dom/test-utils'
import Box from '../Box/Box';
import { queryByTestId } from '@testing-library/react';
import Vector from '../Physics/Vector';
import Direction from '../../Direction';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

interface Style {
    transform?: string;
}
  
const physics = new HTMLPhysics();

const usePhysicsStyle = (physics: HTMLPhysics, direction: number) => {
    const [style, setStyle] = useState<Style>({});
  
    useEffect(() => {
      const newStyle = physics.createMove(new Vector({direction: Direction.Right, speed: 10}));
      setStyle(newStyle);
    }, [physics, direction]);
  
    return style;
};

interface BoxWithPhysicsProps {
    direction: Direction;
    windowWidth: number;
    windowHeight: number;
}

  const BoxWithPhysics: React.FC<BoxWithPhysicsProps> = ({ direction, windowWidth, windowHeight, ...otherProps }) => {
    const style = usePhysicsStyle(physics, direction); // physics needs to be in scope
  
    return (
        <Box style={style} windowWidth={windowWidth} windowHeight={windowHeight} {...otherProps} />
    );
};

describe('Entity controls tests', () => {
    const TestApp = () => {
        return (
            <svg >

                <Box data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} />
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

        expect(queryByTestId(container, 'Box-1')).toBeTruthy();
    })
    
});