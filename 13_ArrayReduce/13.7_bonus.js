/*
    1. create nums = [10,30,50,70,90]
    2. create squares that maps over nums and return each item squared
    3.create over1000 that filters squares to contain only values over 1000
    4. create finale that reduces over 1000 to single sum of elemetnts
*/

nums = [10, 30, 50, 70, 90]
  .map((a) => {
    return a * a;
  })
  .filter((a) => {
    if (a > 1000) return a;
  })
  .reduce((x, a) => {
    return x + a;
  }, 0);
console.log(nums);
