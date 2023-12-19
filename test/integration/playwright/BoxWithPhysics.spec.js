import { test, expect } from '@playwright/test';

const MAX_HEIGHT = 1024;
const MAX_WIDTH = 1024;

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

        // You can wait for a specific amount of time if needed
        await page.waitForTimeout(1000);

        // Query for the element and perform assertions
        const boxElement = await page.$('[data-testid="Box-1"]');
        
        // Check if the element exists
        expect(boxElement).not.toBeNull();

        // Get and assert on the classList of the element
        const classList = await boxElement.getAttribute('class');

        const boxRect = await page.$eval('[data-testid="Box-1"]', (box) => {
            return box.getBoundingClientRect();
        });

        // Define the expected X and Y coordinates after the box moves
        const expectedX = 522; // Adjust as per your expectation
        const expectedY = 512;/* Your expected Y coordinate */

        // Assert the position of the box
        //expect(boxRect.left).toBeCloseTo(expectedX);
        //expect(boxRect.top).toBeCloseTo(expectedY);
    });
});