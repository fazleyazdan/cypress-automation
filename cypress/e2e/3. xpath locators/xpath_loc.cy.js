// find the total number of images in a web using xpath
// cy.xpath("//img").should('have.length', 1): this is assertion ...
// here we are expecting that the len of img tag is 1 in the web page.

describe("Practcing xpath", () => {

    it("find total num of images", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//img").should('have.length', 1)                    
    })
})