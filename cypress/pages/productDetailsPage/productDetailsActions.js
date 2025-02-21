import ProductDetailsLocators from './productDetailsLocators';

class ProductDetailsActions {
  selectRandomProduct() {

    cy.get(ProductDetailsLocators.productList).then(($products) => {
      if ($products.length === 0) {
        throw new Error('No products found on the page.');
      }
      
      const randomIndex = Math.floor(Math.random() * $products.length);
      const randomProduct = $products[randomIndex];

      cy.wrap(randomProduct).click();
      cy.log(`Clicked on 'View Product' for product #${randomIndex + 1}`);
    });
  }

  changeQuantity(quantity) {
    cy.get(ProductDetailsLocators.quantityInput).clear().type(quantity);
  }

  addToCart() {
    cy.get(ProductDetailsLocators.addToCartButton).click();
  }

  verifySuccessMessage() {
    cy.get(ProductDetailsLocators.successMessage).should('contain', 'Your product has been added to cart.');
  }
}

export default new ProductDetailsActions();