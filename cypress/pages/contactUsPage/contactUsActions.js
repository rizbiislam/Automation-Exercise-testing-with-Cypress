import ContactUsLocators from './contactUsLocators';

class ContactUsActions {
  navigateToContactUsPage() {
    cy.get(ContactUsLocators.contactUsLink).click();
  }

  fillContactForm(contactDetails) {
    cy.get(ContactUsLocators.nameInput).type(contactDetails.name);
    cy.get(ContactUsLocators.emailInput).type(contactDetails.email);
    cy.get(ContactUsLocators.subjectInput).type(contactDetails.subject);
    cy.get(ContactUsLocators.messageInput).type(contactDetails.message);
  }

  attachFile(filePath) {
    cy.get(ContactUsLocators.fileUploadInput).attachFile(filePath);
  }

  submitForm() {
    cy.get(ContactUsLocators.submitButton).click();
  }

  verifySuccessMessage() {
    cy.get(ContactUsLocators.successMessage).should('contain', 'Success! Your details have been submitted successfully.');
  }
}

export default new ContactUsActions();