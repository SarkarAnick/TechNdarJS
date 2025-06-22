/*
Create a program that starts with a number variable 
-> The program will print out whether the variable is even or odd 
-> check if works on both case
*/

let num = 0;
if (num === 0) {
  console.log("0 is neither odd nor even philosophically");
} else if (num % 2 === 0) {
  console.log(num, " is even number");
} else if (num % 2 !== 0) {
  console.log(num, " is odd number");
}
