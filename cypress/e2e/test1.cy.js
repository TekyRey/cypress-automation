/// <reference types = "cypress" />

it('Google search', () => {
    cy.visit('https://www.google.com')

    cy.get('.gLFyf').type('cypress{enter}')
    cy.get('.g').should('have.length', 11)
    // click on the first link
    cy.get('.dmenKe > .cIkxbf').first().click()


    // go back to google
   
    cy.go('back')
        cy.get(".gLFyf").type("cypress{enter}");
        cy.get(".g").should("have.length", 11);

    // click on videos
cy.contains("Videos").click();
    // cy.url().should('include', 'videos')

    // click on images
    cy.contains("Images").click();
    // cy.url().should('include', 'images')

})