describe('static tables', () => {

    beforeEach('common steps', () => {

        cy.visit("https://practice-automation.com/")
        cy.xpath("//a[normalize-space()='Tables']").click()   

        })

    it.only('check number of dynamic rows & columns', () => {
      
        cy.get("#tablepress-1>tbody>tr").should('have.length', 10)         //! assert on noOfRows: we already know there are 10 rows on every page
        cy.get("#tablepress-1>thead>tr>th").should('have.length', 3)       
    })

    it('test case 2', () => {
        expect(true).to.equal(false)
      })

  })