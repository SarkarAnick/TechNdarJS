/* 
    1.create array "row" : [10,20,30,40,50]
    2. create new array matrix that - maps over row and return each item but in an array
    ( should have a two dimensional array as result)
    3. print both
*/

row = [10, 20, 30, 40, 50];

// matrix = row.map( (a) => {
//     return [a ] // basically i am putting each element in an array and returning *** beautiful
//     // return [a , a*2 ,a*3]  try this sometime and see
// })

// console.log(matrix);


// another way can be -> we know we can push any elemnt in a empty array using .push()

matrix = row.map( (a) => { 
    const arr = []
    arr.push(a)
    return arr
})

console.log(matrix);

