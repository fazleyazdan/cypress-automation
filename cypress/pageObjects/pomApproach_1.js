//* we will use class & functions to create page object model for login page of OrangeHRM
//* Approach 1 : in this kind of pom we create action method/function for every element.
//* in this approach the locator and action methods are together

class Login
{
    typeUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username)
    }

    typePassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
   
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click()
        
    }

    verifyLogin()
    {
        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text', 'Dashboard')
    }

}

export default Login;