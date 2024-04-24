// cypress by default will handle alerts. we don't need to write separate code for that.
// but if you want to do some validations on alerts then you have to write scripts for that
// we will use events in order to do validations on alerts
//! Note : There are many test cases but i have used 'it.only', so only one test case will be executed.
//! remove it if you want to run other test cases.  

describe('Alerts', () => {

    //! 1) Javascript Alert: It will have some text and an 'OK' button

    it('javascript alerts', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()
    
    // to trigger the event we use 'cy.on' . now this alerts is stored in 'x' and passed to a function 
    cy.on('window:alert', (x) => {
        expect(x).to.contains('I am a JS Alert')                              //* text from alert window                
    })

    cy.get("#result").should('have.text',"You successfully clicked an alert")  //this text is displayed when after clicking alert
   })



    //* 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    // for confirm alert we will use another event, 'window:confirm'
    // confirm alert has 'ok' and 'cancel' button. and by default cypress will click 'ok' button to close the alert
    // To close confirm alert using 'cancel' button we will use another event


    it('JS confirm alerts - click Ok', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (x) => {
    
        expect(x).to.contains('I am a JS Confirm')
    
    })
    
    cy.get("#result").should('have.text','You clicked: Ok')        //this text is displayed after clicking alert

   })

    //*  close confirm alert using cancel button   

   it('JS confirm alerts - click Cancel', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (x) => {
    
        expect(x).to.contains('I am a JS Confirm')
    
    })
    
    cy.on('window:confirm', () => false)
    cy.get("#result").should('have.text','You clicked: Cancel')        //this text is displayed after clicking alert

   })


     //! 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' and 'Cancel' button
     //    As the alert is closed automatically by cypress using ok button. so we have to input text in box before trigerring the alert   
     
     it('JS prompt alerts - click Ok', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")    
        // cy.window referrs to alert window, then we stored the window. and passed it to cy.stub.
        // in second argument in the cy.stub we specify that it is 'prompt' window.
        // finally to type in the input box we write it in the returns function.

        cy.window().then( (win)=> {

            cy.stub(win, 'prompt').returns('welcome')
        })
        
        cy.get("button[onclick='jsPrompt()']").click()


        // cy.on('window:confirm', (x) => {           //* if you want to validate the text on alert window, uncomment it.
        
        //     expect(x).to.contains('I am a JS Prompt')
        
        // })
        
        cy.get("#result").should('have.text','You entered: welcome')  
    
        })
    
        //! 4) Authenticated Alert : we have to enter user name and password

        it.only('Authenticated alerts', () => {

            //* approach 1:

            // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: {username: "admin", password: "admin"}})
            // cy.get("p").should('have.contain', "Congratulations")  
            // if the text is too big and you want to check that the text includes a specific text then we use 'contain' in assertion
        
            //* approach 2: this is called 'injection'. we pass username and password along with the URL.
            
            cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
            cy.get("p").should('have.contain', "Congratulations")  

        })
             
})