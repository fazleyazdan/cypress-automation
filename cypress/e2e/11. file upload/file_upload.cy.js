// first install cypress file upload plugin. [npm install cypress --save-dev cypress-file-upload]
//! Note : keep the file in fixture folder, that you want to upload 

describe('handling file upload', ()=> {

    it('single file uplaod', ()=> {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('dummy-1.pdf')
        cy.get("#file-submit").click()
        cy.wait(3000)
        // after uploading a file , 'file uploaded' message is displayed. put assertion on it.
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it.only('single file uplaod - rename file when uploading', ()=> {
        //* change the name of file at the time of upload. 
        //* filePath refers to the actual file in fixture folder.
        //* fileName used for changing the file name. 

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'dummy-1.pdf', fileName: 'namechanged.pdf'})
        cy.get("#file-submit").click()
        cy.wait(3000)
        // after uploading a file , 'file uploaded' message is displayed. put assertion on it.
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    
})

