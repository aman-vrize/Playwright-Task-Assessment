import test, { expect, Page } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";

test.describe('2. Category Navigation Tests', async () => {

    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        const loginPage = new LoginPage(page);
        await loginPage.login();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Product page shows the product name "Sauce Labs Backpack', async () => {
        const productPage = new ProductPage(page);
        await productPage.getSauceLabBackPackProductLink().click();
        await expect(productPage.getProductNameLocator()).toHaveText('Sauce Labs Backpack');
    });
});