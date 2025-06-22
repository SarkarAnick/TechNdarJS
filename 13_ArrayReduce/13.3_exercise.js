/*
    1. create an array called points with numbers 55 to 60
    2. create variable sum using reduce that sums up the points 
*/

points = [55,56,57,58,59,60]

console.log( points.reduce( (x,a) => { return x+a} , 0 ) )
