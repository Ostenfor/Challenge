/// <reference types="cypress"/>

describe('Login Positive suite', () => {
  it('passes', () => {
    //go to the page
    cy.visit('https://admin.staging.spot2.mx/')
    //typting the correct username
    cy.get('#email').type('tech+qa@spot2.mx')
    //typing the correct password
    cy.get('#password').type('4gZahqdifFLFeGT')
    //clicking the sign in button
    cy.get('.d-inline-flex > .btn').click()
    cy.wait(1)

    //finding and element that should be present in the login homepage
    cy.get('.breadcrumb > .active').contains('Públicos')
    //making sure that the sign in button does not exist becasue im logged in
    cy.get('.d-inline-flex > .btn').should('not.exist')
  })
})