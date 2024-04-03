import React from 'react';
import { HTMLPhysics } from '../Physics/HTMLPhysics';
import { render } from '@testing-library/react';
import Direction from '../../Direction';
import { BoxWithPhysics } from '../Box/BoxWithPhysics';
import '@testing-library/jest-dom'
import EntityControls from './EntityControls';
import { getAllMoveables, getAllPaused, unpause, pause } from '../../systems/TestSimulation';
import Vector from '../Physics/Vector';
import Pair from '../../Pair';
import { transform } from '@babel/core';

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

const expectMoveable = (element: HTMLElement) =>
{
    expect(element.classList.toString()).toContain('moveable');
}

describe('Entity controls tests', () => {
    const physics = new HTMLPhysics();
    const controls: EntityControls = new EntityControls(physics);
    let element: HTMLElement;
    beforeEach(() => {
        jest.useFakeTimers();
    })

    test('Move an HTMLElement', () => {
        const controls: EntityControls = new EntityControls(physics);
        var style = physics.createKeyframes(new Pair(0,0), new Vector({direction: Direction.Right, speed: 100}))[1];
        const { container } = render(
            <div>
                <BoxWithPhysics id="Box-1" data-testid='Box-1' style={}/>
            </div>
        );
        controls.move(element, Direction.Right)
        expect(element.animate).toHaveBeenCalled();
    })

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    })
});