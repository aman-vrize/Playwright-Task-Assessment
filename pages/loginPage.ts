import { Page } from "@playwright/test";

export default class LoginPage {

    private readonly userNamePlaceholder: string = 'Username';
    private readonly passwordPlaceholder: string = 'Password';
    private readonly submitButtonSelector: string = '[type="submit"][data-test="login-button"]';

    constructor(private page: Page) { }

    getUrl(): string {
        return this.page.url();
    }

    async login(username: string | undefined = process.env.USER_NAME, password: string | undefined = process.env.PASSWORD) {
        await this.page.goto("/");
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.submit();
    }

    private async fillUsername(username: string = 'standard_user') {
        await this.page.getByPlaceholder(this.userNamePlaceholder).fill(username);
    }

    private async fillPassword(password: string = 'secret_sauce') {
        await this.page.getByPlaceholder(this.passwordPlaceholder).fill(password);
    }

    private async submit() {
        await this.page.click(this.submitButtonSelector);
    }

}