describe('Demo', ()=> {

    it('practice', ()=> {

        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.wait(3000)

        cy.get("button[onclick='myFunction()']").should('contain', 'New Browser Window')
        
    })
})