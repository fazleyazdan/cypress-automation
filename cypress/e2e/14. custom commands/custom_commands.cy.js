//! sometimes in cypress you have to write custom commands for performing certain tasks
//* we write custom commands in 'commands.js' in support folder
//! Note : for all custom commands we have wrote script in 'commands.js file'

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
    //* we will use contains() methode for this task to over write it. see 'commands.js' file for it.

    it('Over writing existing commands', () => {
       
        cy.visit("https://demo.nopcommerce.com/")
        
        //* Notice that the label which i have passed contains upper & lower case characters.
        //* comment the command in 'commands.js', it will give an error

        cy.clickLink("apple MACBOOK Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")

    
    })


    //* suppose there are steps which needs to be repeated for multiple test cases
    //* instead of writing it again & again we can create a custom command for it
    //* for example if login is required before an action or test case, then we can invoke custom command before that action or test case
    
    it.only('custom command for common features', () => {
        
        cy.visit("https://practice.expandtesting.com")
        cy.clickLink('Login Form')                          //* used custom command to click and proceed to login page
        cy.loginApp('practice', 'SuperSecretPassword!')     //* custom command for login 
        cy.get("div[id='flash']>b").should('have.text', 'You logged into a secure area!')

  })

})