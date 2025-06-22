/*
    1. create array nums =[10,20,30,40,50]
    2. create array called times2 that maps over nums and returns each element times 2 
    3. create array over50 that keeps values over 50
*/

// nums = [10, 20, 30, 40, 50];

// times2 = nums.map( (a) => {return a*2})

// over50 = times2.filter( (a) => { if(a>50) return true} )

// console.log(` nums : ${nums}`);
// console.log(` times2 : ${times2}`);
// console.log(` over50 : ${over50}`);

// *** this whole thing could be done in a single statement in a nested way nums = [...].map().filter()

nums = [10, 20, 30, 40, 50]
  .map((a) => {
    return a * 2;
  })
  .filter((a) => {
    if (a > 50) return true;
  });

  console.log(nums);
  