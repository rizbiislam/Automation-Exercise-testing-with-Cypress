import LoginActions from '../pages/loginPage/loginActions';
import ProductCategoryActions from '../pages/productCategoryPage/productCategoryActions';
import ProductDetailsActions from '../pages/productDetailsPage/productDetailsActions';
import CheckoutActions from '../pages/checkoutPage/checkoutActions';
import ContactUsActions from '../pages/contactUsPage/contactUsActions';
import productCategoryActions from '../pages/productCategoryPage/productCategoryActions';

describe('Smoke Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('loginData').as('loginData');
    cy.fixture('productDetailsData').as('productDetailsData');
    cy.fixture('productCategoryData').as('productCategoryData');
    cy.fixture('checkoutData').as('checkoutData');
    cy.fixture('contactUsData').as('contactUsData');

  });

  it('should verify critical functionalities', function () {
    const { validUser } = this.loginData;
    const { product } = this.productDetailsData;
    const { menCategory } = this.productCategoryData;
    const { paymentDetails } = this.checkoutData;
    const { contactDetails, filePath } = this.contactUsData;

    // Smoke Test 1: Signup

    // Smoke Test 2: Login and product category
    LoginActions.loginSignUpIcon();
    LoginActions.fillLoginForm(validUser.email, validUser.password);
    LoginActions.checkLogoutButton();

    ProductCategoryActions.navigateToProductsPage();
    ProductCategoryActions.navigateToCategory(menCategory.categoryName);
    ProductCategoryActions.selectSubCategory(menCategory.subCategoryNumber);
    ProductCategoryActions.verifyProductCategoryHeader(menCategory.expectedHeader);

    // Smoke Test 3: Add a product to cart
    ProductCategoryActions.navigateToProductsPage();
    ProductDetailsActions.selectRandomProduct();
    ProductDetailsActions.changeQuantity(product.quantity);
    ProductDetailsActions.addToCart();
    ProductDetailsActions.verifySuccessMessage();

    // Smoke Test 4: Submit Contact Us form
    ContactUsActions.navigateToContactUsPage();
    ContactUsActions.fillContactForm(contactDetails);
    ContactUsActions.attachFile(filePath);
    ContactUsActions.submitForm();
    ContactUsActions.verifySuccessMessage();
  });
});