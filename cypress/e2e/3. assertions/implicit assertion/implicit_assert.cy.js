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


       // we can also use not.eq, not.contain and not.include in assertions

    it('negative assertion', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('not.include', 'orangehrmlive.commm')
        .and('not.eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login[distort url]')  // distort the url for this
        .and('not.contain', 'greenhrm')
       
    })

    it('assertion on title', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')  
        .and('contain', 'HRM')
        
       
    })


// > sign incicates child of 
// in assertion it is good to check whether the 1. element is visible and 2. the element exist

it('assertion on logo', () =>{
    
    // simple version
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.get('.orangehrm-login-branding > img').should('be.visible')  
    // cy.get('.orangehrm-login-branding > img').should('exist')


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-branding > img').should('be.visible')  
    .and('exist')
   
})

it('assertion :validate number of elements', () =>{
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.xpath('//a').should('have.length', '5')  
})

it('validate the typed username', () =>{
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.xpath("//input[@placeholder='Username']").type('Admin')
    cy.xpath("//input[@placeholder='Username']").should('have.value', 'Admin')

})
})