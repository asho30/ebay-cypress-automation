const homePage = require('../pages/homePage');
const resultsPage = require('../pages/resultsPage');
const testData = require('../fixtures/testData.json');

describe('eBay Search Automation', () => {
    it('Search Mazda MX-5 and filter by manual transmission', () => {
        // Navigate to home page
        homePage.visit(testData.baseUrl);
        homePage.validateHomePage();

        // Search for Mazda MX-5
        homePage.searchFor(testData.searchTerm);

        // Validate results and log count
        resultsPage.validateResults(testData.searchTerm);
        resultsPage.logNumberOfResults();

        // Apply filter - Manual transmission
        resultsPage.filterByTransmission(testData.filter.transmission);

        // Optional: Wait for filtered results and validate
        cy.url().should('contain', 'Manual');
    });
});
