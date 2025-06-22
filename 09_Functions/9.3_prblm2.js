/* Write a function named "login":

    1. The function has two parameters :
        -> username : this should be a string 
        -> password : this should be a string
    2. Return True in the followiung cases:
        -> username is "admin" (any password , doesnt matter) 
        -> username is "monkey" and passsword is "123"
        -> username is "moomoo" and password is "farm"
    3. In all other cases return false
    4. test the function like so:
        => const test = login("hello" , "meow")
        => const test2 = login("admin" , "lol")
        => const test3 = login("monkey" , "123")
        => const test4 = login("moomoo" , "farm")
        => const test5 = login("moomoo" , "moo")
*/

const login = (username, password) => {
  if (
    username === "admin" ||
    (username === "monkey" && password === "123") ||
    (username === "moomoo" && password === "farm")
  ) {
    return true;
  }
  return false;
};
const test = login("hello", "meow");
const test2 = login("admin", "lol");
const test3 = login("monkey", "123");
const test4 = login("moomoo", "farm");
const test5 = login("moomoo", "moo");
console.log(test, test2, test3, test4, test5);
