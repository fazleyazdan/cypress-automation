# This project contains best practices for automating web apps with cypress.

# Here i wrote scripts for automating web apps which will give beginners an idea and understanding of automating web apps with cypress.


# Cypress : Frontend web Automation Tools. 
	          Used for modern web application
	          Open Source Software Except (Dashboard)
	
	
**Traditional web apps** : html, CSS, JS etc.
**Modern Web apps** : React , Node, Angular etc.

*Through cypress we can automate any application which runs on browser*

**Language** : JS is used in Cypress

**Environment** : Node.js
*Cypress built on node JS env*

**Example** : if you want to run any java you need JRE
# Similarly to run cypress you need to setup Node.js Env
# It comes with NPM module. We will install libraries from npm

**Who can use Cypress** : 
##### --> to automate End-to-End(E2E) test cases
##### --> Integration Tests
##### --> Unit Test cases 
##### --> API Testing

**So the answer is both Dev and QA people can also use it**


**Cypress VS Selenium:**



**Cypress Eco System:**

	1. Test Runner (Free) : Open Source Locally Installed (used for setting and       running Test cases scripts)
	
	2. Dashboard  (Paid) : used for test reporting and maintaining test history
	

**Features:**
	1. Time Travel : You can go back to previous steps as well as next steps. 
	2. Screenshot & video : Cypress will capture screenshot for every statement
	For example : there are 10 lines of code. For every line of execution 
	Cypress will capture the screenshot. But the main thing is maintaining the 
	History.
	3. Debuggability : Debugging is easy
	4. Built in wait : Hence no synchronization error. (No Explicit or implicit wait)
	5. Consistent results 
	6. Cross Browser Testing 

**Limitations :**
	1. We can't automate window or mobile based apps
	2. Limited support
	3. Only support JS and TypeScript 
	4. Reading from and writing data into external file is little bit tricky.
	5. Third party reporting tools integration is also difficult


**Environment Setup:**

1) Download & install nodejs

2) Download & install visual studio code (VSCode)

3) create a new folder for project & open in VSCode

4) open cmd/terminal then execute below command

npm -i init --> creates package.json file

5) to install cypress
```npm install cypress -- save -dev```

6) start cypress
```npx cypress open```    
        (or)
```node_modules/.bin/cypress open```


**Package.json file :** this file contains libraries that we install and use. Its like java's pom.xml.

**Step 5:** if somehow you move your project to another location then cypress won't be working. Because we have saved it in the same location of the project.

If you want to move your project then use this command "npm install cypress".
But it is recommended to use "npm install cypress --save -dev" for the first time.

**Spec :** In cypress they call every test a spec or specification.

**Scaffold example Spec** : it provides sample test cases in cypress for learning.


#### Cypress Folder Structure:

**E2E :** in e2e we will write our test cases. It contains test suits and test cases
**Fixtures :** in fixtures we will write any reusable code
**Node_modules :** node_modules contains all the libraries needed by cypress. 
**cy.js :** cypress specs (testcase) extension is cy.js for e.g. testcase1.cy.js


**Creating and writing test case**

#### To create test case in cypress just make a new file in e2e folder

#### In my case I have created a file with name my_first_test.cy.js 

#### It will also be shown in the cypress window under the specs section


**Syntax:**
 To write test cases in cypress we have to follow the mocha framework.
so the answer is we will follow mocha syntax for writing test cases in Cy.

**Framework:**
A framework is a more comprehensive set of tools, conventions, and guidelines that provide a structure for building applications. It often includes libraries but goes beyond by dictating the architecture of your application and how it should be organized.

**Library:**
A library is a collection of pre-written code or routines that can be used by other programs. It provides specific functionalities that you can use in your application. Libraries are typically focused on solving specific problems or providing specific capabilities.

**Write Test case:**

#### "describe" is test suit . replace 'suit name' with name of your choice

**In Cypress, it's not conventional to write test cases without using the describe() block. 
The describe() block is used to group related test cases into a test suite, which helps in organizing and structuring your tests. 
However, Cypress doesn't strictly enforce the use of describe(), and you can technically write test cases without it.**

```javascript
describe('suit name', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })


// A test suit can have many Test cases. "it" represent a test case.

() => is an arrow function. We can also write it like this.

describe('suit name', () => {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

// Multiple test cases:

// There can be multiple test cases inside a suit.


describe('suit name', () => {

    it('test case 1', () => {
      expect(true).to.equal(true)
    })

	it('test case 2', () => {
      expect(true).to.equal(true)
    })

	it('test case 3', () => {
      expect(true).to.equal(true)
    })

  }) 
  
*when you have more than one testcase in a suit and want to skip one when executing then you can so so by writing "it.skip"*
*They are called cypress tags. there is one more tag used widely. it.only for running specific test case in a test suit*
 
 describe('suit name', () => {

    it.skip('test case 1', () => {
      expect(true).to.equal(true)
    })

	it('test case 2', () => {
      expect(true).to.equal(true)
    })

	it.only('test case 3', () => {
      expect(true).to.equal(true)
    })

  })
  ```

# testsuit --> testcase --> test steps

# specfile(cy.js) --> describe(testsuit) --> it(testcase) -->  

**cy :** cy is a root package in cypress and with it we can access all commands.

         *in selenium we have driver root package.*