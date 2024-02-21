// trigger() method is used to programmatically trigger events on DOM elements. 
// This can be useful for simulating user interactions such as clicks, keypresses, etc.

describe('Mouse Operation', ()=> {

    it('mouse hover when parent has display property "none"', ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#mousehover').trigger('mouseover').click()
        cy.get(".mouse-hover-content").invoke('css', 'display', 'block');
        // we first use invoke() to modify the CSS display property of the parent......
        //  '.mouse-hover-content' element to 'block', making it visible. 
        // the below element is not visible because its parent has css property. which makes it invisible.
        // so we have to modify that property of parent element first in order to interact with below element.
        // most of the times the element does not have this property & we don't need to change it using invoke.

        cy.wait(2000)
        cy.get(".mouse-hover-content>:first-child").should('be.visible')
        cy.get('[href="#top"]').click()
    })

    it.only('simple mouse hover', ()=> {

        cy.visit('https://practice-automation.com/hover/')
        cy.get("#mouse_over").trigger('mouseover').click()
        cy.wait(2000)

        // after hovering the new text is displayed. so we are applying assertion wether that text is displayed or not
        cy.xpath("//h3[@id='mouse_over']").invoke('text').
            then((text) => {
                expect(text).to.equal('You did it!')
            })
    })

    it.only('Right clcik', ()=> {
        
    })
})