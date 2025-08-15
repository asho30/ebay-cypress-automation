class HomePage {
    visit(url) {
        cy.visit(url);
    }

    validateHomePage() {
        cy.title().should('contain', 'Electronics, Cars, Fashion');
        cy.get('#gh-ac').should('be.visible');
    }

    searchFor(term) {
        cy.get('#gh-ac').type(term+'{Enter}');
        //cy.get('button[value="Search"]').click({ force: true });
    }
}

module.exports = new HomePage();
