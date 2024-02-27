// test driven by data is called data driven testing
//* in this demo, we will use the previous example of login and then validate the message.
//* we will test the login feature by using data from fixtures. we have 3 sets of data in json file
//* --> valid credentials, i.e valid username and valid password 
//* --> valid username and invalid password
//* --> invalid username and valid password

//* cy.fixture('practicetest1') --> then(data) --> foreach(userdata)

//* 1. cy.fixture('practicetest1'): returns 'practicetest1' from fixture folder
//* 2. then(data): it contains all the data which is inside the 'practicetest1' file
//* 3. foreach(userdata): iterates individual set of data from collection of data 

describe('data driven testing', () =>{

    it('datadrivendemo', () => {

        cy.visit("https://practicetestautomation.com/practice-test-login/") 
        cy.fixture('practicetest1').then( (data) => {
            data.forEach((userdata) => {
                cy.get("#username").type(userdata.username)
                cy.get("#password").type(userdata.password)
                cy.get("#submit").click()
                
                //* for valid credentials
                if(userdata.username == 'student' && userdata.password == 'Password123')
                {
                    cy.get(".post-title").should('have.text', userdata.expected)
                    //* logout in case of valid credentials because we have to test the invalid credentials
                    cy.get(".wp-block-button__link").click()
                    cy.log("**** Valid credentials ****")

                }
                //* for invalid credentials
                else
                {
                    cy.get('#error').should('have.text', userdata.expected)
                    cy.log("**** Invalid credentials ****")
                }
            })
        })
    })
})