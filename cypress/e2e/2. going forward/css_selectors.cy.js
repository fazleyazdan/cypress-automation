// practicing css selectors


describe('Test case: css selectors', () =>{


    it('searching', () => {

        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type('Nokia')   //** search by id **//
        cy.get(".search-box-button").click()        //** search by class **//

        // lets do some validation. wether 'nokia' is typed and searched or not

       cy.get('#q').should(($input) =>{
            cy.expect($input.val()).to.equal('Nokia')

           })

        })

    })


    // in the example code I provided, ($input) is a parameter passed to the callback function within the .should() command. 
    // you can write anything in place of input. it is just a representation
    // This parameter represents the subject of the assertion, which, in this case, is the input field with the id "q".

    // cy.get("#q"): Selects the element with the id "q".
    // .should(callback): Performs assertions on the subject, which is the result of the cy.get("#q") command.

    // ($input) => { ... }: The callback function takes the selected element (in this case, the input field with the id "q") as a parameter,.... 
    // and this parameter is represented by $input in the function.
    // Inside the callback function, expect($input.val()).to.equal('Nokia') checks that the value of the input field is equal to 'Nokia'. 
    // The .val() method is used to retrieve the current value of the input field.