import LoginActions from '../pages/loginPage/loginActions';
import ProductDetailsActions from '../pages/productDetailsPage/productDetailsActions';
import CheckoutActions from '../pages/checkoutPage/checkoutActions';

describe('Checkout Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('loginData').as('loginData');
    cy.fixture('productDetailsData').as('productDetailsData');
    cy.fixture('checkoutData').as('checkoutData');
  });

  it('should log in, add a product to cart, and complete checkout', function () {
    const { validUser } = this.loginData;
    const { product } = this.productDetailsData;
    const { paymentDetails } = this.checkoutData;

    LoginActions.loginSignUpIcon();
    LoginActions.fillLoginForm(validUser.email, validUser.password);

    /*ProductCategoryActions.navigateToProductsPage();
    ProductDetailsActions.selectRandomProduct();
    ProductDetailsActions.changeQuantity(2);
    ProductDetailsActions.addToCart();
    ProductDetailsActions.verifySuccessMessage();*/
    CheckoutActions.goToCart();
    CheckoutActions.proceedToCheckout();
    CheckoutActions.placeOrder();
    CheckoutActions.fillPaymentDetails(paymentDetails);
    CheckoutActions.payAndConfirmOrder();
    //CheckoutActions.verifyOrderConfirmation();
    CheckoutActions.verifyOrderPlaced();
    //CheckoutActions.downloadInvoice();
    CheckoutActions.clickContinue();
  });
});