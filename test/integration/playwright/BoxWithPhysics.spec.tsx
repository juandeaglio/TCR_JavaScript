// @ts-check
import React from 'react';
import TestApp from './testApp';
import { test, expect } from '@playwright/experimental-ct-react';


test("Move a Box to the right", async({ mount, page }) => {
    const component = await mount(<TestApp />);
    await expect(component).toContainText("Pause");
    const expectedX = (await page.evaluate(() => { return document.querySelector(".moveable")?.getBoundingClientRect().left } ) || 0);
    await component.getByRole("button", {name: /Unpause/i}).click();

    await page.waitForTimeout(1000);

    await component.locator("#pause").click();

    let boxRect = (await component.evaluate(() => { return document.querySelector(".moveable")?.getBoundingClientRect() } ));

    // Assert the position of the box
    expect(boxRect.left).toBeCloseTo(expectedX+10, 0.5);
});