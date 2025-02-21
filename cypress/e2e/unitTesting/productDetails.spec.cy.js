import ProductCategoryActions from '../../pages/productCategoryPage/productCategoryActions';
import ProductDetailsActions from '../../pages/productDetailsPage/productDetailsActions';

describe('Product Details Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should select a random product, change quantity, and add to cart', () => {
    
    ProductCategoryActions.navigateToProductsPage();
    ProductDetailsActions.selectRandomProduct();
    ProductDetailsActions.changeQuantity(2);
    ProductDetailsActions.addToCart();
    ProductDetailsActions.verifySuccessMessage();
  });
});