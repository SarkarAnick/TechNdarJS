/*
    1. Create an array called practice with the numbers 25 to 30 
    2. create another array using map that squares each element in practice 
    3. print both
*/
practice = [25,26,27,28,29,30]
practiceSquare = practice.map((a) => {return a*a})

console.log(`practice : ${practice}`);
console.log(practiceSquare);

