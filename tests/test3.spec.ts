import test, { expect, Locator, Page } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";

test.describe('3. Product Detail Page (PDP) Navigation & Validation', async () => {

    let productPage: ProductPage;

    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        const loginPage = new LoginPage(page);
        await loginPage.login();
        productPage = new ProductPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Add to cart button is visible', async () => {
        await expect(productPage.getAddToCartButton()).toBeVisible();
    });

    test('Add to cart button is enabled', async () => {
        await expect(productPage.getAddToCartButton()).toBeEnabled();
    });
});