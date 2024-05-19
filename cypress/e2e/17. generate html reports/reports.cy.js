//* in cypress we can generate html report by installing a package called 'cypress-mochawesome-reporter'
//* after installing it we have to do some changes in 'cypress.config.js'. see package info on npm website
//* add this: import 'cypress-mochawesome-reporter/register' in e2e.js.

//* run any testsuit/test cases on headless or headed mode and the report will be generated for that test cases.
//* to run it in the headed mode write this statement
//* npx cypress run --headed --spec "relative path of test"
//! the report will be saved in the report folder inside index.html
//* right click on it and copy full of path of index.html. then paste that path in chrome and hit enter

//* some other commands
`npx cypress run --reporter cypress-mochawesome-reporter`

