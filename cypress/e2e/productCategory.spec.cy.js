import ProductCategoryActions from '../pages/productCategoryPage/productCategoryActions';
import catagoryData from '../fixtures/productCategoryData.json'

describe('Product Category Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    //cy.fixture('productCategoryData').as('categoryData');
    
  });
  
  it('should navigate to the Men category and select Dress', function () {
    //const { menCategory } = this.categoryData;

    ProductCategoryActions.navigateToProductsPage();
    ProductCategoryActions.navigateToCategory(catagoryData.menCategory.categoryName);
    ProductCategoryActions.selectSubCategory(catagoryData.menCategory.subCategoryNumber);
    ProductCategoryActions.verifyProductCategoryHeader(catagoryData.menCategory.expectedHeader);
  });
});