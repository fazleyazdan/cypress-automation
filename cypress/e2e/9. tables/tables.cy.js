
describe ('Handling tables', () => {

    //* beforeEach hooks: in this block we write steps which we want to execute before each test case.
    //! one of its benefit is that it reduce lines of code and repetition.

    beforeEach('loginfirst', () => {

        //* cy.intercept is used to bypass the cloudflare sercice.
        //* user-agent is used to mimic the human behavior 

        // cy.intercept('GET', 'https://demo.opencart.com/admin/*', (req) => {
        //     req.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36';
        // }).as('loginRequest');

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()

        // cy.wait('@loginRequest')                  //! Wait for the login request to complete
        // cy.get(".btn-close").click()              //! close popup alert after login
        cy.xpath("//ul/li/a/span[contains(.,'Admin')]").click()
    })

    it('check number of rows & columns', () => {
        cy.wait(3000)
        cy.get("div[class='oxd-table-body']>*").should('have.length', '23')                   //! assertion on number of rows [table is dynamic so no of rows can change]
        cy.get(".oxd-table-header>div>div").should('have.length', '6')                        //! assertion on number of columns

    })

})