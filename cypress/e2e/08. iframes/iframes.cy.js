//! cypress by default can't handle iframes, however we will use certain methods to achieve our purpose
//* in iframe there is separate html document. i.e head, title , body 

import 'cypress-iframe'

describe('Handling Iframes', () =>{

    it('Approach 1', () =>{

        cy.visit('https://the-internet.herokuapp.com/iframe')           // Parent Tab
        
        let iframe = cy.get("#mce_0_ifr")
                        .its("0.contentDocument.body")
                        .should("be.visible")
                        .then(cy.wrap)
                
        
        iframe.clear().type("Welcome! {ctrl+a}")                       // {ctrl+a} will select the entire text inside the text box
        cy.get("button[title='Bold']").click()                         // click button to bold the text

        //* let iframe = cy.get("#mce_0_ifr")     get iframe
        
        //! .its("0.contentDocument.body")        
        //* to access doc inside iframe we use 'its' method. there is only one doc inside the iframe, so 0 is used.
        //! .its() is a Cypress command used to access properties of the previous subject.
        //* In this case, it's accessing the property contentDocument.body of the first element within the iframe.
        //* This is typically how you would access elements inside an iframe using Cypress.
        
        //* '.contentDocument' is used to access the content of the document.in our case are accessing the text, which is inside the body.  
        
        //* .should("be.visible") : Assertion on the body that we are accessing should be visible
        
        //! .then(cy.wrap) 
        //* sometimes we use jquery function to on an element to get the job done.
        //* now to use cypress commands/methods with that element you have to convert it back to cypress layer. using cy.wrap
        //* .then(cy.wrap) is a Cypress command that wraps the previous subject (the body element inside the iframe) and returns it.
        //* This is useful for chaining further Cypress commands to interact with the wrapped subject.

    })

    it('Approach 2 - cypress custom commands', () =>{

        //* in cypress we write custom commands in commnand.js.
        //* if we want to use the same iframe in other test case we have to write it again, which is time consuming.
        //* instead we will make a custom command by avoiding repeatition and saving time.

        cy.visit('https://the-internet.herokuapp.com/iframe')           // Parent Tab
        
        cy.wait(5000)
        cy.getIframe('#mce_0_ifr').clear().type("Welcome! {ctrl+a}")                           
        //* we pass locator of iframe to function, now we can chain the other commands as well
        
        cy.get("button[title='Bold']").click()                         

    })
    
    it.only('Approach 3 - by using cypress-iframe plugin', () =>{

        //* first install plugin 'npm install -D cypress-iframe' and then 'import cypress-iframe'

        cy.visit('https://the-internet.herokuapp.com/iframe')         
        
        cy.frameLoaded('#mce_0_ifr')                                 //* load/switch to iframe
        cy.iframe('#mce_0_ifr').clear().type("Welcome! {ctrl+a}")    //* cy.iframe used to interact with the iframe
        cy.get("button[title='Bold']").click()                         

    })   

})