import LoginActions from '../pages/loginPage/loginActions';
import ProductCategoryActions from '../pages/productCategoryPage/productCategoryActions';
import ProductDetailsActions from '../pages/productDetailsPage/productDetailsActions';
import CheckoutActions from '../pages/checkoutPage/checkoutActions';
import ContactUsActions from '../pages/contactUsPage/contactUsActions';

describe('Sanity Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('loginData').as('loginData');
    cy.fixture('productCategoryData').as('productCategoryData');
    cy.fixture('productDetailsData').as('productDetailsData');
    cy.fixture('checkoutData').as('checkoutData');
    cy.fixture('contactUsData').as('contactUsData');
  });

  it('should verify login functionality', function () {
    const { validUser } = this.loginData;

    // Sanity Test 1: Login
    LoginActions.loginSignUpIcon();
    LoginActions.fillLoginForm(validUser.email, validUser.password);
    LoginActions.checkLogoutButton();
  });
  it('should verify Category functionality', function () {
    const { menCategory } = this.productCategoryData;

    // Sanity Test 2: Category
    ProductCategoryActions.navigateToProductsPage();
    ProductCategoryActions.navigateToCategory(menCategory.categoryName);
    ProductCategoryActions.selectSubCategory(menCategory.subCategoryNumber);
    ProductCategoryActions.verifyProductCategoryHeader(menCategory.expectedHeader);
  });

  it('should verify product addition to cart', function () {
    const { product } = this.productDetailsData;

    // Sanity Test 3: Add a product to cart
    ProductCategoryActions.navigateToProductsPage();
    ProductDetailsActions.selectRandomProduct();
    ProductDetailsActions.changeQuantity(product.quantity);
    ProductDetailsActions.addToCart();
    ProductDetailsActions.verifySuccessMessage();
  });

  it('should verify Contact Us form submission', function () {
    const { contactDetails, filePath } = this.contactUsData;

    // Sanity Test 4: Submit Contact Us form
    ContactUsActions.navigateToContactUsPage();
    ContactUsActions.fillContactForm(contactDetails);
    ContactUsActions.attachFile(filePath);
    ContactUsActions.submitForm();
    ContactUsActions.verifySuccessMessage();
  });
});