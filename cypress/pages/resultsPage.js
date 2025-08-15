class ResultsPage {
    validateResults(term) {
        cy.get('h1.srp-controls__count-heading').should('contain.text', term);
    }

    logNumberOfResults() {
        cy.get('h1.srp-controls__count-heading').then($heading => {
            const text = $heading.text();
            cy.log(`Number of results: ${text}`);
            console.log(`Number of results: ${text}`);
        });
    }

    filterByTransmission(type) {
        cy.contains('span', type, { timeout: 5000 }).click();
    }
}

module.exports = new ResultsPage();
