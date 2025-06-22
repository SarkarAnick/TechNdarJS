/*
     Write a function called "chill":
     1. print at start "do some chilling"
     2. then prints out :
        "chill...1"
        "chill...2"
        ...
        "chill...10"
     3.then finally print out : " that was ice cold"

*/

const chill = (message, num) => {
  console.log("Lets do some Chilling");
  for (let i = 1; i <= num; i++) {
    console.log(`${message} ${i}`); // `${}` - dynamic interpolation of variables within a string
  }
  console.log("That Was Ice Cold");
};
let message = "chill...";
let num = 10;
chill(message, num);
