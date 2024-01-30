

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

    // 'contains' can be used for dynamic drpdowns as well. each() is a jquery function and alternative to 'contains'.
    // we will use 'each' function. it will iterate each and every suggestion
    

    it('testing dynamic autosuggested dropdown', () => {
      
        cy.visit("https://www.google.com/")
        
        // when we type something into the input. a dropdown containing autosuggestion appear.
        // it is dynamic in a sense that the number of suggestion showed for an entry is vary.

        cy.get("#APjFqb").type('cypress automation')
        cy.wait(3000)     // it will take some time to show suggestions. better to use cy.wait()   

        cy.get("div.wM6W7d>span").each(($el, index, $list) => {

        if ($el.text() == 'cypress automation')            
        {
            cy.wrap($el).click()
        }

        // by typing something alot of keywords appear in suggestion. you can click your desired keyword by applying condition on it.
        // for example there is a keyword in suggestion 'cypress automation tutorial'. 
        // if you want to click it just replace 'cypress automation' in  if ($el.text() == 'cypress automation tutorial') 
        
        cy.get("#APjFqb").should('have.value', 'cypress automation')
        // after searching something in google , that word appear at the top seach bar. put assertion on it 
    
                    
        })
        // captured all suggestion after typing and then clicked our desired country

    })



  })


// When cy.wrap() is used in conjunction with .each(), it allows you to wrap each item in the collection obtained by cy.get()
// with a Cypress object. This can be helpful if you want to perform Cypress commands or assertions on each individual item 
// within the collection.

// In this example, cy.wrap($el) is used to wrap each $el (element) obtained from the collection in a Cypress object. 
// This allows you to use Cypress commands and assertions on each individual element within the .each() loop.
// The .each() function provides three parameters to the callback function:

// $el: The current element in the iteration.
// index: The index of the current element.
// $list: The entire list of elements.
// By wrapping $el with cy.wrap(), you ensure that you can use Cypress commands on each element separately, 
// as each element is now a Cypress object.