#### Handling Child Tabs In Cypress :

**By Default cypress does not handle child tabs**

*When you are clicking on a text and it leads you to a child tab or new window, an anchor tag is used for that.* **see child_tabs.png** in screenshots folder

an anchor tag has an attribute called **target**. and it has a value *_blank* for opening the tab in new window. **see child_tabs_2.png** in screenshots folder.

so to open the tab in same window we will remove the **target** attribute.

** we can remove that attribute by using **envoke** methode.