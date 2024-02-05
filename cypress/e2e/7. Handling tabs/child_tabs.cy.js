//* Handling Child Tabs
//! Note : read 'readme' before starting this

describe('Handle Tab Approach 1', () =>{

    it('Approach 1', () =>{

        cy.visit('https://the-internet.herokuapp.com/windows')           // Parent Tab
        
        // first remove the 'target' attribute to prevent the page opening on a new tab.

        cy.get(".example > a").invoke('removeAttr', 'target').click()   // child tab

        cy.wait(3000)
        // lets suppose you have done some operation on child tab and wanna go back to parent tab
        cy.go('back')

       
    })

})   