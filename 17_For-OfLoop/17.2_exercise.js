/*
    1. create a variable called "numbers" that points to the array
      - [10,20,40,50,20,100]

    2. print 'squared' using for..of
*/

const numbers = [10, 20, 40, 50, 20, 100];
for (const num of numbers) {
  console.log(num * num);
}
