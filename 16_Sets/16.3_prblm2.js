/*
    1. create an array called points with the following elements :
        [10,20,10,30,15,15,35,60,10]
    
    2. find the first duplicate value in the numbers and print it out in the terminal

    HINT: add the number to a set as u loop through the numbers
*/

points = [10, 20, 15, 30, 15, 20, 35, 60, 10];
unique = new Set()
for(let i = 0 ; i < points.length ; i++)
{
    if(unique.has(points[i]))
    {
        console.log(points[i])
        break;
    } else {
        unique.add(points[i])
    }
}