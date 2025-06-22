/* 
    1. create a variable called "loggedIn" that starts off as false.
    2. create a while loop that loops while "loggedIn" is false
    3. each loop print out "incorrect login credentials"
    4. after 3 loop iterations change "loggedIn" to be true
    5. after the loop is done print out "successfully logged in"

HINT : incase of infinite loop use cmd+c
*/
// let loggedIn = false
// let c = 0
// while (loggedIn === false)
// {
//     console.log(c);
    
//     if(c === 2)
//     {
//         loggedIn = true
//         console.log("successfully logged in");
//         break;
//     }
//     console.log("incorrect login credentials");
//     c++
// }

let loggedIn  = false
let loopCounter = 0 
while(!loggedIn)
{
    console.log("incorrect login credentials");
    
    if(loopCounter === 2)
    {
        loggedIn = true;
    }
    loopCounter++
    
}
console.log("logged in successfully");
