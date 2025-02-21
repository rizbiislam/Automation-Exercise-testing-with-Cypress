import LoginActions from '../pages/loginPage/loginActions';
import ProductCategoryActions from '../pages/productCategoryPage/productCategoryActions';
import ProductDetailsActions from '../pages/productDetailsPage/productDetailsActions';
import CheckoutActions from '../pages/checkoutPage/checkoutActions';
import ContactUsActions from '../pages/contactUsPage/contactUsActions';

describe('Regression Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('loginData').as('loginData');
    cy.fixture('productDetailsData').as('productDetailsData');
    cy.fixture('checkoutData').as('checkoutData');
    cy.fixture('productCategoryData').as('productCategoryData');
    cy.fixture('contactUsData').as('contactUsData');
  });

  it('should verify end-to-end workflow', function () {
    const { validUser } = this.loginData;
    const { product } = this.productDetailsData;
    const { menCategory } = this.productCategoryData;
    const { paymentDetails } = this.checkoutData;
    const { contactDetails, filePath } = this.contactUsData;

    // Regression Test 1: Login
    LoginActions.loginSignUpIcon();
    LoginActions.fillLoginForm(validUser.email, validUser.password);
    LoginActions.checkLogoutButton();

    // Regression Test 2: select Product Category
    ProductCategoryActions.navigateToProductsPage();
    ProductCategoryActions.navigateToCategory(menCategory.categoryName);
    ProductCategoryActions.selectSubCategory(menCategory.subCategoryNumber);
    ProductCategoryActions.verifyProductCategoryHeader(menCategory.expectedHeader);

    // Regression Test 3: Add a product to cart
    ProductCategoryActions.navigateToProductsPage();
    ProductDetailsActions.selectRandomProduct();
    ProductDetailsActions.changeQuantity(product.quantity);
    ProductDetailsActions.addToCart();
    ProductDetailsActions.verifySuccessMessage();

    // Regression Test 4: Complete checkout
    CheckoutActions.goToCart();
    CheckoutActions.proceedToCheckout();
    CheckoutActions.placeOrder();
    CheckoutActions.fillPaymentDetails(paymentDetails);
    CheckoutActions.payAndConfirmOrder();
    //CheckoutActions.verifyOrderConfirmation();
    CheckoutActions.verifyOrderPlaced();
    //CheckoutActions.downloadInvoice();
    CheckoutActions.clickContinue();

    LoginActions.clickLogout();

    // Regression Test 5: Submit Contact Us form
    ContactUsActions.navigateToContactUsPage();
    ContactUsActions.fillContactForm(contactDetails);
    ContactUsActions.attachFile(filePath);
    ContactUsActions.submitForm();
    ContactUsActions.verifySuccessMessage();
  });
});