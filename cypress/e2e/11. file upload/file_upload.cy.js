// first install cypress file upload plugin. [npm install cypress --save-dev cypress-file-upload]

describe('handling file upload', ()=> {

    it('single file uplaod', ()=> {

        cy.visit("https://the-internet.herokuapp.com/upload")
        
    })
})