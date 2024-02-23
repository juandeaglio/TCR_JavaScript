import React from 'react';
import { unpause, pause } from './TestSimulation';
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
    let elements: HTMLCollectionOf<Element> = container.getElementsByClassName('pause-animation');
    expect(elements.length).toBe(2)
    unpause(elements);
    elements = container.getElementsByClassName('pause-animation');
    expect(elements.length).toBe(0)
});

test('pauses multiple moveable nodes', () => {
    const { container } = render(
        <div>
            <a className='moveable' data-test-id="a-1"></a>
            <a> Hello World </a>
            <a className='moveable' data-test-id="a-2"></a>
        </div>
        );
    let elements: HTMLCollectionOf<Element> = container.getElementsByClassName('moveable');
    let pausedElements: HTMLCollectionOf<Element> = container.getElementsByClassName('pause-animation');
    expect(pausedElements.length).toBe(0)
    pause(elements);
    elements = container.getElementsByClassName('pause-animation');
    expect(elements.length).toBe(2)
});