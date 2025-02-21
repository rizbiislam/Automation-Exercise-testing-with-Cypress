class CheckoutLocators {
    get cartButton() {
      return "a[href='/view_cart']";
    }
  
    get proceedToCheckoutButton() {
      return "a.check_out";
    }
  
    get placeOrderButton() {
      return "a[href='/payment']";
    }
  
    get nameOnCardInput() {
      return "input[name='name_on_card']";
    }
  
    get cardNumberInput() {
      return "input[name='card_number']";
    }
  
    get cvcInput() {
      return "input[name='cvc']";
    }
  
    get expiryMonthInput() {
      return "input[name='expiry_month']";
    }
  
    get expiryYearInput() {
      return "input[name='expiry_year']";
    }
  
    get payAndConfirmOrderButton() {
      return "button[data-qa='pay-button']";
    }
  
    get orderConfirmationMessage() {
      return "div.alert-success";
    }

    get orderPlacedMessage() {
      return "h2.title.text-center";
    }
  
    get downloadInvoiceButton() {
      return "a.btn.btn-default.check_out";
    }
  
    get continueButton() {
      return "a[data-qa='continue-button']";
    }
  }
  
  export default new CheckoutLocators();