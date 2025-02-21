Cypress Automation Framework 🚀

Welcome to the Cypress Automation Framework – a modern, robust, and scalable solution for end-to-end (E2E) testing of web applications. This framework leverages Cypress and follows industry best practices like the Page Object Model (POM) and data-driven testing.

Table of Contents
Features
Folder Structure
Prerequisites
Setup
Running Tests
CI/CD Integration
Test Data
Page Object Model (POM)
Contributing
License
Contact
Features ✨
Page Object Model (POM): Encapsulate UI elements and actions in dedicated page classes.
Data-Driven Testing: Maintain test data in easy-to-update JSON files.
Modular Structure: Organized test suites for unitTesting, smoke, sanity, and regression.
CI/CD Ready: Seamlessly integrates with GitHub Actions for continuous testing.
Cross-Platform: Runs on Windows, macOS, and Linux.
Folder Structure 📁
```bash
cypress-framework/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml
├── .gitignore
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.cy.js
│   │   ├── signup.spec.cy.js
│   │   ├── productCategory.spec.cy.js
│   │   ├── productDetails.spec.cy.js
│   │   ├── checkout.spec.cy.js
│   │   └── contactUs.spec.cy.js
│   │   ├── smoke.spec.cy.js
│   │   ├── sanity.spec.cy.js
│   │   └── regression.spec.cy.js
│   ├── fixtures/
│   │   ├── loginData.json
│   │   ├── signupData.json
│   │   ├── productCategoryData.json
│   │   ├── productDetailsData.json
│   │   ├── checkoutData.json
│   │   └── contactUsData.json
│   ├── pages/
│   │   ├── loginPage/
│   │   │   ├── loginLocators.js
│   │   │   └── loginActions.js
│   │   ├── signupPage/
│   │   │   ├── signupLocators.js
│   │   │   └── signupActions.js
│   │   ├── productCategoryPage/
│   │   │   ├── productCategoryLocators.js
│   │   │   └── productCategoryActions.js
│   │   ├── productDetailsPage/
│   │   │   ├── productDetailsLocators.js
│   │   │   └── productDetailsActions.js
│   │   ├── checkoutPage/
│   │   │   ├── checkoutLocators.js
│   │   │   └── checkoutActions.js
│   │   └── contactUsPage/
│   │       ├── contactUsLocators.js
│   │       └── contactUsActions.js
│   ├── support/                 
│   │   └── e2e.js
│   ├── videos/                  
│   └── screenshots/
├── cypress.config.js
├── package.json
└── README.md
```
Prerequisites 🔧
Before running the tests, ensure you have the following installed:

Node.js: Download from nodejs.org
Git: Download from git-scm.com
Setup ⚙️
Clone the Repository:
```bash
git clone https://github.com/rizbiislam/Automation-Exercise-testing-with-Cypress.git
cd cypress-framework
```
Install Dependencies:
```bash
npm install
```
Run Cypress:
Interactive Mode:
```bash
npx cypress open
```
Headless Mode:
```bash
npx cypress run
```
Running Tests 🧪
Test Suites
Smoke Tests: Quick tests for critical functionalities.
```bash
npx cypress run --spec "cypress/e2e/smoke.spec.cy.js"
```
Sanity Tests: Focused tests for specific areas.
bash
Copy
Edit
npx cypress run --spec "cypress/e2e/sanity.spec.cy.js"
Regression Tests: Comprehensive tests for overall functionality.
```bash
npx cypress run --spec "cypress/e2e/regression.spec.cy.js"
```
Individual Tests
Run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```
CI/CD Integration 🤖
The framework is pre-configured for CI/CD using GitHub Actions. The workflow file located at .github/workflows/cypress-tests.yml automatically triggers tests on every push or pull request to the main branch.

Test Data 📊
Test data is maintained in JSON files within the cypress/fixtures/ folder. Update these files as needed:
```bash
loginData.json: Login credentials.
signupData.json: Signup user details.
productCategoryData.json: Product category info.
productDetailsData.json: Product details.
checkoutData.json: Checkout and payment info.
contactUsData.json: Contact Us form details.
```
Page Object Model (POM) 📄
This framework utilizes the Page Object Model to structure UI interactions. Each page module includes:
```bash
Locators: Defined in *Locators.js files.
Actions: Defined in *Actions.js files.
```
Contributing 🤝
Create a New Branch:
```bash
git checkout -b feature/your-feature-name
```
Commit Your Changes:
```bash
git commit -m "Version 1.2"
```
Push the Branch:
```bash
git push origin feature/your-feature-name
```
Open a Pull Request
License 📜
This project is licensed under the ISC License. See the LICENSE file for details.

Contact 📞
For questions or feedback, please reach out:

Email: rizbi.cse@gmail.com
GitHub: rizbiislam