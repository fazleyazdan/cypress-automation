// apply assertions on url of the web page
// cy.url() return current url of the web page
// cy.url().should('include', 'orangehrmlive.com') --> validate the returned url if it contains certain text
// cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') --> 
// validate if the provided url matches with the captured url of the web page


describe('implicit Assertions', () =>{

    it('url assertion', () =>{

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')

        // instead of writing cy.url multiple times we can do chained assertion

       /* cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm') */

        // also we don't need to write should if there are multiple assertion for an element

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        
        // uncomment the above example if you want to check it . the last one is less coding compared to the others
    })
})