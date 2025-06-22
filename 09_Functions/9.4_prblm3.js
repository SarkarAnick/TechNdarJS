/* 
    1.write a function called "square"
    
    square will have one parameter :
        - num : this will be a number
    square will return the square of num

    2. write another function called sumOfSquares:

    sumOfSquares will have two parameters :
        - num1 : a number
        - num2 : a number
    sumOfSquares will need to :
        - use the square function inside itself
        - return back square of num1 + square of num2 
    3. Test the function using :
        const sum1 = sumOfSquares(2,3)
        const sum2 = sumOfSquares(3,4)
*/
const square = (num) => {
  return num * num;
}

const sumOfSquares = (num1, num2) => {
//   const square = (num) => {
//     return num * num;
//   }
  return square(num1) + square(num2);
}
let sum1 = sumOfSquares(2, 3);
let sum2 = sumOfSquares(3, 4);
console.log(sum1);
console.log(sum2);

 