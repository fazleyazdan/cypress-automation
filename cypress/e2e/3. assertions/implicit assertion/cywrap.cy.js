//* To use cypress assertions or other methods you have to convert that element using cy.wrap() to enjoy the privilleges
//* because the element is in javascript, cypress does not know about it, that's why you have to convert it  

describe("understanding cy.wrap()", () => {

        it('Wrap Variables/Objects/Arrays etc', () => {

        // Check Variable has specific Value
        let name = "QA BOX LET'S TEST"
        // name.should("eq", "QA BOX LET'S TEST")        //* this will throw error "name.should is not a function"
        cy.wrap(name).should("eq", "QA BOX LET'S TEST")

        // Check Object has a certain Property and Value
        let channel = { name: "QA BOX LET'S TEST" }
        cy.wrap(channel).should("have.property", "name", "QA BOX LET'S TEST")
        
        // Check Array includes an Item
        let playlists = ["JavaScript", "TypeScript", "Cypress", "Mocha, Chai & Sinon",
        "jQuery", "Xpath", "Important API Testing 101 Concepts", "Postman"]
        // playlists.should("include", "Cypress")        //* this will throw error "playlists.should is not a function"
        cy.wrap(playlists).should("include", "Cypress")     
        
        })
})