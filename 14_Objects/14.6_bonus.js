/*  *** SHEER GREATNESS OF A PROGRAM ***
    1. Create an object called "myConsole"

    2. Assign "myConsole" the key "log" with a value that is an arrow function.

    This arrow function will have one parameter called "message"
    
    The function will just console. log out the "message"
    
    3. How would you call this "log" function inside the object?
    
    You should be able to do: myConsole, log("Hello, friend!");
    BONUS: How might the built-in "console" work?
*/
 
const myConsole = { log : (message) => { console.log(message);
} }

myConsole.log("hello world")

console.log(console)
// we are going to inbuilt console object and referring to log key
