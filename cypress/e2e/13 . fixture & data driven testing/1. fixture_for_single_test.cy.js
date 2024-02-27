// in cypress, fixture is a folder in which we add test data files which can be used for testing
// it can be an image, an excel sheet or json file which contains some data in json format.
// for this task i have created a json file named 'practicetest.json' in fixture folder.
// this file contains login data for the 'practicetestautomation' website.

describe('fixtures test suit', () => {

   it('without using fixture', () => {

        cy.visit("https://practicetestautomation.com/practice-test-login/")   
        cy.get("#username").type("student")
        cy.get("#password").type("Password123")
        cy.get("#submit").click()
        cy.wait(2000)
        cy.get(".post-title").should('have.text', 'Logged In Successfully')
        cy.log("*** test case passed ***")

    }) 

    it.only('fixture Demo', () => {
        
        cy.visit("https://practicetestautomation.com/practice-test-login/")   
        cy.fixture('practicetest').then( (data) => {                 //! 'practicetest' is the name of file in fixtures folder
            cy.get("#username").type(data.username)
            cy.get("#password").type(data.password)
            cy.get("#submit").click()
            cy.wait(2000)
            cy.get(".post-title").should('have.text', data.expected)
        })
        cy.log("*** test case passed ***") 
        
        //* cy.fixture('practicetest) --> then(data) : data present in fixture is stored in 'data', so that we can use it further.
    }) 

}) 
 

