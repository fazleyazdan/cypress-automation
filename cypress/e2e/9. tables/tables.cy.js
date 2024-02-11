
describe ('Handling tables', () => {

    //* beforeEach hooks: in this block we write steps which we want to execute before each test case.
    //! one of its benefit is that it reduce lines of code and repetition.

    beforeEach('loginfirst', () => {
        cy.visit("https://demo.opencart.com/admin/")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()              //! close popup alert after login
        cy.get("#menu-customer>a").click()
        cy.get("#collapse-5>li:first-child").click()
    })

    it('check number of rows & columns', () => {

        cy.get(".table>tbody>tr").should('have.length', '10')                //! assertion on number of rows
        cy.get(".table>thead>tr>td").should('have.length', '7')              //! assertion on number of columns

    })

})