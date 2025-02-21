class SignupLocators {
    get passwordInput() {
      return "input[data-qa='password']";
    }
  
    get daysDropdown() {
      return "select[data-qa='days']";
    }
  
    get monthsDropdown() {
      return "select[data-qa='months']";
    }
  
    get yearsDropdown() {
      return "select[data-qa='years']";
    }
  
    get firstNameInput() {
      return "input[data-qa='first_name']";
    }
  
    get lastNameInput() {
      return "input[data-qa='last_name']";
    }
  
    get companyInput() {
      return "input[data-qa='company']";
    }
  
    get addressInput() {
      return "input[data-qa='address']";
    }
  
    get address2Input() {
      return "input[data-qa='address2']";
    }
  
    get countryDropdown() {
      return "select[data-qa='country']";
    }
  
    get stateInput() {
      return "input[data-qa='state']";
    }
  
    get cityInput() {
      return "input[data-qa='city']";
    }
  
    get zipcodeInput() {
      return "input[data-qa='zipcode']";
    }
  
    get mobileNumberInput() {
      return "input[data-qa='mobile_number']";
    }
  
    get createAccountButton() {
      return "button[data-qa='create-account']";
    }
  
    get accountCreatedMessage() {
      return "h2[data-qa='account-created']";
    }
  
    get continueButton() {
      return "a[data-qa='continue-button']";
    }
  }
  
  export default new SignupLocators();