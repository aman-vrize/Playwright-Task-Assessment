import { expect, Page, test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import ProductPage from '../pages/productPage';

test.describe('1. Login and Navigation Tests', async () => {

    let page: Page;

    let loginPage: LoginPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        await loginPage.login();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Login page url contains inventory.html', async () => {
        expect(loginPage.getUrl()).toContain('inventory.html');
    });

    test('Login page contains product list', async () => {
        const productPage = new ProductPage(page);
        await expect(productPage.getProductList().isVisible()).toBeTruthy();
    });
});






