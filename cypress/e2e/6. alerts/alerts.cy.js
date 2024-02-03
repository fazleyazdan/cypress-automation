// cypress by default will handle alerts. we don't need to write separte code for that.

// but if you want to do some validations on alerts then you have to write scripts for that

// we will use events in order to do validations on alerts
        
//3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'
    
//4) Authenticated Alert



describe('Alerts', () => {

//1) Javascript Alert: It will have some text and an 'OK' button

it('javascript alerts', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()
    
    // to trigger the event we use 'cy.on' . now this alerts is stored in 'x' and passed to a function 
    cy.on('window:alert', (x) => {
        expect(x).to.contains('I am a JS Alert')                            // text from alert window                
    })

    cy.get("#result").should('have.text',"You successfully clicked an alert")  //this text is displayed when after clicking alert
   })



//2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
// for confirm alert we will use another event, 'window:confirm'
// confirm alert has 'ok' and 'cancel' button. and by default cypress will click 'ok' button to close the alert


it.only('javascript confirm alerts', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (x) => {
    
        expect(x).to.contains('I am a JS Confirm')
    
    })
    
    cy.get("#result").should('have.text','You clicked: Ok')        //this text is displayed after clicking alert

   })

})