/*
    write a function called "noRemainder"

    1. this function has two parameters
        -number
        - mod
    2. this function will return :
        - true : if number is evenly divisible by mod
        - false : if number is not evenly divisible by mod
    3. call the functio like this:
        const result1 -= noRemainder(10,7)
        const result2 = noRemainder(10000010,10)
*/
const noRemainder = (number, mod) => {
  if (number % mod === 0) {
    return true;
  } else {
    return false;
  }
//   if (number % mod === 0) {
//     return true;                  ==> else block dewar dorkar i nei 
//   } 
//     return false;

};
const result1 = noRemainder(10, 7);
console.log(result1);
const result2 = noRemainder(10000010, 10);
console.log(result2);
