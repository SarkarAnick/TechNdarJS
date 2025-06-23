/*  *** SHEER GREATNESS OF A PROGRAM ***
    1. Create an map called "myConsole"

    2. Assign "myConsole" the key "log" with a value that is an arrow function.

    This arrow function will have one parameter called "message"
    
    The function will just console. log out the "message"
    
    3. call the function with a message . how does it comapre to Objects?

    4. add the following key value pair to the map :
    - 1: "number one"
    - "1" : string one

    5. log out each of the 2 values for the keys u just added
*/

myConsole = new Map();
myConsole.set("log", (message) => {
  console.log(message);
});
myConsole.get("log")("hello"); // calling log will give us a function so we are passsing the argument ("message")

myConsole.set(1, "number one"); // the difference u will see here from object is integer 1 will itself be a log which is not possible with objects as object converts all keys to string. so 1 and "1" will be different logs .
myConsole.set("1", "string one");
// doing the same thing with object will result in overriding of value of 1 with that of "1"

console.log(myConsole);

