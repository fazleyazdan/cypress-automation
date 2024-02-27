


describe('testing UI Elements', () => {

    it('testing checkboxes', () => {
      
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        // verifying if the checkbox is visible
        cy.get("#sunday").should('be.visible')

        // checking and uncheking single checkbox and applying assertion
        cy.get("#sunday").check().should('be.checked')
        cy.get("#sunday").uncheck().should('not.be.checked')

        // checking/selecting all the checkboxes at one time: [for that we need to write a common xpath or css selector]
        cy.xpath("//input[contains(@value,'day')]").check().should('be.checked')

        // unchecking/unselecting all the checkboxes at one time
        cy.xpath("//input[contains(@value,'day')]").uncheck().should('not.be.checked')

        // Selecting first or last checkbox among multiple checkboxes
        cy.xpath("//input[contains(@value,'day')]").first().check()
        cy.xpath("//input[contains(@value,'day')]").last().check().should("be.checked")


        


    })
    
  })