# Cypress Automation Framework

This is a **Cypress-based automation framework** designed for end-to-end (E2E) testing of web applications. The framework is modular, scalable, and follows best practices such as the **Page Object Model (POM)** and **data-driven testing**.

---

## **Features**
- **Page Object Model (POM)**: Encapsulates UI elements and actions in separate page classes.
- **Data-Driven Testing**: Uses JSON files to store test data.
- **Modular Structure**: Organized into `unitTesting`, `smoke`, `sanity`, and `regression` test suites.
- **CI/CD Integration**: Ready for integration with GitHub Actions.
- **Cross-Platform**: Works on Windows, macOS, and Linux.

---

## **Folder Structure**
cypress-framework/
├── .github/
│ ├── workflows/
│ │ ├── cypress-tests.yml # CI/CD configuration
├── .gitignore # Git ignore file
├── cypress/
│ ├── e2e/
│ │ ├── unitTesting/ # Individual feature tests
│ │ │ ├── login.spec.js
│ │ │ ├── signup.spec.js
│ │ │ ├── productCategory.spec.js
│ │ │ ├── productDetails.spec.js
│ │ │ ├── checkout.spec.js
│ │ │ ├── contactUs.spec.js
│ │ ├── smoke.spec.js # Smoke test suite
│ │ ├── sanity.spec.js # Sanity test suite
│ │ ├── regression.spec.js # Regression test suite
│ ├── fixtures/ # Test data files
│ │ ├── loginData.json
│ │ ├── signupData.json
│ │ ├── productCategoryData.json
│ │ ├── productDetailsData.json
│ │ ├── checkoutData.json
│ │ ├── contactUsData.json
│ ├── pages/ # Page Object Model files
│ │ ├── loginPage/
│ │ │ ├── loginLocators.js
│ │ │ ├── loginActions.js
│ │ ├── signupPage/
│ │ │ ├── signupLocators.js
│ │ │ ├── signupActions.js
│ │ ├── productCategoryPage/
│ │ │ ├── productCategoryLocators.js
│ │ │ ├── productCategoryActions.js
│ │ ├── productDetailsPage/
│ │ │ ├── productDetailsLocators.js
│ │ │ ├── productDetailsActions.js
│ │ ├── checkoutPage/
│ │ │ ├── checkoutLocators.js
│ │ │ ├── checkoutActions.js
│ │ ├── contactUsPage/
│ │ │ ├── contactUsLocators.js
│ │ │ ├── contactUsActions.js
│ ├── support/ # Support files
│ │ ├── e2e.js
│ ├── videos/ # Test recordings
│ ├── screenshots/ # Screenshots of test failures
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies
├── README.md # Project documentation

Copy

---

## **Prerequisites**
Before running the tests, ensure you have the following installed:
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **Git**: Download and install from [git-scm.com](https://git-scm.com/).

---

## **Setup**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/cypress-framework.git
   cd cypress-framework
Install Dependencies:

bash
Copy
npm install
Run Cypress:

Open Cypress in interactive mode:

bash
Copy
npx cypress open
Run all tests in headless mode:

bash
Copy
npx cypress run
Running Tests
Test Suites
Smoke Tests: High-level tests for critical functionalities.

bash
Copy
npx cypress run --spec "cypress/e2e/smoke.spec.js"
Sanity Tests: Focused tests for specific functionalities.

bash
Copy
npx cypress run --spec "cypress/e2e/sanity.spec.js"
Regression Tests: Comprehensive tests for all functionalities.

bash
Copy
npx cypress run --spec "cypress/e2e/regression.spec.js"
Individual Tests
Run a specific test file:

bash
Copy
npx cypress run --spec "cypress/e2e/unitTesting/login.spec.js"
CI/CD Integration
The framework is configured to run tests automatically using GitHub Actions. The workflow file (.github/workflows/cypress-tests.yml) will trigger tests on every push or pull request to the main branch.

Test Data
Test data is stored in JSON files under the cypress/fixtures/ folder. Update these files as needed:

loginData.json: Login credentials.

productCategoryData.json: Product category details.

productDetailsData.json: Product details.

checkoutData.json: Checkout and payment details.

contactUsData.json: Contact Us form details.

Page Object Model (POM)
The framework uses the Page Object Model to encapsulate UI elements and actions. Each page has:

Locators: Defined in *Locators.js files.

Actions: Defined in *Actions.js files.

Example: Login Page
cypress/pages/loginPage/loginLocators.js
javascript
Copy
class LoginLocators {
  get loginEmailInput() {
    return "input[data-qa='login-email']";
  }

  get loginPasswordInput() {
    return "input[data-qa='login-password']";
  }

  get loginButton() {
    return "button[data-qa='login-button']";
  }
}

export default new LoginLocators();
cypress/pages/loginPage/loginActions.js
javascript
Copy
import LoginLocators from './loginLocators';

class LoginActions {
  visitLoginPage() {
    cy.visit('/login');
  }

  fillLoginForm(email, password) {
    cy.get(LoginLocators.loginEmailInput).type(email);
    cy.get(LoginLocators.loginPasswordInput).type(password);
  }

  submitLoginForm() {
    cy.get(LoginLocators.loginButton).click();
  }
}

export default new LoginActions();
Contributing
Fork the repository.

Create a new branch:

bash
Copy
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy
git commit -m "Add your message here"
Push to the branch:

bash
Copy
git push origin feature/your-feature-name
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or feedback, please contact:

Your Name: your.email@example.com

GitHub: your-username

Copy

---

### **Key Sections**
1. **Features**: Highlights the key features of the framework.
2. **Folder Structure**: Provides an overview of the project structure.
3. **Prerequisites**: Lists the tools required to run the framework.
4. **Setup**: Step-by-step instructions for setting up the framework.
5. **Running Tests**: Explains how to run different test suites.
6. **CI/CD Integration**: Describes the GitHub Actions workflow.
7. **Test Data**: Explains how to manage test data.
8. **Page Object Model (POM)**: Provides an example of the POM implementation.
9. **Contributing**: Guidelines for contributing to the project.
10. **License**: Information about the project's license.
11. **Contact**: Contact information for the maintainer.

---

This `README.md` file is ready to use for your Cypress framework. Let me know if you need further assistance! 🚀