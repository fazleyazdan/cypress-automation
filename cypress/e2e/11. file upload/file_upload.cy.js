// first install cypress file upload plugin. [npm install cypress --save-dev cypress-file-upload]
//! Note : keep the file in fixture folder, that you want to upload 

describe('handling file upload', ()=> {

    it('single file uplaod', ()=> {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('dummy-1.pdf')     //! '#file-upload' locator of choose file   
        cy.get("#file-submit").click()
        cy.wait(3000)
        //* after uploading a file , 'file uploaded' message is displayed. put assertion on it.
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it('single file uplaod - rename file when uploading', ()=> {
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

    it('single file upload - drag & drop', ()=> {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('dummy-1.pdf', {subjectType: 'drag-n-drop'})
        cy.wait(2000)
        //* assertion on the name of the uploaded file 
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains( 'dummy-1.pdf')
    })

    it('multiple file upload', ()=> {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        
        //* if more than one file, we use list for that purpose. 
        cy.get("#filesToUpload").attachFile(['dummy-1.pdf','dummy-2.pdf'])
        cy.wait(2000)
        
    })

    it.only('file upload - shadow DOM', ()=> {
        //! shadow dom also called sub dom. it cannot be accessed by XPATH locators, use css selectors
        //* we will add a parameter in cy.get with the locator in order to interact with it.

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile('dummy-2.pdf')
        cy.wait(2000)
        cy.get(".smart-item-name", {includeShadowDom:true}).should('have.text','dummy-2.pdf')
        
    })
})

