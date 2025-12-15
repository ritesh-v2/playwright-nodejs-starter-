//Generic assertions are Where these are used in real projects Mostly used for:API responsesUtility functions Config validations
//These do NOT auto-retry
// test('Verif the APIs', async ({ page }) => {

//     const response = await request.get('/users/123');
//     const body = await response.json();

//     expect(response.status()).toBe(200);
//     expect(body.name).toEqual('Ritesh');
//     expect(body.isActive).toBeTruthy();
    
// })

import { test, expect } from '@playwright/test'

test('Verify the generic simple assertion ', async ({ page }) => {
    
    expect('a').toEqual('a');
    expect(2).toBeGreaterThan(1);
    
})

//Web-first assertions (UI superpower) - These are UI-smart assertions designed for browsers. - These auto-retry
test('Verify the web first assertions', async ({ page }) => {

    await page.goto('http://localhost:3000/')

    await expect(page).toHaveTitle('Credit Association')

    await expect(page).toHaveURL('http://localhost:3000/')

    
})

test('Verify all the elements are visible and editable', async ({ page }) => {

    await page.goto('http://localhost:3000/')

    await expect(page).toHaveTitle('Credit Association')

    await expect(page).toHaveURL('http://localhost:3000/')

    await expect(page.getByLabel('First name')).toBeVisible();

    await expect(page.getByLabel('First name')).toBeEditable();

    await expect(page.getByRole('button',{name:'Register'})).toBeEnabled();

    await page.getByRole('button',{name:'Register'}).click();

    await expect(page.getByText('Valid first name is required')).toHaveText('Valid first name is required');

    await expect(page.getByText('Valid last name is required')).toHaveText('Valid last name is required');

    await expect(page.getByText('Please enter a valid email address')).toHaveText('Please enter a valid email address')

})

test('Verify the Login failed scenario', async ({ page }) => {

    await page.goto('https://www.linkedin.com/')

    await page.waitForTimeout(5000);

    // await page.getByRole('button',{name:'Login'}).click();

    const loginButton = page.getByRole('link',{name:'Login',exact:true});

    const accessAccount = page.getByRole('link', { name: 'Access account',exact:true });

    const memberLogin = page.getByRole('link',{name:'Member login',exact : true})

    if(await loginButton.isVisible()){

        await loginButton.click();

    }else if (await accessAccount.isVisible()) {

         await accessAccount.click()

    } else if (await memberLogin.isVisible()) {
        await memberLogin.click();
    } else {

        await page.locator('[data-test-id="home-hero-sign-in-cta"]').click();
        console.log('Successfully Executed till here')
    }

    // await page.getByRole('link', { name: 'Access account' }).click();

    // await page.getByRole('link',{name:'Login'}).click()

    await page.getByLabel('Email or phone').fill('testtesttest@gmail.com');

    await page.getByRole('textbox',{name:'Password'}).fill('Tetshejjsijsnse@@')

    await page.getByRole('button',{name : 'Sign in',exact:true}).click()

   // await expect(page.getByText('Wrong email or password. Try again or')).toBeVisible()

})


