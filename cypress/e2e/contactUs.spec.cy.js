import ContactUsActions from '../pages/contactUsPage/contactUsActions';

describe('Contact Us Form Submission Tests', () => {
  beforeEach(() => {
    
    cy.visit('/');
    
    cy.fixture('contactUsData').as('contactUsData');
  });

  it('should submit the Contact Us form with a file attachment', function () {
    const { contactDetails, filePath } = this.contactUsData;
    
    ContactUsActions.navigateToContactUsPage();
    ContactUsActions.fillContactForm(contactDetails);
    ContactUsActions.attachFile(filePath);
    ContactUsActions.submitForm();
    ContactUsActions.verifySuccessMessage();
  });
});