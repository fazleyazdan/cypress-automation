// cypress by default will handle alerts. we don't need to write separte code for that.

// but if you want to do some validations on alerts then you have to write scripts for that

// we will use events in order to do validations on alerts
    
//2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    
//3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'
    
//4) Authenticated Alert



describe('Alerts', () => {

//1) Javascript Alert: It will have some text and an 'OK' button

it('javascript alerts', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()
    
// to trigger the event we use 'cy.on' . now this alerts is stored in 'x' and passed to a function 
    cy.on('window:alert', (x) => {
        expect(x).to.contains('I am a JS Alert')                         // text from alert window                
    })

   })

})