// for browser navigation we will use "go()" methode
//* through this command we can go forward, backward & reload the page.
//* manually we can do the above operations by using the symbols on top left corner of the browser.

describe('Browser Navigations test suit', () => {
    
    it('back, forward, reload', () => {
    
        cy.visit("https://practice-automation.com/")
        cy.title().should('eq', 'Home | Practice Automation')   //* verify title of home page that we are on h.page
        cy.clickLink('JavaScript Delays')
    })
  
})