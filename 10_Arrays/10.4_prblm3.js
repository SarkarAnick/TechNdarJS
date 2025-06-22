/*
    create a variable called "total" that starts from 0 
    
    create an array called grades :
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43

        Figure out how to print out the average grade
*/

let total = 0 ;
const grades = [55,63,82,98,91,43]

for( let i = 0 ; i < grades.length ; i++)
{
    total += grades[i]
}

console.log(total/grades.length);
