// in cypress, fixture is a folder in which we add test data files which can be used for testing
// it can be an image, an excel sheet or json file which contains some data in json format.
// for this task i have created a json file named 'practicetest.json' in fixture folder.
// this file contains login data for the 'practicetestautomation' website.

describe('fixtures test suit', () => {

    /* it.only('fixture for single it block', () => {
        
        cy.visit("https://practicetestautomation.com/practice-test-login/")   
        cy.fixture('practicetest').then( (data) => {                 //! 'practicetest' is the name of file in fixtures folder
            cy.get("#username").type(data.username)
            cy.get("#password").type(data.password)
            cy.get("#submit").click()
            cy.wait(2000)
            cy.get(".post-title").should('have.text', data.expected)
        })
        cy.log("*** test case passed ***") 
        
    }) */

    //* suppose the data in fixture is required for multiple 'it' blocks
    //* by using the above approach we have to write the fixture block in every test case.
    //* we can use fixture in beforeEach hooks then capture the data from it to use it for multiple it blocks 
    //* we can store the capture data in a variable and use it across different test cases.
    
    let userdata
    beforeEach('testing fixture', () =>{
        cy.fixture('practicetest').then( (data) => {
            userdata = data
        })
    })

    it.only('using fixture through hooks', () => {

        cy.visit("https://practicetestautomation.com/practice-test-login/")   
        cy.get("#username").type(userdata.username)
        cy.get("#password").type(userdata.password)
        cy.get("#submit").click()
        cy.wait(2000)
        cy.get(".post-title").should('have.text', userdata.expected)
        cy.log("*** test case passed ***") 

     })
        

  })


