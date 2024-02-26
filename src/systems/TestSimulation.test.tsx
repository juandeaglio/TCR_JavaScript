import React from 'react';
import { unpause, pause, getAllMoveables, getAllPaused} from './TestSimulation';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('unpauses multiple moveable nodes', () => {
    const { container } = render(
        <div>
            <a className='moveable pause-animation' data-test-id="a-1"></a>
            <a> Hello World </a>
            <a className='moveable pause-animation' data-test-id="a-2"></a>
        </div>
        );
    let elements: HTMLCollectionOf<Element> = getAllPaused(container);
    expect(elements.length).toBe(2);
    unpause(elements);
    elements = getAllPaused(container);
    expect(elements.length).toBe(0);
});

test('pauses multiple moveable nodes', () => {
    const { container } = render(
        <div>
            <a className='moveable' data-test-id="a-1"></a>
            <a> Hello World </a>
            <a className='moveable' data-test-id="a-2"></a>
        </div>
        );
    let elements: HTMLCollectionOf<Element> = getAllMoveables(container);
    let pausedElements: HTMLCollectionOf<Element> = getAllPaused(container);
    expect(pausedElements.length).toBe(0)
    pause(elements);
    elements = getAllPaused(container);
    expect(elements.length).toBe(2)
});

test('unpauses all moveable nodes', () => {
    const { container } = render(
        <div>
            <a className='moveable pause-animation' data-test-id="a-1"></a>
            <a> Hello World </a>
            <a className='moveable pause-animation' data-test-id="a-2"></a>
        </div>
        );
    let elements: HTMLCollectionOf<Element> = getAllMoveables(container);
    expect(elements.length).toBe(2)
    unpause(elements);
    elements = getAllPaused(container);
    expect(elements.length).toBe(0)
});

test('pauses all moveable nodes', () => {
    const { container } = render(
        <div>
            <a className='moveable' data-test-id="a-1"></a>
            <a> Hello World </a>
            <a className='moveable' data-test-id="a-2"></a>
        </div>
        );
    let elements: HTMLCollectionOf<Element> = getAllMoveables(container);
    let pausedElements: HTMLCollectionOf<Element> = getAllPaused(container);
    expect(pausedElements.length).toBe(0)
    pause(elements);
    elements = getAllPaused(container);
    expect(elements.length).toBe(2)
});