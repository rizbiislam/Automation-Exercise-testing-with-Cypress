import CheckoutLocators from './checkoutLocators';

class CheckoutActions {
  goToCart() {
    cy.get(CheckoutLocators.cartButton).eq(0).click();
  }

  proceedToCheckout() {
    cy.get(CheckoutLocators.proceedToCheckoutButton).click();
  }

  placeOrder() {
    cy.get(CheckoutLocators.placeOrderButton).click();
  }

  fillPaymentDetails(paymentDetails) {
    cy.get(CheckoutLocators.nameOnCardInput).type(paymentDetails.nameOnCard);
    cy.get(CheckoutLocators.cardNumberInput).type(paymentDetails.cardNumber);
    cy.get(CheckoutLocators.cvcInput).type(paymentDetails.cvc);
    cy.get(CheckoutLocators.expiryMonthInput).type(paymentDetails.expiryMonth);
    cy.get(CheckoutLocators.expiryYearInput).type(paymentDetails.expiryYear);
  }

  payAndConfirmOrder() {
    cy.get(CheckoutLocators.payAndConfirmOrderButton).click();
  }

  verifyOrderConfirmation() {
    cy.get(CheckoutLocators.orderConfirmationMessage).should('contain', 'Your order has been Placed!');
  }

  verifyOrderPlaced() {
    cy.get(CheckoutLocators.orderPlacedMessage).should('contain', 'Order Placed!');
  }

  downloadInvoice() {
    cy.get(CheckoutLocators.downloadInvoiceButton).click();
    cy.verifyDownload('invoice.txt');
  }

  clickContinue() {
    cy.get(CheckoutLocators.continueButton).click();
  }
}

export default new CheckoutActions();