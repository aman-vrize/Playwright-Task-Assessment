import { Locator, Page } from "@playwright/test";

export default class ProductPage {

    private readonly productListLocator: string = 'data-test=inventory_container';
    private readonly sauceLabBackpackProductLink: string = 'Sauce Labs Backpack';
    private readonly productNameLocator: string = 'data-test=inventory-item-name';
    private readonly addToCartButton: string = 'Add to cart';

    constructor(private page: Page) { }

    getProductList(): Locator {
        return this.page.locator(this.productListLocator);
    }

    getSauceLabBackPackProductLink(): Locator {
        return this.page.getByRole('link', { name: this.sauceLabBackpackProductLink, }).first();
    }

    getProductNameLocator(): Locator {
        return this.page.locator(this.productNameLocator);
    }

    getAddToCartButton(): Locator {
        return this.page.getByRole('button', { name: this.addToCartButton }).first();
    }



}