//* Handling Child Tabs
//! Note : read 'readme' before starting this

describe('Handle Tabs', () =>{

    it('Approach 1', () =>{

        cy.visit('https://the-internet.herokuapp.com/windows')           // Parent Tab
        
        // first remove the 'target' attribute to prevent the page opening on a new tab.

        cy.get(".example > a").invoke('removeAttr', 'target').click()   // child tab

        cy.wait(3000)
        // lets suppose you have done some operation on child tab and wanna go back to parent tab
        cy.go('back')

    })

    //!  Approach 2:
    //* we know that an anchor tag has 'href' attribute, in which we specify the url of the target window/tab.
    //* Now in this approach we will capture the value of 'href' and then we will use another 'cy.visit' to visit that page.
    //! this approach has a limitation. the domain of the child and parent should be the same. otherwise the child tab won't be accessed
    //* this is the domain 'https://the-internet.herokuapp.com'. it must be same.
    //* sub domain can be anything. ie. '/windows' or 'window/new'.

    it.only('Approach 2', () =>{

        cy.visit('https://the-internet.herokuapp.com/windows')         
        
        // we will use 'Jquery' Function to capture 'href'. 

        cy.get(".example > a").then((e) => {
            let url = e.prop('href')                     //! "e.prop" capture the property. which is 'href' in this case.
            cy.visit(url)    
        })

        //* now lets validate the url. if we have accessed the child tab or not
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(3000)
        cy.go('back')

    })

})   