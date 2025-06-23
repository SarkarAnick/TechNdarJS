/*
1. create an array called points with the following elements :
[10,20,10,30,15,15,35,60,10]

2. how can u print all the unique points inside points
*/

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];
let unique = new Set()

// for (let i = 0; i < points.length; i++) {
//   unique.add(points[i]);
// }
// console.log(unique);



//easier and shorter way to do this prblm
const uniqueElements = new Set(points)

console.log(uniqueElements);
