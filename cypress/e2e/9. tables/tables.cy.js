
describe ('Handling tables', () => {

    //* beforeEach hooks: in this block we write steps which we want to execute before each test case.
    //! one of its benefit is that it reduce lines of code and repetition.

    beforeEach('loginfirst', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()

       
        // cy.get(".btn-close").click()              //! close popup alert after login
        cy.xpath("//ul/li/a/span[contains(.,'Admin')]").click()
    })

    it('check number of rows & columns', () => {
        cy.get("div[class='oxd-table-body']>*")
            .its('length')                             
            .then((numberOfElements) => {
                // Asserting the number of rows
                cy.get("div[class='oxd-table-body']>*").should('have.length', numberOfElements)        //! assertion on number of rows [table is dynamic so no of rows can change]
    
                // Asserting the number of columns [number of col are static, there length won't change]
                cy.get(".oxd-table-header>div>div").should('have.length', '6')

                //* here we first located the elements, extracted its length and then stored it so that we can use it later for assertion 
            })
    
        })
                   
                                      

})