import LoginActions from '../pages/loginPage/loginActions';
import loginData from '../fixtures/loginData.json';

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    
  });
  it('should log in with valid credentials', () => {
    LoginActions.loginSignUpIcon();
    //LoginActions.visitLoginPage();
    LoginActions.fillLoginForm(loginData.validUser.email, loginData.validUser.password);
    LoginActions.checkLogoutButton();
  });
});