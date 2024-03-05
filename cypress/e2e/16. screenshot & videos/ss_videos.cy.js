//* one of the powerful feature of cypress is screenshot & videos whenever you want
//* cypress capture screenshot & video at the time of test failure but you have to run the testcase via terminal
//! you can also capture the screenshot of a specific element
//* when you capture screenshot by default it will be saved in screenshot folder.

describe('capturing screenshot & videos', ()=> {

    it('capturing screenshots', ()=> {

        cy.visit("https://practice.expandtesting.com/")
        cy.wait(3000)
        cy.screenshot("homepage")          //! if you leave it empty. by default it will give some random name to screenshot

        //* capture screenshot of a specific element on web page
        cy.get("a[aria-label='SUT']").screenshot("logo")

        //! after capturing screenshot, navigat to screenshot folder to see the result

    })

    //* cypress capture screenshot & video auto at the time of test failure but you have to run the testcase via terminal/cli
    //* to capture videos. add this in 'cypress.config.js'. video:true, (it is false by default)
    it.only('Auto capture ss & videos', ()=> {

        cy.visit("https://practice.expandtesting.com/")
        cy.xpath("//a[normalize-space()='Web inputs']").click()
        cy.get("div[class='container'] h1").should('have.text', 'Web innnnnpput')        //* wrong assertion so that test case fail
    })

})
