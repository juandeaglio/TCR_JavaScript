import { test, expect, Locator } from '@playwright/test';
import '../../toBeCloseTo';
import { unpause, pause } from '../../../src/systems/TestSimulation';
import { COLLISTION_TEST_GAP, DEFAULT_BOX_WIDTH, TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';


const MAX_HEIGHT = TEST_WINDOW_HEIGHT;
const MAX_WIDTH = TEST_WINDOW_WIDTH;

test.describe('Entity controls tests', () => {
    test('Test move a Box to the right', async ({ page }) => {
        
        const elementSelector = '[data-testid="Box-1"]';
        await page.goto('http://localhost:3000/');

        await page.setViewportSize({ width: MAX_WIDTH, height: MAX_HEIGHT });

        let boxRect = await page.$eval(elementSelector, (box) => {
            return box.getBoundingClientRect();
        });

        const expectedX = boxRect.left + 10;
        const elements: HTMLCollectionOf<Element> = await page.evaluate( () => 
        {
            return document.getElementsByClassName('moveable')
        });

        unpause(elements);

        await page.waitForTimeout(1000);

        pause(elements);

        boxRect = await page.$eval(elementSelector, (box) => {
            return box.getBoundingClientRect();
        });

        // Assert the position of the box
        expect(boxRect.left).toBeCloseTo(expectedX, 0.5);
    });

    // test('Collide with two boxes', async ({ page }) => {
    //     const elementSelector = '[data-testid="Box-2"]';
    //     await page.goto('http://localhost:3000/test_2');

    //     await page.setViewportSize({ width: MAX_WIDTH, height: MAX_HEIGHT });

    //     let boxRect = await page.$eval(elementSelector, (box) => {
    //         return box.getBoundingClientRect();
    //     });

    //     const expectedX = DEFAULT_BOX_WIDTH + COLLISTION_TEST_GAP;
    //     // Assert the position of the box
    //     // TODO: Next, create unit tests for having an offset initial position via transform: translate(x,y) styling.
    //     expect(boxRect.left).toBeCloseTo(expectedX, 0.5);
    // });
});