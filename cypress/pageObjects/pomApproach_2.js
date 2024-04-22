//* we will use class & functions to create page object model for login page of OrangeHRM
//* Approach 2 : in this kind of pom the locators are outside the action methods.
//* in this approach the locator and action methods are separate

class SecondLogin
{
    
    userNameLoc = "input[placeholder='Username']"
    passwordLoc = "input[placeholder='Password']"
    loginBtnLoc = "button[type='submit']"
    verifylogLoc = ".oxd-topbar-header-breadcrumb>h6"

    typeUsername(username)
    {
        cy.get(this.userNameLoc).type(username)            //! this refers to current class
    }

    typePassword(password)
    {
        cy.get(this.passwordLoc).type(password)
   
    }

    clickSubmit()
    {
        cy.get(this.loginBtnLoc).click()
        
    }

    verifyLogin()
    {
        cy.get(this.verifylogLoc).should('have.text', 'Dashboard')
    }

}

export default SecondLogin;