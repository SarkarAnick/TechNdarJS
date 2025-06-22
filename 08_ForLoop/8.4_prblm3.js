/*  
    1. create a loop that runs from 1 to 100\
    2. on every 10 loop print out : checkpoint! and the loop number
    3. on loop 50 print out only : half way there
    4.on the final loop 100 print out only: you made it
    5. after the loop is done print out: all done
*/
for (let i = 1; i <= 100; i++) {
  if (i === 100) {
    console.log("You Made It");
    continue;
  }
  if (i === 50) {
    console.log("Half Way There");
    continue;
  }
  if (i % 10 === 0) {
    console.log(`Checkpoint! ${i}`);
  }
}
console.log("All Done!");
