class ProductDetailsLocators {
    get productList() {
      return "a[href^='/product_details/']";
    }
  
    get quantityInput() {
      return "input[id='quantity']";
    }
  
    get addToCartButton() {
      return "button[type='button']";
    }
  
    get successMessage() {
      return "div.modal-content";
    }
  }
  
  export default new ProductDetailsLocators();