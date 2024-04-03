import React from 'react';
import { unpause, pause, getAllMoveables, getAllPaused} from './TestSimulation';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BoxWithPhysics } from '../components/Box/BoxWithPhysics';


describe('Simulation control tests', () => {
    beforeEach(() => {
    })
    test('unpauses multiple moveable nodes', () => {
        const { container } = render(
            <div>
                <BoxWithPhysics id="Box-1" data-testid='Box-1'/>
            </div>
        );
        let elements: HTMLCollectionOf<Element> = getAllPaused(container);
        expect(elements.length).toBe(1);
        unpause(elements);
        elements = getAllPaused(container);
        expect(elements.length).toBe(0);
    });

    test('pauses multiple moveable nodes', () => {
        const { container } = render(
            <div>
                <BoxWithPhysics id="Box-1" data-testid='Box-1'/>
            </div>
        );
        let elements: HTMLCollectionOf<Element> = getAllMoveables(container);
        let pausedElements: HTMLCollectionOf<Element> = getAllPaused(container);
        unpause(pausedElements);
        expect(pausedElements.length).toBe(0);
        pause(elements);
        elements = getAllPaused(container);
        expect(elements.length).toBeGreaterThan(0);
    });

    test('unpauses all moveable nodes', () => {
        const { container } = render(
            <div>
                <BoxWithPhysics id="Box-1" data-testid='Box-1'/>
            </div>
        );
        let elements: HTMLCollectionOf<Element> = getAllMoveables(container);
        expect(elements.length).toBeGreaterThan(0)
        unpause(elements);
        elements = getAllPaused(container);
        expect(elements.length).toBe(0);
    });

    test('pauses all moveable nodes', () => {
        const { container } = render(
            <div>
                <BoxWithPhysics id="Box-1" data-testid='Box-1'/>
            </div>
        );
        let elements: HTMLCollectionOf<Element> = getAllMoveables(container);
        let pausedElements: HTMLCollectionOf<Element> = getAllPaused(container);
        expect(pausedElements.length).toBe(0);
        pause(elements);
        elements = getAllPaused(container);
        expect(elements.length).toBeGreaterThan(0);
    });
});