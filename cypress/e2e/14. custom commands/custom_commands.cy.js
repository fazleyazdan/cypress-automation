//! sometimes in cypress you have to write custom commands for performing certain tasks
//* we write custom commands in 'commands.js' in support folder

describe('custom commands suit', () => {

    //* in selenium we can find a link through 'link text' or label. 
    //* but in cypress we can't do it. to do that we can write custom command for it.

    it('handling links', () => {
     
        cy.visit("https://demo.nopcommerce.com/")

        //! direct approach - without using custom commands
        // cy.get("h2.product-title>a[href$='/apple-macbook-pro-13-inch']").click()
        // cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")

        //! using custom commands
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")

    })

    //* Sometimes commands are already available but we need to over write it.
    //* to customize it and tailor it according to our needs
    //* we will use contains() methode for this task to over write it

    it.only('Over writing existing commands', () => {
       

    })

  })