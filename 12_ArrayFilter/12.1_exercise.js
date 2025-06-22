/* 
     1. create an array called practice with numbers 10 -20
     2. create another array using filter that keeps the even number in practice
*/

practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

filtPractice = practice.filter((a) => {
  if (a % 2 === 0) return true;
});

console.log(filtPractice);
