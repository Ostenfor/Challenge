describe('Login Negative Suite', () => {
  it('Login Negative 1 - negative username', () => {
    //go to the page
    cy.visit('https://admin.staging.spot2.mx/')
    //typing a wrong username
    cy.get('#email').type('BadUsername1')
    cy.get('#password').type('4gZahqdifFLFeGT')
    //clicking the sign in button
    cy.get('.d-inline-flex > .btn').click()

    //validation the button after click should be present since the username is incorrect
    cy.get('.d-inline-flex > .btn').should('exist')
    cy.wait(1)
  })

  it('Login Negative 2 - negative password', () => {
    //go to the page
    cy.visit('https://admin.staging.spot2.mx/')
    cy.get('#email').type('tech+qa@spot2.mx')
    //typing a wrong password
    cy.get('#password').type('BadPassword1')
    //clicking the sign in button
    cy.get('.d-inline-flex > .btn').click()


    //validation the button after click should be present since the password is incorrect
    cy.get('.d-inline-flex > .btn').should('exist')
    //validating that the class='form-text' contains 'validation the button after click should be present since the username is incorrect'
    cy.get('.form-text').contains('Las credenciales proporcionadas son inválidas.')
    cy.wait(1)
  })
})