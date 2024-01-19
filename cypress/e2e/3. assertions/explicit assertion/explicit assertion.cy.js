
describe("exp assertion", () => {

    it("bdd approach", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()


        let expected_name = 'Test 13 Larry'

        // in explicit assertion we use stored the locator of an element and then use it later to put assertions on it
        // here x is storing the located element which we got through cy.get()
        
        cy.get(".oxd-userdropdown-name").then(  (x) => {

            let actual_name = x.text() 

            // Bdd Approach : we use expect keyword
            expect(expected_name).to.equal(actual_name)                  
            expect(expected_name).to.not.equal(actual_name)              // Negative Assertion


            // Tdd Approach : we use assert keyword
            assert.equal(expected_name,actual_name)
            assert.not.equal(expected_name,actual_name)

            
        })

    })

})