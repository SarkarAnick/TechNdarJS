/*
    1. Create a variable called numbers that points to a new set.

    2. Add the following numbers to numbers each on a separate line 1 2 3 4 5 2 3 4 .

    3. Print out numbers and note what is inside it

    4. Repeat the same steps about, but with array how does this differ?
*/

numbers = new Set()
numbers.add(1)
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);

console.log(numbers); // will show only the unique elements

const numbersArray = [1, 2, 3, 4, 5, 2, 3, 4 ]
console.log(numbersArray); // will allow duplicates to be there


