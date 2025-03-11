//Cypress - Spec file
describe('Sauce Demo Login Test', function()
{
it('Should Login and verify the Inventory page', function() {
    // Visit the URL
    cy.visit("https://www.saucedemo.com");

    // Enter username
    cy.get('#user-name').type('standard_user');

    // Enter password
    cy.get('#password').type('secret_sauce');

    // Click the Login button
    cy.get('#login-button').click()

    // Verify user on Inventory page by verifying URL
    cy.url().should('include', '/inventory.html');  
    // Verify the page title
    cy.get('.title').should('have.text', 'Products');
});
});