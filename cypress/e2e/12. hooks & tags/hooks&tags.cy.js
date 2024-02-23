//! main purpose of hooks is, if you wanna execute any pre requisite before or after the execution of test cases, we use hooks

//! we have 4 types of hooks in cypress:
//* before: this will execute one time: before execution of first test case in a test suit  
//* after: this will execute one time after the execution of last 'it' block/test case in a test suit.   
//* beforEach: this will execute multiple times: before execution of every 'it' block. 
//* afterEach: this will execute multiple times: after the execution of every 'it' block. 

//! tags: 'only' & 'skip' are two man tags we use in cypress for executing or skipping specific test cases.

describe('hooks & tags', ()=> {

    before('before block',()=>{

        cy.log("***** Launch app *****")
    })

    after('after block',()=>{
        
        cy.log("***** close app *****")
        
    })

    beforeEach('beforeEach block',()=>{
        
        cy.log("***** Login to app *****")

    })
    
    afterEach('afterEach block',()=>{
        
        cy.log("***** Logout from app *****")

    })


    it('search', ()=> {

        cy.log("***** Searching *****")

    })

    it('Advance search', ()=> {
    
        cy.log("***** Advance Searching *****")

    })

    it('interaction with items', ()=> {
    
        cy.log("***** last Interaction *****")
    })

})