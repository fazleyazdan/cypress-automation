// in this task i will handle dropdown having select tag
// 'it.skip' will skip the specific test when you execute the test suit
// 'have.value' assertion can be used drpdwn having select tag 
// 'have.text' is used with the bootstrap dropdowns 

// the main difference is that if the element store country in 'value' attribute then we use 'have.value'
// if the element store country name as a text then we use have.text to put assertion on it


describe('testing UI Elements', () => {

    it.skip('testing dropdown having select tag', () => {
      
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        // selecting the whole dropdown and then choosing a country from it
        cy.get("#country").select('India').should('have.value', 'India')


    })
    

    // bootstrap dropdown does not have select tag. they usually have span tag 

    it.skip('bootstrap dropdown without select tag', () => {
      
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        
        // clicking the dropdown. will appear the input box there you can type country name and then hit enter to select it
        cy.get("#select2-billing_country-container").click()
        
        // type into input box. if country name is present oonly that country name will be shown in the list after you type
        // type('{enter}')  will hit enter from keyboard and that particular country will be selected in the dropdown
        cy.get(".select2-search__field").type('pakistan').type('{enter}')

        // now after selecting the country we can put assertion on it. 
        cy.get("#select2-billing_country-container").should('have.text', 'Pakistan')

    })

    it('testing autosuggested dropdown', () => {
      
        cy.visit("https://www.wikipedia.org/")
        
        // when we type something into the input. a dropdown containing autosuggestion appear.
        // we will capture all the suggestion and by using 'contains' we will click our desired suggestion.

        cy.get("#searchInput").type('pakistan')
        cy.get(".suggestion-title").contains('Pakistan').click()
        
        // captured all suggestion after typing and then clicked our desired country

    })



  })