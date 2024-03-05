// for browser navigation we will use "go()" methode
//* through this command we can go forward, backward & reload the page.
//* manually we can do the above operations by using the symbols on top left corner of the browser.

describe('Browser Navigations test suit', () => {
    
    it('back, forward, reload', () => {
    
        cy.visit("https://practice-automation.com/")
        cy.title().should('eq', 'Home | Practice Automation')   //* verify title of home page that we are on h.page
        
        // cy.get("#javascriptdelay").click()
        cy.clickLink('JavaScript Delays')                   //* used custom commands to click and go to the other page
        cy.title().should('eq', 'JavaScript Delays | Practice Automation')   //* verify title of the other page
        cy.go('back')                       //* go back to home page
        
        cy.title().should('eq', 'Home | Practice Automation')   //* verify title of home page that we are on h.page
        cy.go('forward')
        cy.title().should('eq', 'JavaScript Delays | Practice Automation')   //* verify title of the other page
        
        cy.reload()

        //! alternative to 'back' & 'forward'
        cy.go(-1)                       //* go back to home page
        cy.title().should('eq', 'Home | Practice Automation')   //* verify title of home page that we are on h.page
        cy.go(1)                        //* go forward
        cy.title().should('eq', 'JavaScript Delays | Practice Automation')   //* verify title of the other page
        
        cy.reload()
    })
  
})