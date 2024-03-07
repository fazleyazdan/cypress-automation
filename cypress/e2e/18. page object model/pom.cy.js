//* Normally when we execute a test case we write the locators and then corresponding action in the same test case. 
//* Drawbacks : one of the drawbacks of that approach is that 
//* 1: if we need those locators again to perform some action we have to catch it and write it again. So duplication occurs.
//* 2: Another drawback is the Updation. Suppose if the locator of an element is changed.... 
//* Then we have to update the Locator across multiple test cases. 

//*  Page Object Model (Pom) : Page object model pattern is a separate file in which we store all locators of a page That we need. 
//* One of the benefit of pom is that the locators are separated from the rest of the script and we no need to write it again.
//* Pom supports the idea to store all locators once and use it whenever it is needed.

//* For every page there will be a separate page object model

//! Note : for POM we will create a new folder in cypress called "pageObjects". and to use it we have to import it

import Login from "../../pageObjects/pomApproach_1";
import SecondLogin from "../../pageObjects/pomApproach_2";

describe("page object model", ()=> {

    it('without pom', ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text', 'Dashboard')

    })

    //* used 'pomApproach_1' file for this test case
    it('using page object model - approach 1', ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //* to access page object class members we have to create its object first
        const pomObject = new Login()

        pomObject.typeUsername('Admin')
        pomObject.typePassword('admin123')
        pomObject.clickSubmit()
        pomObject.verifyLogin()

    })

    //* used 'pomApproach_2' file for this test case
    //! note: nothing changed in test case, only pom file is changed

    it.only('using page object model - approach 2', ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //* to access page object class members we have to create its object first
        const pomObject = new SecondLogin()

        pomObject.typeUsername('Admin')
        pomObject.typePassword('admin123')
        pomObject.clickSubmit()
        pomObject.verifyLogin()

    })

    //* passing data from fixtures file instead of hardcoding data

    it.only('Pom with Fixtures - approach 2', ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        const pomObject = new SecondLogin()
        
        cy.fixture('orangehrm').then((data) =>
        {
            pomObject.typeUsername(data.username)
            pomObject.typePassword(data.password)
            pomObject.clickSubmit()
            pomObject.verifyLogin()

        })
    })
})