[![LinkedIn](https://img.shields.io/badge/LinkedIn-%40fazleyazdan-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fazle-yazdan/)     [![GitHub](https://img.shields.io/badge/GitHub-%40fazleyazdan-181717?style=for-the-badge&logo=github)](https://github.com/fazleyazdan)

## This project contains best practices for automating web apps with cypress.

#### Here i wrote scripts for automating web apps which will give beginners an idea and understanding of automating web apps with cypress.

#### Cypress : Frontend web Automation Tools. 
####	          Used for modern web application
####	          Open Source Software Except (Dashboard)
	
	
**Traditional web apps** : html, CSS, JS etc.
**Modern Web apps** : React , Node, Angular etc.

*Through cypress we can automate any application which runs on browser*

**Language** : JS is used in Cypress

**Environment** : Node.js
*Cypress built on node JS env*

**Example** : if you want to run any java you need JRE
#### Similarly to run cypress you need to setup Node.js Env
#### It comes with NPM module. We will install libraries from npm

**Who can use Cypress** : 
##### --> to automate End-to-End(E2E) test cases
##### --> Integration Tests
##### --> Unit Test cases 
##### --> API Testing

**So the answer is both Dev and QA people can also use it**


**Cypress VS Selenium:**

<img src="https://i0.wp.com/automatenow.io/wp-content/uploads/2023/12/selenium-vs-cypress.png?resize=1920%2C1080&ssl=1"  height='350px' />


**Cypress Eco System:**

	1. Test Runner (Free) : Open Source Locally Installed (used for setting and running Test cases scripts)
	
	2. Dashboard  (Paid) : used for test reporting and maintaining test history
	

**Features:**

	1. Time Travel : You can go back to previous steps as well as next steps.
	
	2. Screenshot & video : Cypress will capture screenshot for every statement

    2.1. For example : there are 10 lines of code. For every line of execution  
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
	

#### There can also be multiple describe func meaning multiple test suit. And each suit can have multiple test cases.

**cy :** cy is a root package in cypress and with it we can access all commands.

         *in selenium we have driver root package.*


# Running Cypress:

**Headed mode :** to run cypress UI enter command npx cypress open.
  By giving this npx cypress run --headed. Will execute the test cases and will show it on the UI. Also it will show some result on the terminal.

**Headless mode :** to run cypress in headless mode meaning without UI
Then run this command npx cypress run. It will run the test case and will show the results on terminal

If there are 10 specs file inside the e2e folder the by running the above command all test cases will be executed.

Run specific spec file : now if you want to to run specific spec file inside e2e folder then give this command npx cypress run --spec "path of spec file".
e.g. ```npx cypress run --spec "cypress\e2e\2. going forward\visit_web.cy.js"```

Now by default the test case runs in electron browser so to change.
 ```npx cypress run --browser chrome --headed [for headed mode]```