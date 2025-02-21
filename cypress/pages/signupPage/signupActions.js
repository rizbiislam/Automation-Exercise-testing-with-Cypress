import SignupLocators from './signupLocators';

class SignupActions {
  fillAccountInformation(userData) {
    cy.get(SignupLocators.passwordInput).type(userData.password);
    cy.get(SignupLocators.daysDropdown).select(userData.dob.day);
    cy.get(SignupLocators.monthsDropdown).select(userData.dob.month);
    cy.get(SignupLocators.yearsDropdown).select(userData.dob.year);
    cy.get(SignupLocators.firstNameInput).type(userData.firstName);
    cy.get(SignupLocators.lastNameInput).type(userData.lastName);
    cy.get(SignupLocators.companyInput).type(userData.company);
    cy.get(SignupLocators.addressInput).type(userData.address);
    cy.get(SignupLocators.address2Input).type(userData.address2);
    cy.get(SignupLocators.countryDropdown).select(userData.country);
    cy.get(SignupLocators.stateInput).type(userData.state);
    cy.get(SignupLocators.cityInput).type(userData.city);
    cy.get(SignupLocators.zipcodeInput).type(userData.zipcode);
    cy.get(SignupLocators.mobileNumberInput).type(userData.mobileNumber);
  }

  submitAccountCreation() {
    cy.get(SignupLocators.createAccountButton).click();
  }

  verifyAccountCreation() {
    cy.get(SignupLocators.accountCreatedMessage).should('contain', 'Account Created!');
    cy.get(SignupLocators.continueButton).click();
  }
}

export default new SignupActions();