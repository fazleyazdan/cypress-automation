
describe('OrangeHRM Automation', () =>{

    it('verify title Positive-test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    /* cy.visit for visiting web*/
        cy.title().should('eq', 'OrangeHRM')                                              /* cy.title() captures title of a web */
    })

    it('verify title Negative-test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM777')
    })

})