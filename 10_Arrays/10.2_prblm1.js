/* 
    1. create a variable called multiple adn initialise it with 5 
        create an array with the numbers 10 - 15 
    2. loop through the array and on each iteration:
        - multiply the number by multiple and print the result 
*/

const multiple = 5;
const numbers =[10,11,12,13,14,15]

for(let i = 0 ; i < numbers.length ; i++)
{

    console.log(`${numbers[i]} x ${multiple} = ${multiple * numbers[i]}`);
    
}