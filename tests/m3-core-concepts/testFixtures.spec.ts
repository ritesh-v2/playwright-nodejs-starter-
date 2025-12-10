import {test , expect, chromium } from '@playwright/test'

test('Verify Checking with the browser object', async ({}) => {

    const browser = await chromium.launch()

    const page = await browser.newPage()

    await page.goto('https://www.whatsmybrowser.org/')

    await expect(page).toHaveTitle('What browser am I using?')
    
})

test('Verify Checking with the without the browser object', async ({ page }) => {

    await page.goto('https://www.whatsmybrowser.org/')

    await expect(page).toHaveTitle('What browser am I using?')
    
})

test('Adding the code for the browser ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://www.whatsmybrowser.org/');

    await expect(page).toHaveTitle('What browser am I using?')
    
})

test('Verify using the context', async ({ context })=> {

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto('https://www.whatsmybrowser.org/')

    await page2.goto('http://windows.microsoft.com/en-us/internet-explorer/download-ie')


})
