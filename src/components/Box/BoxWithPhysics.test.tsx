import React from 'react';
import { render } from '@testing-library/react';
import { BoxWithPhysics } from '../Box/BoxWithPhysics';
import '@testing-library/jest-dom'


  
describe('BoxWithPhysics tests', () => {
    beforeEach(() => {
    })

    test('Make a Box with Physics decorations', () => {
        const { container } = render(
            <div>
                <BoxWithPhysics id="Box-1" data-testid='Box-1'/>
            </div>
        );
        expect(container.querySelector('#Box-1')).toBeInTheDocument();
    })

    afterEach(() => {
    })
});