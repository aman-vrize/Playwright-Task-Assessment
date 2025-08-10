# PLAYWRIGHT TASK ASSESSMENT
## How to setup
1. Clone the repository
2. Run command `npm i`


# How to run the tests
### Note: All these commands are available as scripts to run
## Core tests
`npx playwright test` to run tests on all broswers
## Specific browsers
`npx playwright test --headed --project=<Project Name>`
## Run against an environment
`cross-env ENV=<Environment Name> npx playwright test`
## Mobile emulation
`npx playwright test --project=<Mobile Project Name>`


# Assessment details covered 
I. Core Automation Task: User Journey & PDP Validation
Description:
Validate that a logged-in user can successfully navigate to the Product Detail Page (PDP) of a desired product and confirm the presence of the "Add to cart" button.
________________________________________
Steps & Expected Behavior:
1.	Initial Login & Navigation:
-	Actions:
    -	Navigate to https://www.saucedemo.com/
    -	Fill in the username field with a valid username (standard_user).
    -	Fill in the password field with a valid password (secret_sauce).
    -	Click the "Login" button.
-   Asserts:
    -	The page URL contains /inventory.html (indicating successful login).
    -	The product list is visible on the homepage.


2.	Category Navigation:
-	Note: Sauce Demo does not have categories like "Monitors," but you can select a product directly from the inventory list.
-	Actions:
    -	Identify and click on the "Sauce Labs Backpack" product link.
-	Assert:
    -	The product detail page shows the product name "Sauce Labs Backpack".


3.	Product Detail Page (PDP) Navigation & Validation:
-	Actions:
    -	On the product detail page, verify the "Add to cart" button is visible.
-	Asserts:
    -	The "Add to cart" button is present and enabled.


II. Framework Requirements
-	Cross-browser execution for Chromium, Firefox, and WebKit.
-	Appropriate scripts in package.json for running tests in different browsers.



III. Bonus Points (Optional)
-	Use environment variables or JSON for username/password instead of hardcoding.
-	Configure playwright.config.js for base URLs per environment.
-	Add mobile device emulation and run tests on it.









