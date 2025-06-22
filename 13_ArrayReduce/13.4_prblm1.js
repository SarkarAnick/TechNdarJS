/*
    1. create array called companies 
        ["apple" , "tesla" , "spacex" , "amazon" , "meta" , "google"]
    2. create const called modded that reduces the companies arrat to a string of comapnies that donot start with the letter a . seperated by dashes

    3. print out companies and modded

    *** think how can u get rid  of the trailing '-'
*/

companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

modded = companies.reduce( (x,a ,i) => { // i keeps track of the index of the array
    if  (a.startsWith('a')) //(a[0] === 'a')
        return x
    if( i === companies.length-1)
    {
        return x + a;
    }
    return x+a+"-"
} , "" )

console.log(modded);
