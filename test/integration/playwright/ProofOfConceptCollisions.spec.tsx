// @ts-check
import React from 'react';
import TestAppPOC from './testAppPOC';
import { test, expect } from '@playwright/experimental-ct-react';
import '../../toBeCloseTo';


test("Move a Box to the right", async({ mount, page }) => {
    const component = await mount(<TestAppPOC />);
    await expect(component).toContainText("Pause");
    let boxRect = (await page.evaluate(() => { return document.querySelector(".moveable rect")?.getBoundingClientRect() }));
    const expectedX = boxRect?.left;
    await component.getByRole("button", {name: /Unpause/i}).click();

    await new Promise(resolve => setTimeout(resolve, 1100));

    await component.locator("#pause").click();

    boxRect = (await component.evaluate(() => { return document.querySelector(".moveable rect")?.getBoundingClientRect() } ));

    // Assert the position of the box
    expect(boxRect.left).toBeCloseTo(expectedX + 10, 2);
});