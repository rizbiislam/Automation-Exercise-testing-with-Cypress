import LoginLocators from './loginLocators';

class LoginActions {
  visitLoginPage() {
    cy.visit('https://automationexercise.com/login');
  }

  loginSignUpIcon(){
    cy.get(LoginLocators.loginSignupIcon).click();
  }

  fillLoginForm(email, password) {
    cy.get(LoginLocators.loginEmailInput).type(email);
    cy.get(LoginLocators.loginPasswordInput).type(password);
    cy.get(LoginLocators.loginButton).click();
  }

  fillSignUpForm(name, email) {
    cy.get(LoginLocators.signupNameInput).type(name);
    cy.get(LoginLocators.signupEmailInput).type(email);
    cy.get(LoginLocators.signupButton).click();
  }
  checkLogoutButton(){
    cy.get(LoginLocators.logoutButton).should('be.visible');
  }
  clickLogout(){
    cy.get(LoginLocators.logoutButton).click();
  }
}

export default new LoginActions();