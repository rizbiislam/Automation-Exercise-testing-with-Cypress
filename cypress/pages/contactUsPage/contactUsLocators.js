class ContactUsLocators {
    get contactUsLink() {
      return "a[href='/contact_us']";
    }
  
    get nameInput() {
      return "input[data-qa='name']";
    }
  
    get emailInput() {
      return "input[data-qa='email']";
    }
  
    get subjectInput() {
      return "input[data-qa='subject']";
    }
  
    get messageInput() {
      return "textarea[data-qa='message']";
    }
  
    get fileUploadInput() {
      return "input[name='upload_file']";
    }
  
    get submitButton() {
      return "input[data-qa='submit-button']";
    }
  
    get successMessage() {
      return "div.status.alert-success";
    }
  }
  
  export default new ContactUsLocators();