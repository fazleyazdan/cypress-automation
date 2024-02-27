#### **Assertions :** assertion are validation points

For e.g. we can validate whether this element contain this text or 
The title of the web page etc.

We can use multiple assertion in cypress and basically these assertions comes from
The **chai** library.

**There two types of assertions :**

1) **Implicit assertions**  (built-in/default in cypress)
   Under the implicit assertion we will mainly use
	 a. Should
	 b. And
	
2) **Explicit assertions**  (which we need to write explicitly)
   Under the explicit assertion we will mainly use
	 a. Expect (mainly use in Tdd approach)
	 b. Assert  (Bdd approach)
	
*All assertion comes from **chai** library.*

#### explcit assertion are customized assertions

```cy.get(".oxd-userdropdown-name").then```

In **Cypress**, then is a method used to perform actions or assertions after a previous command has completed. Cypress commands are asynchronous, and then is often used to work with the results of the previous command.

#### Here's a brief explanation:

**Asynchronous Nature:** Many Cypress commands are asynchronous because they interact with the browser, which can take some time. **For example**, cy.get() is asynchronous because it waits for the element to be available in the DOM.

**Chaining Commands:** Cypress allows you to chain commands together. When you chain commands, each command operates on the subject (the result of the previous command).

**then Method:** The then method is used to perform actions or assertions on the subject after the previous command has completed. It's a way to work with the result of the previous command.