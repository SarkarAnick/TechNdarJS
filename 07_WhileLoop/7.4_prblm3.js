/*  
    1. create a loop that runs from 1 to 100\
    2. on every 10 loop print out : checkpoint! and the loop number
    3. on loop 50 print out only : half way there
    4.on the final loop 100 print out only: you made it
    5. after the loop is done print out: all done
*/
// let num = 1 
// while( num <= 100)
// {
//     if (num === 100)
//     {
//         console.log("You Made It!");
//     }
//     else if( num === 50)   
//     {
//         console.log("Half Way There!");
        
//     } else if ( num % 10 === 0 )
//     {
//         console.log("Checkpoint! ",num);
//     }
//        num++ 
// }
// console.log("All Done!");

// using "continue" keyword

let num = 1;
while (num <= 100) {
  if (num === 100) {
    console.log("You Made It!");
    num++;
    continue;
  } 
   if (num === 50) {
    console.log("Half Way There!");
    num++
    continue
  } 
   if (num % 10 === 0) {
    console.log(` -> Checkpoint! ${num}`); // a new way to print string and variable together
   }
   num++
 
}
console.log("All Done!");
