import React from 'react';
import Direction from '../../Direction';
import EntityControls from './EntityControls';
import { HTMLPhysics } from '../Physics/HTMLPhysics';

describe('Entity controls tests', () => {
    test('Test move a Box to the right', () => {
        const physics: HTMLPhysics = new HTMLPhysics();
        const entityControls: EntityControls = new EntityControls(physics);
        const box: HTMLElement = document.createElement('rect');

        entityControls.move(Direction.Right).speed(10);
    })
});