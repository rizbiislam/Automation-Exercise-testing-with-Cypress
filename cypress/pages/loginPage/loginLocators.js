class LoginLocators {
  get loginSignupIcon() {
    return "li > a[href='/login']";
  }
  get loginEmailInput() {
    return "input[data-qa='login-email']";
  }
  
    get loginPasswordInput() {
      return "input[data-qa='login-password']";
    }
  
    get loginButton() {
      return "button[data-qa='login-button']";
    }
    get logoutButton() {
      return "a[href='/logout']";
    }
  
    get signupNameInput() {
      return "input[data-qa='signup-name']";
    }
  
    get signupEmailInput() {
      return "input[data-qa='signup-email']";
    }
  
    get signupButton() {
      return "button[data-qa='signup-button']";
    }
  }
  
  export default new LoginLocators();