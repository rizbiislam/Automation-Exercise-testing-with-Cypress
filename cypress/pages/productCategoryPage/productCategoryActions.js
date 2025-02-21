import ProductCategoryLocators from './productCategoryLocators';

class ProductCategoryActions {

    navigateToProductsPage() {
        cy.get(ProductCategoryLocators.productsLink).eq(0).click();
    }
    
    navigateToCategory(categoryName) {
        cy.get(ProductCategoryLocators.getCategoryLink(categoryName)).click();
    }

    selectSubCategory(subCategoryName) {
        cy.get(ProductCategoryLocators.getSubCategoryLink(subCategoryName)).click();
    }
    
    verifyProductCategoryHeader(expectedHeader) {
        cy.get(ProductCategoryLocators.productHeader).should('contain', expectedHeader);
    }
}

export default new ProductCategoryActions();