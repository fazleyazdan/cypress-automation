

describe('testing UI Elements', () => {


    it.skip('testing static autosuggested dropdown', () => {
      
        cy.visit("https://www.wikipedia.org/")
        
        // when we type something into the input. a dropdown containing autosuggestion appear.
        // we will capture all the suggestion and by using 'contains' we will click our desired suggestion.
        // it is static in a sense that the number of suggestion showed for an entry is always 5.
        cy.get("#searchInput").type('pakistan')
        cy.get(".suggestion-title").contains('Pakistan').click()
        
        // captured all suggestion after typing and then clicked our desired country

    })

    // for dynamic dropdown we can't use 'contains'.
    // we will use 'each' function. it will iterate each and every suggestion
    

    it('testing dynamic autosuggested dropdown', () => {
      
        cy.visit("https://www.google.com/")
        
        // when we type something into the input. a dropdown containing autosuggestion appear.
        // we will capture all the suggestion and by using 'contains' we will click our desired suggestion.
        // it is dynamic in a sense that the number of suggestion showed for an entry is vary.

        cy.get("#APjFqb").type('cypress automation')
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            
        })
        // captured all suggestion after typing and then clicked our desired country

    })



  })