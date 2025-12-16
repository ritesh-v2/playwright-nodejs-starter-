import { test, expect } from '@playwright/test'

test('Verify loactor by get by label', async ({ page }) => {

    await page.goto('');

    const firstName = page.getByLabel('First name')
    await firstName.fill('Joseph')

    const lastName = page.getByLabel('Last name')
    await lastName.fill('Fernandees')

    await firstName.clear()
    await lastName.clear()

    await page.getByLabel('First name').fill('Leo')
    await page.getByLabel('Last name').fill('Messi')


})

test('Verify loactor by get by Role', async ({ page }) => {

    await page.goto('');

    await page.getByLabel('First name').fill('Leo')
    await page.getByLabel('Last name').fill('Messi')

    const clearButton = page.getByRole('button', { name: 'Clear', exact: true })
    await expect(clearButton).toBeEnabled();
    await clearButton.click()

    const savingTab = page.getByRole('link',{name:'Savings'})
    await savingTab.click();

    const rows = page.getByRole('row')
    const rowsData = rows.filter({hasText:'Competition'})
    console.log(await rowsData.allTextContents())
    const cell = rowsData.getByRole('cell').nth(1);
    console.log(await cell.textContent())
    // for(const li of await savingTab.all()){
    //     console.log(li)
    // }
    
})

test('Verify loactor by get by Text', async ({ page }) => {

    await page.goto('');

    const firstName = page.getByLabel('First name')
    await firstName.fill('Joseph')

    const lastName = page.getByLabel('Last name')
    await lastName.fill('Fernandees')

    await firstName.clear()
    await lastName.clear()

    await page.getByRole('button',{name : 'Register', exact : true}).click();

    const warningMessage = page.getByText('Valid first name is required')
    await expect(warningMessage).toBeVisible()
    
    const warningMessageCount = page.locator('.invalid-feedback')
    await expect(warningMessageCount).toHaveCount(3)

    for (const msg of await warningMessageCount.all()){

        console.log(await msg.textContent())
    }

})

test('Verify loactor by get by Placeholder', async ({ page }) => {

    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').clear()
    await page.getByPlaceholder('Search for Products, Brands and More').fill('iphone17')
    await page.keyboard.press('Enter')

    await expect(page.getByText('iphone17')).toHaveText('iphone17')
})

test('Verify generic CSS and Xpath loactor by get by Text', async ({ page }) => {

    await page.goto('')
    
    const firstName =  page.locator('form.needs-validation label[for="firstName"]')

    await firstName.fill('Ronaldo')

    const lastName = page.locator('input[id=lastName]')
    await lastName.fill('Christiano')

    await firstName.clear()
    await lastName.clear()

    await page.locator('//form//button[2]').click()

    const frame = page.frameLocator('#payment-frame');

    console.log('added files for the test')
    //await frame.getByRole('button', { name: 'Pay' }).click();
    
})


