exports.saucelabs = class saucelabs {

    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.password_textbox = page.locator('[data-test="password"]')
        this.login_button = page.locator('[data-test="login-button"]')
        this.addtocart_button = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.openmenu_button = page.getByRole('button', { name: 'Open Menu' })
        this.logout_button = page.locator('[data-test="logout-sidebar-link"]')

    }

    async gotosaucelabs() {

        await this.page.goto('https://www.saucedemo.com/')
    }

    async saucelabs(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await this.addtocart_button.click()
        await this.openmenu_button.click()
        await this.logout_button.click()

    }


}