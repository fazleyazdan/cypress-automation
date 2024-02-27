// in this task i have used jquery function because the data is dynamic,
// and to put assertion on elements we don't know the content of the element in first place.
// that's why i have first retrieved the content of the elements using jquery functions.
// if the table was static then there are simple methods by which we can capture the text and elements.


describe ('Handling dynamic tables', () => {

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

    it('check number of dynamic rows & columns', () => {
        cy.get("div[class='oxd-table-body']>*")
            .its('length')                             
            .then((numberOfElements) => {
                // Asserting the number of rows
                cy.get("div[class='oxd-table-body']>*").should('have.length', numberOfElements)        //! assertion on number of rows [table is dynamic so no of rows can change]
    
                // Asserting the number of columns [number of col are static, there length won't change]
                cy.get(".oxd-table-header>div>div").should('have.length', '6')

                //* here we first located the elements, extracted its length and then stored it so that we can use it later for assertion 
                //* if the number of rows were static then we don't need to write jquery function
            })
    
        })

    it('check cell data from specific row & col', () => {
        cy.get(".oxd-table-body > .oxd-table-card:nth-child(5) > .oxd-table-row > :nth-child(4)")
        .invoke('text')                        
        .then((text) => {
            
            let capturedText = text
            expect(text).to.equal(capturedText)
        });

        // .invoke('text'): This Cypress command retrieves the text content of the selected element. 
        // It uses the invoke method with the argument 'text' to get the text.
        // .then((text) => { ... }): This part of the code specifies what to do after the text is retrieved. 
    })
                                                        

})