/* 
SPOT THE BUG:
    -> should print "Most places consider you an adult!"
but it doesnt . why?

const age = 20;
if (age < 3) {
    console.log("You're just a baby!");
} else if (age >= 3) {
    console.log("You are in elementary school, kid.");
} else if (age >= 13) {
    console.log ("Nice, you're a teenager!");
} else if (age >= 18) {
    console. log("Most places consider you an adult.");
} else {
 console.log("what? How did this happen?")
}
*/

// const age = 20;
// if (age < 3) {
//   console.log("You're just a baby!");
// } else if (age >= 3 && age <= 13) {
//   console.log("You are in elementary school, kid.");
// } else if (age >= 13 && age <= 18) {
//   console.log("Nice, you're a teenager!");
// } else if (age >= 18) {
//   console.log("Most places consider you an adult.");
// } else {
//   console.log("what? How did this happen?");
// }

// changing order of sentences also can solve the problem
const age = 13;
if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else {
  console.log("what? How did this happen?");
}