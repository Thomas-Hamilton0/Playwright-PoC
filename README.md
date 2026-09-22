# Playwright-PoC
Small Playwright Proof of Concept for the DevOps Assignment

Can use the VS Code extention instead if you like VS Code

In CMD enter the following commands preferably where the project directory is to keep things tidy
npm init playwright@latest

// required because otherwise the school network will block the installation
$env:NODE_TLS_REJECT_UNAUTHORIZED=0
npx playwright install

// Run your project now so you can access it
npx playwright codegen WHATEVER YOUR WEBSITE IS

Interact with the webpage and additionally use asserts to build your test
When done with the test copy the test file into the test folder and give it a unique name

To run the automated tests:
npx playwright test
npx playwright show-report
OR
npx playwright test --ui
