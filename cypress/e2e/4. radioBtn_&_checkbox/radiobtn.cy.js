

describe('testing UI Elements', () => {

    it('testing radio buttons', () => {
      
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        // verifying if the radio buttons are visible
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // now to select or check a radio button
        // then apply assertion if the button is checked or not
        // at a time only one radio button can be checked. so check the status female radio button by applying assertion 
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')


        // do the opposit of the above case. 1: select female , 2: apply assertion on male rb
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

       



    })
    
  })