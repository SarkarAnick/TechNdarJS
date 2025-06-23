/*
    1. creatw an array of numbers called numbers : [10,20,15,30,15,20,35,60,10]

    2. find the first duplicate value in numbers and print out the index of the value as well as the index of where it was first found in numbers

    3. in that case we will print : 4 2
        - where 4 is the index of duplicatw
        - 2 is the index of the first pair of the duplicate

    4. hint use a map to keep track of the number -> index pair

    *** common interview question ***
*/

numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const seenNumbers  = new Map()

for( let i = 0 ;  i < numbers.length ; i++)
{
    if(seenNumbers.has(numbers[i]))
    {
        // seen the number previously
        console.log(i , seenNumbers.get(numbers[i]));
        //break // if u just want to find the first duplicate number use break
        
    } else {
        seenNumbers.set(numbers[i] , i ) // number , index
    }
}

console.log(seenNumbers);
