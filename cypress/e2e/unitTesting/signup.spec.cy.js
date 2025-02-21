import LoginActions from '../../pages/loginPage/loginActions';
import SignupActions from '../../pages/signupPage/signupActions';
import signupData from '../../fixtures/signupData.json';

describe('Signup Tests', () => {
  it('should complete the sign-up process', () => {
    cy.visit('/');
    LoginActions.loginSignUpIcon();
    //LoginActions.visitLoginPage();
    LoginActions.fillSignUpForm(signupData.validUser.name, signupData.validUser.email);
    SignupActions.fillAccountInformation(signupData.validUser);
    SignupActions.submitAccountCreation();
    SignupActions.verifyAccountCreation();
    cy.get('a[href="/logout"]').should('be.visible');
  });
});