// @ts-check

import { test, expect, Locator } from '@playwright/test';
import '../../toBeCloseTo';
import { unpause, pause } from '../../../src/systems/TestSimulation';
import { COLLISTION_TEST_GAP, DEFAULT_BOX_WIDTH, TEST_WINDOW_HEIGHT, TEST_WINDOW_WIDTH } from './default_test_sizes';


const MAX_HEIGHT = TEST_WINDOW_HEIGHT;
const MAX_WIDTH = TEST_WINDOW_WIDTH;

test.describe('Entity controls tests', () => {
    test('Test move a Box to the right', async ({ page }) => {
        page.locator(".moveable")
        await page.goto('http://localhost:3000/');

        await page.setViewportSize({ width: MAX_WIDTH, height: MAX_HEIGHT });

        const expectedX = (await page.evaluate(() => { return document.querySelector(".moveable")?.getBoundingClientRect().left } ) || 0);
        await page.getByRole("button", {name: 'unpause'}).click();



        await page.waitForTimeout(1000);

        await page.getByRole("button", {name: 'pause'}).filter({hasNotText: 'unpause'}).click();

        let boxRect = (await page.evaluate(() => { return document.querySelector(".moveable")?.getBoundingClientRect() } ));


        // Assert the position of the box
        expect(boxRect.left).toBeCloseTo(expectedX+10, 0.5);
    });
});