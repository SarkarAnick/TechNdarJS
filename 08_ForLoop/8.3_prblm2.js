/* 
    1. Create a variable called loggedIn that starts of as false
    2. create a for loop that loops while "loggedIn" is false 
    3. each loop print out : Incorrect Login Credentials
    4. After 3 iterations , changed "loggedIn" to true 
    5. After the loops is done , print out "Successfully Logged In"
*/
let loggedIn = false,
  i = 1;
for (; !loggedIn; i++) // see the construct of forloop
  {
  console.log("incorrect login credentials");

  if (i === 3) {
    loggedIn = true;
  }
}
console.log("successfully logged in");
