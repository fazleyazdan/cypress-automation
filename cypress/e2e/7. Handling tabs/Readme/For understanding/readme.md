#### Handling Child Tabs In Cypress :

**By Default cypress does not handle child tabs/windows**

*When you are clicking on a text and it leads you to a child tab or new window, an anchor tag is used for that.* **see child_tabs.png** in screenshots folder

#### Approach 1:
an anchor tag has an attribute called **target**. and it has a value *_blank* for opening the tab in new window. **see child_tabs_2.png** in screenshots folder.

so to open the tab in same window we will remove the **target** attribute.

** we can remove that attribute by using **invoke** methode.

#### Approach 2:
*we know that an anchor tag has href attribute, in which we specify the url of the target window/tab.*

Now in this approach we will capture the value of **href** and then we will use another **cy.visit** to visit that page.

**this approach has a limitation. the domain of the child and parent should be the same. otherwise the child tab won't be accessed**
This is the domain *'https://the-internet.herokuapp.com'*. it must be same.
sub domain can be anything. ie. '/windows' or 'window/new'.
