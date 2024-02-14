describe('static tables', () => {

    beforeEach('common steps', () => {

        cy.visit("https://practice-automation.com/")
        cy.xpath("//a[normalize-space()='Tables']").click()   

        })

    it('check number of dynamic rows & columns', () => {
      
        cy.get("#tablepress-1>tbody>tr").should('have.length', 10)         //! assert on noOfRows: we already know there are 10 rows on every page
        cy.get("#tablepress-1>thead>tr>th").should('have.length', 3)       
    })

    it.only('check cell data from specific row & col', () => {
        
        // extract cell data from col 3 of row 5
        let country = cy.get(".row-hover>tr:nth-child(5)>td:nth-child(2)")
        let population = cy.get(".row-hover>tr:nth-child(5)>td:nth-child(3)")

        cy.wait(3000)
        country.should('have.text', 'Pakistan')
        population.should('have.text', '240.5')

        country.invoke('text').then((text) => {

            cy.log(`country name is ${text}`)

        })

      })

      it.only('check cell data from specific row & col', () => {
        

      })


  })