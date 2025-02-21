import LoginActions from '../pages/loginPage/loginActions';
import ProductCategoryActions from '../pages/productCategoryPage/productCategoryActions';
import ProductDetailsActions from '../pages/productDetailsPage/productDetailsActions';

describe('Login and Product Details Tests', () => {
  beforeEach(() => {
    
    cy.visit('/');
    
    cy.fixture('loginData').as('loginData');
    cy.fixture('productDetailsData').as('productDetailsData');
  });

  it('should log in, select a random product, change quantity, and add to cart', function () {
    const { validUser } = this.loginData;
    const { product } = this.productDetailsData;

    LoginActions.loginSignUpIcon();
    LoginActions.fillLoginForm(validUser.email, validUser.password);

    ProductCategoryActions.navigateToProductsPage();

    ProductDetailsActions.selectRandomProduct();

    ProductDetailsActions.changeQuantity(product.quantity);
    
    ProductDetailsActions.addToCart();

    ProductDetailsActions.verifySuccessMessage();
  });
});