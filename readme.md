project plan: 
- Users can input ice cream flavors into a form. 
- We will then use a for loop to manipulate said user form 
- and print it to the webpage.
- make sure it does not repeat/clears previous submissions

each input is gathered and then pushed to a master array to loop through?
if someone enters in one flavor it will return 1, 2 flavors and it returns 2, 3 and it returns 3 (implement one input at a time and push them into an array to be printed to the screen)

tests/functions needed:


Describe: renderFlava() 

Test #1: it will return a string if the user inputs a string
Code: let flavor ='hi man';
renderFlava("flavor");
Expected Output: 'hi man'

Test #2: It will separate sentences by their words, so a loop can be used on the individual elements.
Code:
flavor = "chocolate strawberry"
renderFlava(flavor);
Expected Result: "chocolate", "strawberry"