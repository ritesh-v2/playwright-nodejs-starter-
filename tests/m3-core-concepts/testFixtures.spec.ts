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

test('Verify login using the pop up', async ({ context }) => {

    const page = await context.newPage()

    await page.goto('https://chatgpt.com/')

    await page.getByRole('button',{name : 'Log in'}).click();

    // const [popup] = await Promise.all([
    //     context.waitForEvent('page'),
    //     page.click('Continue with Google')
    // ]);

    await page.getByRole('button',{name:'Continue with Google'}).click()

    await page.getByText('Email or phone').fill('testststest@gmail.com')

    await page.getByRole('button',{name:'Next'}).click()

    expect (page.getByRole('checkbox',{name : 'Show password'})).not.toBeChecked();

})

test('Verify local host is working', async ({ page }) => {

    await page.goto('http://localhost:3000/')

    await page.close()
    
})
