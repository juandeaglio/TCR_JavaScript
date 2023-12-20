import { test, expect } from '@playwright/test';
import '../../toBeCloseTo';

const MAX_HEIGHT = 1024;
const MAX_WIDTH = 1024;

const elementSelector = '[data-testid="Box-1"]';
test.describe('Entity controls tests', () => {
    test('Test move a Box to the right', async ({ page }) => {
        // Navigate to the page where your component is rendered
        // Replace YOUR_COMPONENT_URL with the actual URL
        await page.goto('http://localhost:3000');

        // Optionally, you can set the viewport size if necessary
        await page.setViewportSize({ width: MAX_WIDTH, height: MAX_HEIGHT });

        // Perform actions similar to what you did with Jest/Enzyme
        // For instance, click a button that triggers the movement
        // await page.click('selector-for-button');
        let boxRect = await page.$eval(elementSelector, (box) => {
            return box.getBoundingClientRect();
        });


        let boxElement = await page.$eval(elementSelector, (box) =>{
            return box;
        });

        // Define the expected X and Y coordinates after the box moves
        const expectedX = boxRect.left; // Adjust as per your expectation
        const expectedY = boxRect.top;/* Your expected Y coordinate */

        console.log("beforeX move: ", expectedX);

        await page.evaluate(() => {
            document.querySelector('.move-90').classList.remove('pause-animation');
        });
        // You can wait for a specific amount of time if needed
        await page.waitForTimeout(1000);
        // Query for the element and perform assertions
        boxElement = await page.$eval(elementSelector, (box) =>{
            return box;
        });
        // Check if the element exists
        expect(boxElement).not.toBeNull();

        boxRect = await page.$eval(elementSelector, (box) => {
            return box.getBoundingClientRect();
        });

        // Assert the position of the box
        expect(boxRect.left).toBeCloseTo(expectedX + 10, 0.01);
        expect(boxRect.top).toBeCloseTo(expectedY, 0.1);
    });
});