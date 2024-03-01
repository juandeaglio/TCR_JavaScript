import { COLLISTION_TEST_GAP, DEFAULT_BOX_WIDTH, TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TestApp from './test_index'
import { HTMLPhysics } from '../../src/components/Physics/HTMLPhysics';
import EntityControls from '../../src/components/EntityControls/EntityControls'
import Direction from '../../src/Direction';
import { pause, unpause } from '../../src/systems/TestSimulation'

const MAX_HEIGHT = TEST_WINDOW_HEIGHT;
const MAX_WIDTH = TEST_WINDOW_WIDTH;

describe('Entity controls tests', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    })

    test('Test move a Box to the right', () => {
        const { getByTestId } = render(<TestApp />);
        let boxElement: HTMLElement = getByTestId('Box-1');
        const expectedX: number = boxElement?.getBoundingClientRect().left + 10;
        const physics: HTMLPhysics = new HTMLPhysics();
        const entityController: EntityControls = new EntityControls(physics);
        entityController.move(boxElement, Direction.Right);
        screen.debug();
        unpause(boxElement);
        screen.debug();
        jest.advanceTimersByTime(1000); 
        boxElement = getByTestId('Box-1');
        pause(boxElement)
        screen.debug();
        boxElement = getByTestId('Box-1');
        expect(boxElement?.getBoundingClientRect().left).toBeCloseTo(expectedX);
    });
});

