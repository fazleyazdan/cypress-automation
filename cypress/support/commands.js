// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

    import 'cypress-xpath';
    import 'cypress-iframe'

/// <reference types = 'Cypress'/>
/// <reference types = 'Cypress-xpath'/>


//* here 'getIframe' is name of custom command. we will pass the locator of the iframe when calling it.
//* after calling the function it will return the iframe.

Cypress.Commands.add('getIframe', (iframe_locator) => {

    return cy.get(iframe_locator)
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap)
})

//* custom command for clicking the link through linktext or label

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})

//* as link is inside the anchor tag, so we captured all anchor tags
//* then we put validation on these links that it should contain a specific linktext/label.
//* when we use this custom command in 'custom_commands.cy.js'. we will pass the label/text of a link to it.

//* Over writing existing command
//* the above command which we wrote is case sensitive
//* Meaning, if we pass 'apple macbook' and the actual label is 'Apple Macbook'. then it will giver error
//* we have to make it case insensitve. for that we will modify 'contains()' command.
//* keep in mind that before modifying it, look at its internal structure it takes 4 parameters.

    
Cypress.Commands.overwriteQuery("contains", function (orignalFn, filter, text, options = {}) {

    //* typeof text == 'object': determine if any text/label is passed to contains methode
    if (typeof text === 'object') {
        // If text is an object, set userOptions and adjust arguments
        options = text;
        text = filter;
        filter = '';
    } 
    else if (typeof text === 'undefined') {
        // If text is undefined, adjust arguments
        text = filter;
        filter = '';
    }

    //* by default this is true. so we have to make it false to make it case insensitive
    options.matchCase = false;

    //* after over writing it, bind the function
    let orignalFnBound = orignalFn.bind(this);

    //* return the function by using 'originalFnBound'.
    return orignalFnBound(filter, text, options)
});


//* Custom command for login functionality of nop commerce

Cypress.Commands.add('loginApp', (username, password) =>{
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get("button[type='submit']").click()
})