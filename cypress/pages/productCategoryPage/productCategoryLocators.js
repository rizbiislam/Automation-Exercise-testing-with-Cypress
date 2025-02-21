class ProductCategoryLocators {
    get productsLink() {
        return "a[href='/products']";
    }
    
    getCategoryLink(categoryName) {
      return `a[href='#${categoryName}']`;
    }
  
    getSubCategoryLink(subCategoryName) {
      return `a[href='/category_products/${subCategoryName}']`;
    }
  
    get productHeader() {
      return "h2.title.text-center";
    }
  }
  
  export default new ProductCategoryLocators();