To interact with web elements we have to locate and identify them.
We identify web elements through **locators**

By default cypress uses **CSS selectors**
For xpath we have to install xpath plugin/library

**Cy.get()** : we use this to find element. We pass locator as a parameter.



Locators
-----------------

CSS Selector
XPath


cy.get (Locator)

**CSS Selector**

1) tag id
2) tag class
3) tag attribute
4) tag class attribute

*Note : tag is optional in CSS selectors*


**Syntax  :**

1) tag#id
2) tag.class
3) [attribute='value']
4) .class [attribute='value']
5) Tag.class[attribute= 'value']


/// <reference types = 'Cypress'/>
Whenever we use cy.visit() the above statement is auto written. To tackle this go to support folder
And add this in command.js



**Xpath :** xpath is not supported by cypress, so we have to install that plugin using this command 

```npm install -D cypress-xpath```

Also add following code in command.js

        ///  <reference types = "cypress-xpath"/>

        import 'cypress-xpath'  OR

        Add following in e2e.js folder :

        require ("cypress-xpath")


Otherwise you have to add the above statement in every single file where you use xpath. So it's better to add the statement in command.js


#### Note : cy.get() won't work with xpath. It is default and only works with css locators.


**Chained Xpath** : in chained xpath we can write n-number of xpath to hit an element.

For e.g. this is the image element that we are targeting 
cy.xpath("//a/img") :

We can also write It like this 
cy.xpath("//a").xpath("./img")      Note : write the dot before the chained xpath

Meaning we can chain an xpath.
