describe('static tables', () => {

    beforeEach('common steps', () => {

        cy.visit("https://practice-automation.com/")
        cy.xpath("//a[normalize-space()='Tables']").click()   

        })

    it.skip('check number of dynamic rows & columns', () => {
      
        cy.get("#tablepress-1>tbody>tr").should('have.length', 10)         //! assert on noOfRows: we already know there are 10 rows on every page
        cy.get("#tablepress-1>thead>tr>th").should('have.length', 3)       
    })

    it.skip('check cell data from specific row & col', () => {
        
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

    it.skip('extract cell data from all the rows & cols', () => {

        cy.get(".row-hover>tr").each( ($row, index, $rows)=> {

            cy.wrap($row).within( ()=> {

                cy.get('td').each( ($col, index, $cols) =>{
                    cy.log($col.text())

                })

            })
       
        })

        //* cy.get(".row-hover>tr"): capture all the rows from table
        // each( ($row, index, $rows): each() does the operation for every row captured
        // *$rows represents all the rows captured
        // index represents index of the row 
        //* and '$row' represents the current row in operation
        // .within(): if you want to access the element within each row then we use it....
        //* in our case we are accessing the 'td' which represent column within each row
        // each( ($col, index, $cols): same like the rows explained above. now iterating the cols
        //* cy.log($col.text()): print the all the cells data in the table & displays it on cypress test runner.

    })

    it.skip('cutting text from a sentence (substring)', () => {
        
        let cutting_string;
        cy.get("#tablepress-1_info").then( (elem) => {

           let etext = elem.text()                               // Showing 1 to 10 of 25 entries
           cutting_string = etext.substring(etext.indexOf("of")+1, etext.indexOf("entries")-1)
           cy.log("total number of entries in the table are:" + cutting_string) 
        })

        // here i used substring to cut string from the rest of the text
        // in substring we pass two parameters. the starting and the ending. in b/w we separate the text from the rest
        // we add 1 to the first 1st because the index of 25 is ahead of the text "of"
        // we substracted -1 from the 2nd parameter because the the index of 25 is one less than "entries" 
    })
    

})

    it.only('extracting data from the pagination table all rows & cols', () => {

        cy.visit("http://makeseleniumeasy.com/2020/05/09/storing-web-table-with-pagination-data-into-list-of-map-java/")

        let total_pages = 6
        //div/span/a[3] 
        // span>.paginate_button:nth-child() alternative locator
        for (let i=1; i<=total_pages; i++)
        {
            cy.log("current active page is ====>" + i)
            
            cy.xpath("//div/span/a["+i+"]").click()
            //* ["+i+"] this is the syntax when you pass parameter to xpath or css selector. wrap the paramter in + +
                
            cy.wait(2000)
            cy.get("#dtBasicExample>tbody>tr").each( ($row, index, $rows) => {

                cy.wrap($row).within( () =>{

                    // print the values of col 1 only... if you wanna print other col value change col no in nth-child
                        cy.get("td:nth-child(1)").then( (ele) => {
                        cy.log(ele.text())
                    
                    })
                
                })
            
            })
        
        }
            
    })