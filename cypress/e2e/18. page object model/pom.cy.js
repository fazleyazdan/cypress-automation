//* Normally when we execute a test case we write the locators and then corresponding action in the same test case. 
//* Drawbacks : one of the drawbacks of that approach is that 
//* 1: if we need those locators again to perform some action we have to catch it and write it again. So duplication occurs.
//* Another drawback is the Updation. Suppose if the locator of an element is changed.... 
//* Then we have to update the Locator across multiple test cases. 
//*  Page Object Model (Pom) : Page object model pattern is a separate file in which we store all locators of a page That we need. 
//* One of the benefit of pom is that the locators are separated from the rest of the script and we no need to write it again.
//* Pom supports the idea to store all locators once and use it whenever it is needed.