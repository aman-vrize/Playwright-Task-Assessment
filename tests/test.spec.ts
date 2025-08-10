import { expect, Locator, Page, test } from '@playwright/test';

let page: Page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto("/");
    await page.getByPlaceholder('Username').fill(process.env.USER_NAME || 'standard_user');
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD || 'secret_sauce');
    await page.click('[type="submit"][data-test="login-button"]');
});

test.afterAll(async () => {
    await page.close();
});


test.describe('1. Login and Navigation Tests',  async () => {

    test('Login page url contains inventory.html', async () => {
        expect(page.url()).toContain('inventory.html');
    });

    test('Login page contains product list', async () => {
        await expect(page.locator('data-test=inventory_container').isVisible()).toBeTruthy();
    });
});

test.describe('2. Category Navigation Tests', async () => {

    test.beforeAll(async () => {
        await page.getByRole('link', { name: 'Sauce Labs Backpack', }).first().click();
    });

    test('Product page shows the product name "Sauce Labs Backpack', async () => {
        await expect(page.locator('data-test=inventory-item-name')).toHaveText('Sauce Labs Backpack');
    });
});

test.describe('3. Product Detail Page (PDP) Navigation & Validation', async () => {

    let addToCartButton: Locator;

    test.beforeAll(async () => {
        addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
    });

    test('Add to cart button is visible', async () => {
        await expect(addToCartButton).toBeVisible();
    });

    test('Add to cart button is enabled', async () => {
        await expect(addToCartButton).toBeEnabled();
    });
});


