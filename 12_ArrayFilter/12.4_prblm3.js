/* 
    1.create the following array called values 
    [ [1,2,3] , [0,0,1] , [3,6,9] , [0,1,2] ]

    2. create array called hasTwo that filter over values and keeps array that have 2 in them

    *** check arrayIncludes -> array.includes()
*/

values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

hasTwo = values.filter ( (a) => {
    if(a.includes(2))
        return a
} )

console.log(hasTwo);
