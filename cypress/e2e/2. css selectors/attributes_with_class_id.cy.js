    //* find web element using attribute with class and id


describe('Test case: css selectors', () =>{


    it('using attribute with class and id', () => {

        cy.visit("https://demo.nopcommerce.com/")
        // cy.get("[placeholder='Search store']").type('Nokia')                      //** using attribute **/
        cy.get("#small-searchterms[placeholder='Search store']").type("Nokia")   //** id & attribute */
        cy.get(".search-box-button[type='submit']").click()                     //** search by class and attribute **/
    
    })

})