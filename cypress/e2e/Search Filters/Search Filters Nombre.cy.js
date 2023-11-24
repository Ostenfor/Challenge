describe('Search Filters', () => {
    it('it test search filters', () => {
        //go to the page
        cy.visit('https://admin.staging.spot2.mx/')
        //emter username
        cy.get('#email').type('tech+qa@spot2.mx')
        //enter passwrod
        cy.get('#password').type('4gZahqdifFLFeGT')
        //click on sign in button
        cy.get('.d-inline-flex > .btn').click()

        //land in new url, make sure it matches
        cy.url('https://admin.staging.spot2.mx/admin/spots/publicos?sort=-created_at')
        //the class="breadcrumb" should have Publicos
        cy.get('.breadcrumb > .active').contains('Públicos')
        //tke login button should no longer be present
        cy.get('.d-inline-flex > .btn').should('not.exist')
        //click on the admin button in the left menu
        cy.get(':nth-child(6) > .menu-link > .menu-title').click()

        //land in new url, make sure it matches
        cy.url('https://admin2.staging.spot2.mx/admin/spots?ic=0&ty=13%2C11%2C9%2C15&pt=3&pa=1&cu=1&pg=1&lm=50')
        //after clicking the admin button should no longer exist in new page
        cy.get(':nth-child(6) > .menu-link > .menu-title').should('not.exist')



        // select Nombre in the options
        cy.get('.css-4scu80 > .MuiInputBase-colorPrimary > .MuiSelect-select').click()
        cy.get('#menu- > .MuiPaper-root > .MuiList-root').contains('Nombre').click()
            .should('exist')
            .should('be.visible')
            .wait(100)
            .get('.MuiInputBase-input.MuiInputBase-inputSizeSmall.MuiOutlinedInput-input.css-1gg4sgi').type('Test')

    })
})